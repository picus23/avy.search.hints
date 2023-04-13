import { FC } from "react";
import SearchTitle from "search-components/components/searchElement/SearchBar/SearchTitle";
import FieldCategory from "search-components/components/searchElement/fields/FieldCategory";
import FieldSeries from "search-components/components/searchElement/fields/FieldSeries";
import { MdSearch } from 'react-icons/md'
import { getStorage } from "../searchHistory";

interface EmptyHintsProps {
}

const EmptyHints: FC<EmptyHintsProps> = ({}) => {
    return <>

        {
            getStorage().length !== 0 && getStorage().map((hint, idx) => {
                return <div className="me-2" key={idx}>
                    <MdSearch size={24} fill={'gray'} />
                    <span className="font-size-20 ms-3 fw-500">{hint}</span>
                </div>
            })
        }

        <hr />

        <SearchTitle>Часто ищут</SearchTitle>
        {
            ['Hy-Lok 3мм', 'Шаровые краны', 'Микронные фильтры'].map((title, idx) => (
                <FieldCategory key={idx} title={title} />
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
                ></FieldSeries>
            ))
        }
    </>
}

export default EmptyHints;