import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldEncoding from "kit/components/searchElement/fields/FieldEncoding";
import ButtonCounter from "kit/components/buttons/ButtonCounter";
import Button from "kit/components/buttons/Button";
import ButtonShow from "kit/components/buttons/ButtonShow";
import { CodeSearchHintResponse, SearchHandler } from "../type";
import { MdShoppingCart } from "react-icons/md";
import Highlighter from "./Highlighter";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";

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
                        <FieldSeries
                            key={idx}
                            title={<Highlighter text={item.value_highlighted} />}
                            handleArrowClick={() => { onSuggestClick(item.value, 'search') }}
                        ></FieldSeries>
                        // <FieldEncoding 
                        //     key={idx}
                        //     pagetitle={<Highlighter text={item.value_highlighted} />}

                        //     button={<ButtonCounter text_style={'font-size-16-gray'} counter={1} btn_style="counter-h40"></ButtonCounter>}
                        //     button2={<Button icon={<MdShoppingCart size={24} fill={'white'} />} btn_style={"btn-primary"}><span className="fw-500">Купить</span></Button>}
                        //     btnGrayArrow={true}
                        //     handleArrowClick={() => onSuggestClick(item.value, 'search')}
                        // ></FieldEncoding>
                    )
                })
            }
            {/* <ButtonShow btn_style='show' text={'Показать все кодировки'} text_style={'font-size-16-black fw-500'} counter={12}></ButtonShow> */}
        </div>
    </>
}

export default CodeSuggests;