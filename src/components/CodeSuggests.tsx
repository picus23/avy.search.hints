import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import { CodeSearchHintResponse, SearchHandler } from "../type";
import Highlighter from "./Highlighter";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
import BasketAddButton from 'basket/src/Basket/BasketAddButton'
import FieldPagetitle from "kit/components/searchElement/fields/FieldPagetitle";

interface CodeSuggestsProps {
    hints: Array<CodeSearchHintResponse>,
    onSuggestClick: SearchHandler,
}

const CodeSuggests: FC<CodeSuggestsProps> = ({ hints, onSuggestClick }) => {
    console.log({ hints })
    return <>
        <SearchTitle>Кодировки</SearchTitle>

        <div className="row w-100 overflow-auto" style={{ maxHeight: 200 }}>
            {
                hints.map((item, idx) => {
                    return (
                        <FieldPagetitle 
                            key={idx}
                            imageUrl={item.image_url}
                            pagetitle={<Highlighter text={item.value_highlighted} />}
                            basketButton={<BasketAddButton pagetitle={item.value} />}
                            handleArrowClick={() => onSuggestClick(item.value, 'search')}
                        ></FieldPagetitle>
                    )
                })
            }
            {/* <ButtonShow btn_style='show' text={'Показать все кодировки'} text_style={'font-size-16-black fw-500'} counter={12}></ButtonShow> */}
        </div>
    </>
}

export default CodeSuggests;