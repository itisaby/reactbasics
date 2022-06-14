// // Map function in javascript
// var arr1 = [1, 2, 3, 4, 5];
// const map1 = arr1.map(function (item) {
//     return item * 2;
// });
// console.log(map1);
import React from 'react'

function ListRendering() {
    const names = ['John', 'Sara', 'Mark', 'Mary'];
  return (
    <div>
        {/* calling them manually */}
        {/* <h2>{
                names[0]
            }</h2>
        <h2>{
                names[1]
            }</h2>
        <h2>{
                names[2]
            }</h2>
        <h2>{
                names[3]
            }</h2> */}
            
        {/* Calling them using map */}
        {
            names.map(name => <h2>{name}</h2>)
        }
    </div>
  )
}

export default ListRendering