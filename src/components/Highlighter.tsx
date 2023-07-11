import { FC } from "react";

interface HighlighterProps {
    text: string
}
 
const Highlighter: FC<HighlighterProps> = ({text}) => {
    return <div dangerouslySetInnerHTML={{__html: text}} />
}
 
export default Highlighter;