//Practices-1
// export const Profile=()=>{
//     return(
//       <>
//         <h1>Profile Card challenge</h1>
//         <ProfileCard
//             name="alice"
//             age="30"
//             greeting={
//                 <div>
//                     <strong>
//                         Hi Alice, have a wonderful day
//                     </strong>
//                 </div>
//             }
//         >
//         <p>Hobies : cooking , gaming </p>
//         <button>Contact</button>
//         </ProfileCard>
//      </>
//     )
// }
// function ProfileCard(props){
//     const {name,age,greeting,children}=props
//     return(
//         <>
//             <h2> name :{name} </h2>
//             <p>age :{age}</p>
//             <p>{greeting}</p>
//             <div>{children}</div>
//         </>
//     )
// }

//practices -2
// export const Profile =(props)=>{
//     const {id,name,age}=props.elem;
//     console.log(props)
//     return(
//         <li key={id}>
//             <h1>Name:{name} </h1>
//             <h1>Age:{age} </h1>
//             <hr />
//         </li>
//     )
// }
