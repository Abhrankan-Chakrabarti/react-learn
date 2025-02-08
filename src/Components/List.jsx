// export const SeriesCard=(Props)=>{
//     return (
//        <li key={Props}> 
//              <div>
//                <img src={Props.curElem.img_url} alt="img.jpg" width="50%" height="50%" />
//              </div>
//              <h2>Name :{Props.curElem.name} </h2>
//              <h3>Rating : {Props.curElem.rating}</h3>
//              <p>genra :{Props.curElem.genre}</p>
//              <p>cast : {Props.curElem.cast}</p>
//              <a href={Props.curElem.watch_url} target="_blank">
//                <button>Watch Now</button>
//              </a>
//        </li> 
//     );
// }

//-----------------role 2--------------------------------------
// export const SeriesCard=(Props)=>{
//     console.log(Props);
//     const {name,rating,genre,cast,watch_url,img_url}=Props.curElem;  //diSstructuring Props
//     const btn_style={
//       padding: "1.2rem 2.4rem",
//       border: "none",
//       fontSize: "1.6rem",
//       backgroundColor: `${rating <=8 ? "greenyellow":"blueviolet"}`,
//       color: "var(--bg-color)"
//     }

//     // function color_rating(){
//     //   let className="color1";
//     //   if(rating<=8){
//     //     className="color2";
//     //   }
//     //   return className;
//     // }
//     const color_rating=rating <=8 ? "color1":"color2";
    

//     return (
//        <li className="card"> 
//              <div>
//                <img src={img_url} alt="img.jpg" width="40%" height="50%" />
//              </div>
//              <div className="card-content">
//                <h2>Name :{name} </h2>
//                <h3 className={color_rating} > Rating : {rating}</h3>
//                <p>cast : {cast.join(", ")}</p>
//                <p>genra :{genre.join(", ")}</p>
// {/*            <p style={{margin:"1.2rem 0"}}>genra :{genre.join(", ")}</p>       // this is inline css */}  
//                <a href={watch_url} target="_blank">
//                  <button style={btn_style} >Watch Now</button>
//                </a>
//              </div>
//        </li> 
//     );
// }

//====================Adding module.css file===========================
// import styles from "C:/Users/bikra/REACT/src/Components/Netflix.module.css";
// export const SeriesCard=(Props)=>{
//   const {name,rating,genre,cast,watch_url,img_url}=Props.curElem;  //diSstructuring Props
//   const btn_style={
//     padding: "1.2rem 2.4rem",
//     border: "none",
//     fontSize: "1.6rem",
//     backgroundColor: `${rating <=8 ? "greenyellow":"blueviolet"}`,
//     color: "var(--bg-color)"
//   }
//   const color_rating=rating <=8 ? styles.color1:styles.color2;
  
//   return (  ////remove "card" and add {card} in allclassName
//      <li className={styles.card}>    
//            <div>
//              <img src={img_url} alt="img.jpg" width="40%" height="50%" />
//            </div>
//            <div className={styles["card-content"]}>  
//              <h2>Name :{name} </h2>
//              <h3 className={`${color_rating}`}> Rating : {rating}</h3>
//              <p>cast : {cast.join(", ")}</p>
//              <p>genra :{genre.join(", ")}</p>
// {/*            <p style={{margin:"1.2rem 0"}}>genra :{genre.join(", ")}</p>       // this is inline css */}  
//              <a href={watch_url} target="_blank">
//                <button style={btn_style} >Watch Now</button>
//              </a>
//            </div>
//      </li> 
//   );
// }

//====================Adding styled-component===========================
// import styles from "C:/Users/bikra/REACT/src/Components/Netflix.module.css";
// import styled from "styled-components";  //Adding styled-component
// export const SeriesCard=(Props)=>{
//   const {name,rating,genre,cast,watch_url,img_url}=Props.curElem;

//   const ButtonWatch=styled.button({   //create a new button name ButtonWatch 
//     padding: "1.2rem 2.4rem",
//     border: "none",
//     fontSize: "1.6rem",
//     backgroundColor: `${rating <=8 ? "greenyellow":"blueviolet"}`,
//     color: "var(--bg-color)"
//   });

//   const color_rating=rating <=8 ? styles.color1:styles.color2;
  
//   return ( 
//      <li className={styles.card}>    
//            <div>
//              <img src={img_url} alt="img.jpg" width="40%" height="50%" />
//            </div>
//            <div className={styles["card-content"]}>  
//              <h2>Name :{name} </h2>
//              <h3 className={`${color_rating}`}> Rating : {rating}</h3>
//              <p>cast : {cast.join(", ")}</p>
//              <p>genra :{genre.join(", ")}</p>  
//              <a href={watch_url} target="_blank">
//                <ButtonWatch>Watch now</ButtonWatch>
//              </a>
//            </div>
//      </li> 
//   );
// }
