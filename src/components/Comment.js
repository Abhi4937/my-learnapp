export default function Comment(props){
    return(
        <div className="comments">
            <div className="UserInfo">
                <img className="Avatar" 
                    src="./" 
                    alt="this is pic with no src" />
                <div className="UserInfo-name">
                    {props.users.name}
                </div>
            </div>
            <div className="comment-test">
                {props.text}
            </div>
            <div className="comment-date">
                {props.date}
            </div>
        </div>
    )
}