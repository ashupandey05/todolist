import React, { useState } from "react";
import Todolist from "./components/Todolist";
// import "./index.css";

function App() {
  const [setInput, currentInput] = useState("");
  const [item, setItem] = useState([]);
  const setValue = (event) => {
    currentInput(event.target.value);
  }
  const listOfItems = () => {
    setItem((oldItem) => {

      return [...oldItem, setInput];
    })
    currentInput("");
  };
  const deleteItems = (id) => {
    console.log("deleted");
    setItem((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <div className="mainDiv">
        <div className="mainbox">
          <h1>Todo List using React</h1>
          <div className="inputarea">
            <input type="text" placeholder="Enter your task" value={setInput} onChange={setValue} />
            <button className="btn" onClick={listOfItems}> + </button>
          </div>
          <ol type="I">

            {item.map((itemval, index) => {
              return <Todolist
                key={index}
                id={index}
                val={itemval}
                onSelect={deleteItems}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;