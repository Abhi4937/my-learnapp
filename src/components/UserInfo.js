import Avatar from "./Avatar";

export default function UserInfo(props){
    return(
        <div className="UserInfo">
            <Avatar users={props.users} />
            <div className="UserInfo-name">
                {props.users.name}
            </div>
        </div> 
    );
}