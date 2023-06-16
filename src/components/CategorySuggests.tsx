import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
import { CategorySearchHintResponse, SearchHandler } from "../type";

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
                    title={item.title} 
                    subtitle={item.subtitle} 
                    icon={<img src={item.iconSrc} alt="" />}
                    handleArrowClick={() => { onSuggestClick(item.title, 'category') }}
                ></FieldSeries>
            ))
        }
        </div>
    </>
}

export default CategorySuggests;