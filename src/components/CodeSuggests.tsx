import { FC } from "react";
import SearchTitle from "search-components/components/searchElement/SearchBar/SearchTitle";
import FieldEncoding from "search-components/components/searchElement/fields/FieldEncoding";
import ButtonCounter from "search-components/components/buttons/ButtonCounter";
import Button from "search-components/components/buttons/Button";
import {MdShoppingCart} from "react-icons/md"
import ButtonShow from "search-components/components/buttons/ButtonShow";
import { CodeSearchHintResponse, SearchHandler } from "../type";

interface CodeSuggestsProps {
    hints: Array<CodeSearchHintResponse>,
    onSuggestClick: SearchHandler,
}

const CodeSuggests: FC<CodeSuggestsProps> = ({hints, onSuggestClick}) => {
    return <>
        <SearchTitle>Кодировки</SearchTitle>
        
        <div className="row w-100">
            {
                hints.map((item, idx) => {
                    return (
                        <FieldEncoding icon={<img src={'/kit/empty_square.png'} alt='' />}
                            key={idx}
                            title={item.title}
                            price={item.price}
                            amount={item.amount}
                            button={<ButtonCounter text_style={'font-size-16-gray'} counter={1} btn_style="counter-h40"></ButtonCounter>}
                            button2={<Button icon={<MdShoppingCart size={24} fill={'white'} />} btn_style={"blue"}><span className="fw-500">Купить</span></Button>}
                            btnGrayArrow={true}
                            handleArrowClick={() => onSuggestClick(item.title, 'code')}
                        ></FieldEncoding>
                    )
                })
            }
            <ButtonShow btn_style='show' text={'Показать все кодировки'} text_style={'font-size-16-black fw-500'} counter={12}></ButtonShow>
        </div>
    </>
}

export default CodeSuggests;