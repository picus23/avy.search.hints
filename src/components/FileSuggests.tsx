import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
import ButtonShow from "kit/components/buttons/ButtonShow";
import FieldText from "kit/components/searchElement/fields/FieldText";
import { MdFileDownload, MdPictureAsPdf } from "react-icons/md";
import { FileSearchHintResponse, SearchHandler } from "../type";
import Highlighter from "./Highlighter";

interface FileSuggestsProps {
    hints: Array<FileSearchHintResponse>,
    onSuggestClick: SearchHandler,
}

const FileSuggests: FC<FileSuggestsProps> = ({hints, onSuggestClick}) => {
    return <>
        <SearchTitle>PDF документы</SearchTitle>
        
        <div className="row w-100">
            {
                hints.map((item, idx) => (
                    <div>
                        <FieldSeries 
                            // buttonIcon={<MdFileDownload fill='gray' />}
                            key={idx}
                            title={item.fileName} 
                            handleArrowClick={() => onSuggestClick(item.originName, 'url')}
                        ></FieldSeries>
                        <FieldText><Highlighter text={item.suggestText} /></FieldText>
                    </div>
                ))
            }
            {/* <ButtonShow 
                btn_style='show my-2' 
                text={'Показать все документы'} 
                text_style={'font-size-16-black fw-500'} 
                counter={12}
            ></ButtonShow> */}
        </div>
    </>
}

export default FileSuggests;