import { createRef, Component, RefObject } from 'react'
import SearchInput from 'kit/components/searchElement/SearchInput'
import SearchBarEncoding from 'kit/components/searchElement/SearchBarEncodings'
import FilterSuggests from './components/FilterSuggests'
import SeriesSuggests from './components/SeriesSuggests'
import CodeSuggests from './components/CodeSuggests'
import CategorySuggests from './components/CategorySuggests'
import FileSuggests from './components/FileSuggests'
import { GlobalSearchHintsResponse, SearchHandler } from './type'
import { pushPhrase } from './searchHistory'
import EmptyHints from './components/EmptyHints'

interface AppProps {
  initSearchPhrase?: string,
  getGlobalSearchHints: (phrase: string) => Promise<GlobalSearchHintsResponse>
  handleSearch: SearchHandler
}

class App extends Component<AppProps> {

  wrapContainer: RefObject<HTMLDivElement>

  state: {
    isHintsDisplayed: boolean
    searchHints: GlobalSearchHintsResponse
    inputPhrase: string
  }

  constructor(props: AppProps) {
    super(props)

    this.state = {
      isHintsDisplayed: false,
      searchHints: {} as GlobalSearchHintsResponse,
      inputPhrase: props.initSearchPhrase !== undefined ? props.initSearchPhrase : ''
    }

    this.wrapContainer = createRef<HTMLDivElement>()
  }

  componentDidMount(): void {
    document.addEventListener('click', this.globalClickHandler)

    if (this.props.initSearchPhrase !== undefined) {
      this.handleUserType(this.props.initSearchPhrase)
    }
  }

  componentWillUnmount(): void {
    document.removeEventListener('click', this.globalClickHandler)
  }

  globalClickHandler = (e: MouseEvent): void => {
    if (this.wrapContainer.current === null) {
      return;
    }

    if (this.wrapContainer.current.contains(e.target as Node)) {
      return this.setHintsDisplayed(true)
    }

    this.setHintsDisplayed(false)
  }

  setHintsDisplayed = (status: boolean) => {
    this.setState({ ...this.state, isHintsDisplayed: status })
  }

  setSearchHints = (hints: GlobalSearchHintsResponse) => {
    this.setState({ ...this.state, searchHints: hints })
  }

  setInputPhrase = (phrase: string) => {
    this.setState({ ...this.state, inputPhrase: phrase })
  }

  handleSearchWrapper: SearchHandler = (phrase: string, context: string | null) => {
    this.setHintsDisplayed(false)
    if (context == 'search')
      pushPhrase(phrase)

    this.props.handleSearch(phrase, context)
  }

  handleUserType = (phrase: string) => {

    this.setInputPhrase(phrase)

    this.props.getGlobalSearchHints(phrase)
      .then((hints: GlobalSearchHintsResponse) => {
        this.setSearchHints(hints)
      })
  }

  render() {
    return (
      <div className="App search-hint-wrap flex-grow-1" ref={this.wrapContainer}>
        <SearchInput
          searchPhrase={this.state.inputPhrase}
          handleUserTyping={this.handleUserType}
          handleSearch={this.handleSearchWrapper}
        />

        {this.state.isHintsDisplayed && Object.keys(this.state.searchHints).length === 0 &&
          <SearchBarEncoding>
            <EmptyHints onSuggestClick={this.handleSearchWrapper}></EmptyHints>
          </SearchBarEncoding>
        }

        {this.state.isHintsDisplayed && Object.keys(this.state.searchHints).length !== 0 &&
          <SearchBarEncoding>
            <div className="search-hint-history">

              {/* {this.state.searchHints?.filter !== undefined &&
                <>
                  <FilterSuggests
                    hints={this.state.searchHints.filter}
                    onSuggestClick={this.handleSearchWrapper}
                  ></FilterSuggests>
                  <hr className="w-100" />
                </>
              } */}

              {/* {this.state.searchHints?.code !== undefined &&
                <>
                  <CodeSuggests
                    hints={this.state.searchHints.code}
                    onSuggestClick={this.handleSearchWrapper}
                  ></CodeSuggests>
                  <hr className="w-100" />
                </>
              } */}

              {this.state.searchHints?.series !== undefined &&
                <>
                  <SeriesSuggests
                    hints={this.state.searchHints.series}
                    onSuggestClick={this.handleSearchWrapper}
                  ></SeriesSuggests>
                  <hr className="w-100" />
                </>
              }

              {/* {this.state.searchHints?.category !== undefined &&
                <>
                  <CategorySuggests
                    hints={this.state.searchHints.category}
                    onSuggestClick={this.handleSearchWrapper}
                  ></CategorySuggests>
                  <hr className="w-100" />
                </>
              } */}

              {this.state.searchHints?.file !== undefined &&
                <FileSuggests
                  hints={this.state.searchHints.file}
                  onSuggestClick={this.handleSearchWrapper}
                ></FileSuggests>
              }

            </div>
          </SearchBarEncoding>
        }
      </div>
    )
  }
}

export default App
