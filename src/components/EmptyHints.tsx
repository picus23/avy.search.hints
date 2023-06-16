import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldCategory from "kit/components/searchElement/fields/FieldCategory";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
import { MdSearch } from 'react-icons/md'
import { getStorage } from "../searchHistory";
import { SearchHandler } from "../type";

interface EmptyHintsProps {
    onSuggestClick: SearchHandler,
}

const EmptyHints: FC<EmptyHintsProps> = ({onSuggestClick}) => {
    return <>

        {
            getStorage().length !== 0 && getStorage().map((hint, idx) => {
                return <div className="me-2" key={idx} onClick={() => { onSuggestClick(hint, null) }}>
                    <MdSearch size={24} fill={'gray'} />
                    <span className="font-size-20 ms-3 fw-500">{hint}</span>
                </div>
            })
        }

        <hr />

        <SearchTitle>Часто ищут</SearchTitle>
        {
            ['Hy-Lok 3мм', 'Шаровые краны', 'Микронные фильтры'].map((title, idx) => (
                <FieldCategory key={idx} title={title} handleArrowClick={() => {onSuggestClick(title, null)}}/>
            ))
        }

        <hr />

        <SearchTitle>Популярные категории</SearchTitle>
        {
            [
                ['Фитинги для труб', '45 серия', '/kit/empty_square.png'],
                ['Шаровые краны', '45 серия', '/kit/empty_square.png'],
                ['Микронные фильтры', '45 серия', '/kit/empty_square.png'],
            ].map((item, idx) => (
                <FieldSeries
                    key={idx} 
                    title={item[0]} 
                    subtitle={item[1]} 
                    icon={<img src={item[2]} alt="" />}
                    handleArrowClick={() => { onSuggestClick(item[0], 'category') }}
                ></FieldSeries>
            ))
        }
    </>
}

export default EmptyHints;