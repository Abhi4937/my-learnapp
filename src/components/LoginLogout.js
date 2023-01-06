function Login(props){
    return(
        <button onClick={props.onClick}>
            Login
        </button>
    )
}

function Logout(props){
    return(
        <button onClick={props.onClick}>
            LogOut
        </button>
    )
}

export {Login, Logout};
