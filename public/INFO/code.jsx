{code-1}
// export const App=()=>{
//   return <h1>Hello, i am Bikram</h1>;
// }

{code-2}
// import React from "react";
// export const App=()=>{
//   return React.createElement("h1",null,"hello , i am back!");
// };
// console.log(React.createElement("h1",null,"hello , i am back!"));

{code-3}
// export const App=()=>{
//   return(
//     <div>
//       <div>
//         <img src="img.jpg" alt="img.jpg" width="60%" height="60%" />
//       </div>
//       <h2>Name : Queen Of Tears </h2>
//       <h3>Rating : 8.3 </h3>
//       <p>Summary :Each JSX expression must have one parent element,which means if you try to return multiple elements,
//       react will throw an error, e.g in a perticular function only return one element like h1, h2, or other
//       but you create a div then u add multiple element in div.</p>
//     </div>
//   );
// };

{code-4 }//(multiple card making)
// export const App=()=>{
//   return(
//     <div>
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//         <NetflixSeries />
//     </div>
//   );
// };
// const NetflixSeries=()=>{  //this is a Component
//   return(
//     <div>
//       <div>
//         <img src="img.jpg" alt="img.jpg" width="60%" height="60%" />
//       </div>
//       <h2>Name : Queen Of Tears </h2>
//       <h3>Rating : 8.3 </h3>
//       <p>Summary :Each JSX expression must have one parent element,which means if you try to return multiple elements,
//       react will throw an error, e.g in a perticular function only return one element like h1, h2, or other
//       but you create a div then u add multiple element in div.</p>
//     </div>
//   );
// }

{code-5}//(Dynamic Values)
// export const App=()=>{
//   return(
//     <>
//       <Movies/>
//       <Movies/>
//       <Movies/>
//     </>
//   );
// }
// const Movies=()=>{
//   const name="Queen of Tears";
//   const rate=8.3;

//   const returnGenre=()=>{  //function 
//     const genre="RomCom";
//     return genre;
//   }

//   return(
//     <>
//       <img src="img.jpg" alt="img.jpg" width="60%" height="60%" />
//       <h2>Name :{name}</h2>
//       <h3>Rating :{rate+0.2}</h3>
//       <h2>genre : {returnGenre()}</h2>
//       <p>Summary :Each JSX expression must have one parent element,which means if you try to return multiple elements,
//       react will throw an error, e.g in a perticular function only return one element like h1, h2, or other
//       but you create a div then u add multiple element in div.</p>
//     </>
//   );
// }

{code -6}//(conditionals value)
//role-1
  // export const App=()=>{
  //   return <>
  //           < Movies />
  //         </>;
  // }
  // const Movies=()=>{
  //   const name="Queen of Tears";
  //   const rate=8.3;
  //   const age=80;
  //   return(
  //     <>
  //       <img src="img.jpg" alt="img.jpg" width="60%" height="60%" />
  //       <h2>Name :{name}</h2>
  //       <h3>Rating :{rate+0.2}</h3>
  //       <button>{age >= 18 ? "Watch Now":"Not available"}</button>
  //     </>
  //   );
  // }
 
//role-2
//  export const App=()=>{
//    return <>
//            < Movies />
//          </>;
//  }
//  const Movies=()=>{
//    const name="Queen of Tears";
//    const rate=8.3;
//    let age=20;
//    const watchMovie=()=>{
//      let canWatch="Watch Now";
//      if(age<18){
//        canWatch="not available";
//      }
//      return canWatch;
//    }
//    return(
//      <>
//        <img src="img.jpg" alt="img.jpg" width="60%" height="60%" />
//        <h2>Name :{name}</h2>
//        <h3>Rating :{rate+0.2}</h3>
//        <button>{watchMovie()}</button>
//      </>
//    );
//  }


{code-7}//(import and export file)
// default export ---------------not use {} in NetflixSeries
// import NetflixSeries from "./Components/NetflixSeries";
// export const App =()=>{
//   return(
//     <>
//       <h1>hello</h1>
//       <NetflixSeries />
//     </>
//   );
// }

//name export------------use { multi components}
// import {NetflixSeries,Footer} from "./Components/NetflixSeries";
// export const App=()=>{
//   return (
//     <>
//       <NetflixSeries />
//       <Footer />
//     </>
//   )
// }

{code-8 }//(looping )
// import NetflixSeries from "./Components/NetflixSeries";
// export const App=()=>{
//   return (
//           <NetflixSeries />
//   );
// }

{code-9}// (Props )
// import {NetflixSeries} from "./Components/NetflixSeries";
// export const App=()=>{
//   return (
//           <NetflixSeries />
//   );
// }