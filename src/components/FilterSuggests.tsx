import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
// import { MdFilterAlt } from "react-icons/md";
import { FilterSearchHintResponse, SearchHandler } from "../type";
import Highlighter from "./Highlighter";

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
                            // icon={<MdFilterAlt size={24} fill={'gray'} />} 
                            title={<Highlighter text={hint.value_highlighted} />} 
                            handleArrowClick={() => { onSuggestClick(hint.search, 'filter') }}
                        ></FieldSeries>
                    )
                })
            }
        </div>
    </>
}

export default FilterSuggests;