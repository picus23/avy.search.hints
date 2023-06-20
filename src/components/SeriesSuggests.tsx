import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
import FieldCharacteristic from 'kit/components/searchElement/fields/FieldCharacteristic'
import { SearchHandler, SeriesSearchHintResponse } from "../type";

interface SeriesSuggestsProps {
    hints: Array<SeriesSearchHintResponse>,
    onSuggestClick: SearchHandler,
}

const SeriesSuggests: FC<SeriesSuggestsProps> = ({hints, onSuggestClick}) => {
    return <>
        <SearchTitle>Серии</SearchTitle>

        <div className="row w-100 gap-2">
            {
                hints.map((hint, idx) => {
                    return <>
                        <FieldSeries
                            key={idx} 
                            title={hint.title} 
                            subtitle={hint.subtitle} 
                            icon={<img src="/kit/empty_square.png" alt="" />}
                            handleArrowClick={() => {onSuggestClick(hint.title, 'series')}}
                        ></FieldSeries>

                        { hint?.characteristics !== undefined &&
                            <div className="d-flex justify-content-between me-4">
                                {
                                    // hint.characteristics.map((characteristic, charIdx) => (
                                    //     <FieldCharacteristic 
                                    //         key={charIdx}
                                    //         title={characteristic.title} 
                                    //         subtitle={characteristic.subtitle}
                                    //     ></FieldCharacteristic>
                                    // ))
                                }
                            </div>
                        }
                    </>
                })
            }
        </div>
    </>
}

export default SeriesSuggests;