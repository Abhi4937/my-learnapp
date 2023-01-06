export default function ListItems(props){
    return(
        <div><h1>{props.key}</h1>
        <h1>{props.id}</h1>
        <li>{props.values}</li></div>
    )
}