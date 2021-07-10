import React from "react";

// function MapMethod() {
//   const list = ["apple", "orange", "mango "];
//   const newList = list.map(function (e) {
//     return ` Fruits are ${e} :  `;
//   });
//   return (
//     <>
//       <h1> {newList}</h1>
//     </>
//   );
// }
function MapMethod() {
  const StuData = [
    { Id: 1, Name: "Abhi", Course: "Angular" },
    { Id: 2, Name: "Pranay", Course: "React" },
    { Id: 3, Name: "Nayan", Course: "Vue" },
  ];

  const newList = StuData.map((val) => {
    // return console.log(val)
    return ( 
    //   <>
        ` ${val.Id} `
    //   </>
    );
  });
  return (
    <> <h1> ID</h1>
      <h1>{newList} </h1>
    </>
  );
}

export default MapMethod;
