export function Checkpoint(props) {
    let checkpointClass = (props.type == "quiz") ? "rounded-full" : ""; 
    return (
        <div class={"flex flex-col justify-center w-[95px] h-[95px] hover " + props.color + " " + checkpointClass}>
            {"Question " + props.number}
        </div>
    )
}