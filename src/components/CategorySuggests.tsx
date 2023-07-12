import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
import { CategorySearchHintResponse, SearchHandler } from "../type";
import Highlighter from "./Highlighter";

interface CategorySuggestsProps {
    hints: Array<CategorySearchHintResponse>,
    onSuggestClick: SearchHandler,
}

const CategorySuggests: FC<CategorySuggestsProps> = ({hints, onSuggestClick}) => {

    return <>
        <SearchTitle>Категории</SearchTitle>
        
        <div className="row w-100">
        {
            hints.map((item, idx) => (
                
                <FieldSeries 
                    key={idx}
                    title={<Highlighter text={item.value_highlighted} />} 
                    handleArrowClick={() => { onSuggestClick('/products/' + item.url, 'url') }}
                ></FieldSeries>
            ))
        }
        </div>
    </>
}

export default CategorySuggests;