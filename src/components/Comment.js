import UserInfo from "./UserInfo";
export default function Comment(props){
    return(
        <div className="comments">
            <UserInfo users={props.users}/>
            <div className="comment-test">
                {props.text}
            </div>
            <div className="comment-date">
                {props.date}
            </div>
        </div>
    )
}