
//-----------------------------derived state----------------
export const ProfileState =(props)=>{
    const {id,name,age}=props.elem;
    return(

        <li key={id}>
            <h1>Name:{name} </h1>
            <h1>Age:{age} </h1>
            <hr />
        </li>
    )
}