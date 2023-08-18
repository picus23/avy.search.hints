import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldCategory from "kit/components/searchElement/fields/FieldCategory";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
import { MdSearch } from 'react-icons/md'
import { getStorage } from "../searchHistory";
import { SearchHandler } from "../type";


export interface PopItem {
    title: string,
    image: string,
    url: string,
}
interface EmptyHintsProps {
    pop: PopItem[],
    onSuggestClick: SearchHandler,
}



const EmptyHints: FC<EmptyHintsProps> = ({ pop, onSuggestClick }) => {

    const storage = getStorage()


    return <>
        {
            storage.length != 0 && <>
                <SearchTitle>Вы искали</SearchTitle>
                <div className="d-flex align-items-center">

                    {
                        storage.map((hint, idx) => {
                            return <div role="button" className="p-1 me-2" key={idx} onClick={() => { onSuggestClick(hint, 'search') }}>
                                <MdSearch size={24} fill={'gray'} />
                                <span className="font-size-20 p-1 fw-500">{hint}</span>
                            </div>
                        })
                    }

                </div>
                <hr />
            </>

        }
        <SearchTitle>Часто ищут</SearchTitle>
        {
            [
                '105',
                'Hy-Lok 3мм',
                'Шаровые краны инструментальные',
                'Микронные фильтры',
            ].map((title, idx) => (
                <FieldCategory key={idx} title={title} handleArrowClick={() => { onSuggestClick(title, 'search') }} />
            ))
        }

        {
            pop && !!pop.length && <>
                <hr />
                <SearchTitle>Популярные категории</SearchTitle>
                {
                    pop.map(({ title, image, url }, idx) => (
                        <FieldSeries
                            key={idx}
                            title={title}
                            subtitle={''}
                            icon={image}
                            handleArrowClick={() => { onSuggestClick(url, 'url') }}
                        ></FieldSeries>
                    ))
                }


            </>
        }


    </>
}

export default EmptyHints;