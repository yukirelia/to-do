import React from "react";

export default function Task({status, title, index, onDone}){
    return (
        <div className={`task ${status}`} onClick={e=>onDone(index)}>
            <div className={`task_button`}></div>
            <div className="task_content">{title}</div>
        </div>
    )
}