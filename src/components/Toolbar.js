import { ThemeContext } from "./Context";
import ThemeButton from "./ThemeButton";
import Header from "./Header";

export default function Toolbar(props){
    return(
        <div>
            <ThemeContext.Provider value="dark">
            <ThemeButton/>
            <Header/>
            </ThemeContext.Provider>
        </div>
    )
}