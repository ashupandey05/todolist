import React from "react";
const setColor = {
    color : "#ee5353"
}

const Todolist = (props) =>{
    return(
    <>
        <div className="todo-style">
            <i className="fa-solid fa-xmark fa-2xl" style={setColor} onClick={()=>{props.onSelect(props.id)}}></i>
            <li>{props.val}</li>
        </div>
    </>
    );
};

export default Todolist;