//========================================================================
//       States
//========================================================================
// import {useState} from "react";
// export const StateCode=()=>{
//   console.log(useState)
//   const [count,setCount]=useState(0);
//   const handleBtnClk=()=>{
//     setCount(()=> count+1 );
//   }
//   return(
//     <>
//       <h1>States</h1>
//       <h2>{count}</h2>
//       <button onClick={handleBtnClk} >Increament</button>
//     </>
//   )
// }

//===============================================================
//      Derived state 
//===============================================================
// import { ProfileState } from "./ProfileState";
// export const StateCode=()=>{
//   const user=[
//     {id:1 ,name :"Alice", age:23},
//     { id:2 ,name :"Bob", age:30},
//     {id:3 ,name :"Charli", age:29},
//     {id:4 ,name :"Angle", age:45}
//   ]
//   const userCount=user.length;
//   console.log(userCount)
//   const average=( user.reduce((accum,user)=>(accum + user.age),0)) / userCount;  //find average
//   console.log(average)
//   return (
//       <ul>
//           {user.map((user,average)=>
//               <ProfileState elem={user} avg={average}/>
//           )}
//           <h1>Average Age : {average}</h1>
//       </ul>
//   )
// }

//===============================================================
//      Lift State Up
//===============================================================
// import {useState} from "react";
// export const StateCode=()=>{
//     const [inputValue,setInputValue]=useState("");
//     return(
//         <>
//             <InputComponent inputValue={inputValue} setInputValue={setInputValue} />
//             <DisplayComponent inputValue={inputValue} />
//         </>
//     );
// };

// const InputComponent=({inputValue,setInputValue})=>{
//     return(
//         <>
//             <input type="text"
//              placeholder="Enter your name " 
//              value={inputValue} 
//              onChange={(e)=>setInputValue(e.target.value)}
//              ></input>
//         </>
//     );
// }
// const DisplayComponent=({inputValue})=>{
//     return(
//         <p>The current value is : {inputValue}</p>
//     );
// }
