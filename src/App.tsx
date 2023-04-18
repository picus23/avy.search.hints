import { FC, FormEvent, FormEventHandler, useState } from 'react'
import SearchInput from 'search-components/components/searchElement/SearchInput'
import SearchBarEncoding from 'search-components/components/searchElement/SearchBarEncodings'
import FilterSuggests from './components/FilterSuggests'
import SeriesSuggests from './components/SeriesSuggests'
import CodeSuggests from './components/CodeSuggests'
import CategorySuggests from './components/CategorySuggests'
import FileSuggests from './components/FileSuggests'
import {GlobalSearchHintsResponse, SearchHandler} from './type'
import { pushPhrase } from './searchHistory'
import EmptyHints from './components/EmptyHints'

interface AppProps {
  getGlobalSearchHints: (phrase: string) => Promise<GlobalSearchHintsResponse>
  handleSearch: SearchHandler
}

const App: FC<AppProps> = ({getGlobalSearchHints, handleSearch}) => {
  const [searchHints, setSearchHints] = useState<GlobalSearchHintsResponse>()
  const [isFocused, setFocused] = useState<boolean>()

  let searchPhrase: string;

  const handleUserType = (phrase: string) => {

    searchPhrase = phrase
    
    getGlobalSearchHints(phrase)
      .then((hints: GlobalSearchHintsResponse) => {
        setSearchHints(hints)
      })
  }

  const handleSearchWrapper: SearchHandler = (phrase: string, context: string|null) => {
    pushPhrase(phrase)
    handleSearch(phrase, context)
  }

  const handleFocus = (isFocused: boolean) => {
    setFocused(isFocused)
  }

  return (
    <div className="App search-hint-wrap flex-grow-1">
      <SearchInput 
        handleUserTyping={handleUserType} 
        handleSearch={handleSearchWrapper}
        handleFocus={handleFocus}
      ></SearchInput>

      {isFocused && (searchHints === undefined || Object.keys(searchHints).length === 0) &&
        <SearchBarEncoding>
          <EmptyHints></EmptyHints>
        </SearchBarEncoding>
      }

      {searchHints !== undefined && Object.keys(searchHints).length !== 0 &&
        <SearchBarEncoding>
          <div className="search-hint-history">

            {searchHints?.filter !== undefined &&
              <>
                <FilterSuggests 
                  hints={searchHints.filter}
                  onSuggestClick={handleSearchWrapper}
                ></FilterSuggests>
                <hr className="w-100" />
              </>
            }

            {searchHints?.code !== undefined &&
              <>
                <CodeSuggests 
                  hints={searchHints.code}
                  onSuggestClick={handleSearchWrapper}
                ></CodeSuggests>
                <hr className="w-100" />
              </>
            }

            {searchHints?.series !== undefined &&
              <>
                <SeriesSuggests 
                  hints={searchHints.series}
                  onSuggestClick={handleSearchWrapper}
                ></SeriesSuggests>
                <hr className="w-100" />
              </>
            }

            {searchHints?.category !== undefined &&
              <>
                <CategorySuggests 
                  hints={searchHints.category} 
                  onSuggestClick={handleSearchWrapper}
                ></CategorySuggests>
                <hr className="w-100" />
              </>
            }

            {searchHints?.file !== undefined &&
                <FileSuggests 
                  hints={searchHints.file}
                  onSuggestClick={handleSearchWrapper}
                ></FileSuggests>
            }

          </div>
        </SearchBarEncoding>
      }
    </div>
  )
}

export default App
