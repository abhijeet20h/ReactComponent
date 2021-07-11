import React from "react";

function ListKeys() {
  const students = ["Angular", "React", "Vue", "JavaScript"];
  return (
    <>
    <div className="alert-primary p-4">  <h1>Courses -</h1>
      {students.map((student) => (
        <ul>
          <li>{student}</li>
        </ul>
      ))}</div>
    
    </>
  );
}

export default ListKeys;
