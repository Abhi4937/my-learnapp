export default function ListKeys(props){
    const arr=[1,2,3,4,5];
    const listItems= arr.map((num)=>
        <li key={num.toString()}>{num}</li>
    );
    return(
        <ul>{listItems}</ul>
    )
}