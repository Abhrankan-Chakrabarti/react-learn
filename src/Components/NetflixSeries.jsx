//=========================================================================
//           DAFAULT EXPORT
//==========================================================================

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

// export default NetflixSeries;    //only 1 dafault export

//=========================================================================
//             NAME EXPORT
//=========================================================================

// export  const NetflixSeries=()=>{  //this is a name export
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
// export const Footer=()=>{
//     return <h2>copyright @Bikram</h2>
// }

//=================================================================================
//      LOOPING
//=================================================================================
// import seriesData from "C:/Users/bikra/REACT/src/api/seriesData.json";
// const NetflixSeries=()=>{  
//   return (
//     <ul>
//       {seriesData.map((curElem)=>{
//         return (
//             <li key={curElem.id}> 
//              <div>
//                  <div>
//                    <img src="./img.jpg" alt="img.jpg" width="50%" height="50%" />
//                  </div>
//                  <h2>Name :{curElem.name} </h2>
//                  <h3>Rating : {curElem.rating}</h3>
//                  <p>Summary :{curElem.summary}</p>
//                  <p>genra :{curElem.genra}</p>
//                  <p>cast : {curElem.cast}</p>
//                  <a href={curElem.watch_url} target="_blank">
//                    <button>Watch Now</button>
//                  </a>
//              </div>
//            </li> 
//         );
//       })} 
//     </ul>
//   );
// }
// export default NetflixSeries;


//=================================================================================
//      Props
//=================================================================================
// import  {SeriesCard}  from "./List.jsx";
// import seriesData from "C:/Users/bikra/REACT/src/api/seriesData.json";
// export const NetflixSeries=()=>{  
//   return (
//     <ul>
//       {
//         seriesData.map((curElem)=> (
//           <SeriesCard curElem={curElem} />
//         ))
//       } 
//     </ul>
//   );
// }

//=================================================================================
//      CSS adding
//=================================================================================
// import  {SeriesCard}  from "./List.jsx";
// import seriesData from "C:/Users/bikra/REACT/src/api/seriesData.json";
// export const NetflixSeries=()=>{  
//   return (
//     <ul className="grid grid-three--cols">
//       {
//         seriesData.map((curElem)=> (
//           <SeriesCard curElem={curElem} />
//         ))
//       } 
//     </ul>
//   );
// }

//=================================================================================
//      .module.CSS adding
//=================================================================================
// import  {SeriesCard}  from "./List.jsx";
// import seriesData from "C:/Users/bikra/REACT/src/api/seriesData.json";
// export const NetflixSeries=()=>{  
//   return (
//     <ul className="grid grid-three--cols">
//       {
//         seriesData.map((curElem)=> (
//           <SeriesCard curElem={curElem} />
//         ))
//       } 
//     </ul>
//   );
// }

//=================================================================================
//       adding styled components
//=================================================================================
// import  {SeriesCard}  from "./List.jsx";
// import seriesData from "C:/Users/bikra/REACT/src/api/seriesData.json";
// export const NetflixSeries=()=>{  
//   return (
//     <ul className="grid grid-three--cols">
//       {
//         seriesData.map((curElem)=> (
//           <SeriesCard curElem={curElem} />
//         ))
//       } 
//     </ul>
//   );
// }

//=================================================================================
//       Tailwind CSS
//=================================================================================
// export const NetflixSeries=()=>{  
//   return (
//     <>
//       <p className="underline">This is inline css</p>
//       <h1 className="text-3xl gap-5 font-bold underline"> Hello World!</h1>

//     </>
//   );
// }

//=================================================================================
//       Event handling 
//=================================================================================
// export const NetflixSeries=()=>{
//   const handleBtnClk=(event)=>{
//     console.log(event);  //syntheticBaseEvent
//     alert("Button was Clicked !")
//   }
//   return (
//     <>
//       <h1>Event Handling </h1>
//       <button onClick={handleBtnClk}>Click me 1</button>  {/* method 1*/}
//       <button onClick={()=> handleBtnClk()} > click me 2</button> {/* method 2*/}
//     </>
//   )
// }

//=================================================================================
//       Event Propagation 
//=================================================================================
import "./event.css"
export const NetflixSeries=()=>{
  const grandBtnClk=(event)=>{
    console.log(event); 
    event.stopPropagation();
    alert(" Grand Parent Button was Clicked !")
  }
  const parentBtnClk=(event)=>{
    console.log(event);
    event.stopPropagation();
    alert("Parent Button was Clicked !")
  }
  const handleBtnClk=(event)=>{
    console.log(event);
    event.stopPropagation();
    alert("Child Button was Clicked !")
  }
  //without propagation stop , we faced if you click child button then print child => parent => grand button was clicked. so we are use stopPropagation function
  return (
    <section className="event-content">
      <div className="grand-box" onClick={grandBtnClk}>
        <div className="parent-box"onClick={parentBtnClk}>
          <button className="child-box" onClick={handleBtnClk}>click me</button>
          {/* <button className="child-box" onClickCapture={handleBtnClk}>click me</button>    if you use onClickCapture then print reverse means fist print grand => parent => child */}
        </div>
      
      </div>
   
    </section>
  )
}


