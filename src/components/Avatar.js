//this is image component for extracting from Comment component
export default function Avatar(props){
    return(
        <img className="Avatar"
        src="none" 
        alt="this is img with no pic {props.users.name}"/>
    );
}