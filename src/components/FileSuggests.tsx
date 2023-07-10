import { FC } from "react";
import SearchTitle from "kit/components/searchElement/SearchBar/SearchTitle";
import FieldSeries from "kit/components/searchElement/fields/FieldSeries";
import ButtonShow from "kit/components/buttons/ButtonShow";
import FieldText from "kit/components/searchElement/fields/FieldText";
import { MdPictureAsPdf } from "react-icons/md";
import { FileSearchHintResponse, SearchHandler } from "../type";

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
                            key={idx}
                            title={item.originName} 
                            subtitle={item.subtitle} 
                            icon={<MdPictureAsPdf size={24} fill={'gray'} />}
                            handleArrowClick={() => onSuggestClick(item.originName, 'file')}
                        ></FieldSeries>
                        <FieldText>{item.suggestText}</FieldText>
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