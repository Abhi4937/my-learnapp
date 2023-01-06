import { GuestGreeting, UserGreeting } from "./Greetings";

export default function Greeting(props){
    if(props.isLogged) return(<UserGreeting/>)
    return (<GuestGreeting/>)
}