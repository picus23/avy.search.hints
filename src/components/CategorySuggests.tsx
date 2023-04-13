import { FC } from "react";
import SearchTitle from "search-components/components/searchElement/SearchBar/SearchTitle";
import FieldSeries from "search-components/components/searchElement/fields/FieldSeries";
import { CategorySearchHintResponse } from "../type";

interface CategorySuggestsProps {
    hints: Array<CategorySearchHintResponse>
}

const CategorySuggests: FC<CategorySuggestsProps> = ({hints}) => {
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
                ></FieldSeries>
            ))
        }
        </div>
    </>
}

export default CategorySuggests;