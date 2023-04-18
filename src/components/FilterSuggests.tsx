import { FC } from "react";
import SearchTitle from "search-components/components/searchElement/SearchBar/SearchTitle";
import FieldSeries from "search-components/components/searchElement/fields/FieldSeries";
import { MdFilterAlt } from "react-icons/md";
import { FilterSearchHintResponse, SearchHandler } from "../type";

interface FilterSuggestsProps {
    hints: Array<FilterSearchHintResponse>,
    onSuggestClick: SearchHandler,
}

const FilterSuggests: FC<FilterSuggestsProps> = ({hints, onSuggestClick}) => {
    return <>
        <SearchTitle>Фильтры</SearchTitle>

        <span className="font-size-13">
            Используйте 
            <img src="/kit/chips.png" alt="" />
            для выбора нескольких фильтров.
        </span>

        <div className="row w-100">
            {
                hints.map((hint, idx) => {
                    return (
                        <FieldSeries
                            key={idx}
                            icon={<MdFilterAlt size={24} fill={'gray'} />} 
                            title={hint.title} 
                            subtitle={hint.subtitle}
                            handleArrowClick={() => { onSuggestClick(hint.title, 'filter') }}
                        ></FieldSeries>
                    )
                })
            }
        </div>
    </>
}

export default FilterSuggests;