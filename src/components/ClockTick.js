
export default function ClockTick(){
    return(
        <div>
            <h3>Date: {new Date().toLocaleTimeString()}</h3>
        </div>
    )
}