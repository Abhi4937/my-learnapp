import ThemeButton from "./ThemeButton";

export default function Toolbar(props){
    return(
        <div>
            <ThemeButton theme={props.theme}/>
        </div>
    )
}