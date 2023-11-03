export function Checkpoint(props) {
    let checkpointClass = (props.type == "quiz") ? "rounded-full" : ""; 
    return (
        <div class={"w-[95px] h-[95px] bg-zinc-300 " + checkpointClass}>
            Component test
        </div>
    )
}