import { ThemeContext } from "./Context";
import ThemeButton from "./ThemeButton";

export default function Toolbar(props){
    return(
        <div>
            <ThemeContext.Provider value="dark">
            <ThemeButton/>
            </ThemeContext.Provider>
        </div>
    )
}