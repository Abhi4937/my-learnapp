import ListItems from "./listItems";
export default function ListKeys(props){
    const arr=[1,2,3,4,5];
    const listItems= arr.map((num)=>
        <ListItems key={num.toString()} id={num.toString()} values={num}/>
    );
    return(
        <ul>{listItems}</ul>
    )
}