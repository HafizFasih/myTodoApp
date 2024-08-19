"use client";
import React, { useState } from "react";
const page = () => {
  let condition = true;
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const [Class1, setClass1] = useState("");
  const [Class2, setClass2] = useState("init");
  const [Class3, setClass3] = useState("none");
  const [TodoArray, setTodoArray] = useState([]);
  const [ListName, setListName] = useState("List");
  const submitHandler = (element) => {
    element.preventDefault();
    setTodoArray([...TodoArray, {Task, Description}])
    setDescription("");
    setTask("");
  };
  const deleteHandler = (ind) => {
    TodoArray.splice(ind, 1);
    setTodoArray([...TodoArray])
  }
  const abc = () => {
    if (condition) {
      setClass1("none");
      setClass2("replace");
      setListName("Back");
      setClass3("rec")
      condition = false;
    } else {
      setClass3("none")
      setClass1("");
      setClass2("init");
      setListName("List");
      condition = true;
    }
  };
  return (
    <>
      <div className="page">
        <div className="head">
          <h1>To-Do List</h1>
        </div>
        <form onSubmit={submitHandler} className={Class1}>
          <label for="task">Task</label>
          <input
            className="myInput"
            id="task"
            type="text"
            value={Task}
            onChange={(element) => {
              setTask(element.target.value);
            }}
          ></input>

          <label for="description">Description</label>
          <input
            className="myInput"
            id="description"
            type="text"
            value={Description}
            onChange={(element) => {
              setDescription(element.target.value);
            }}
          ></input>

          <button className="submit a">Submit Here</button>
        </form>
        {TodoArray.map((data, ind) => {
          return (
            <>
              <div className={Class3} onClick={deleteHandler} key={ind}>
                <h4>{data.Task}</h4>
                <h4>{data.Description}</h4>
              </div>
            </>
          );
        })}
        <div className={Class2}>
          <button className="submit b" onClick={abc}>
            {ListName}
          </button>
        </div>
      </div>
    </>
  );
};
export default page;
