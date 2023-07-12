import { FC } from "react";

interface HighlighterProps {
    text: string
}
 
const Highlighter: FC<HighlighterProps> = ({text}) => {
    return <span dangerouslySetInnerHTML={{__html: text}} />
}
 
export default Highlighter;