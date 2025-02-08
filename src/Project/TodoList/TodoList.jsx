import { MdDeleteForever } from "react-icons/md";
import { MdCheckCircle } from "react-icons/md";

export const TodoList=({deleteElem,data,checked,checkTodo})=>{

    return(
     <li className="listElem">
        <span className={checked ?"checkList":"noncheckList"}>{data}</span>
        <div className="list-icons">
            <button className="check-btn" 
            onClick={()=>checkTodo(data)} //**send value child to parent component so we use arrow function
            >
                <MdCheckCircle/>
            </button>
            <button className="delete-btn" 
                onClick={()=>deleteElem(data)} // send data child to parent componnt and pass data to parent. 
            >
                <MdDeleteForever/>
            </button>
        </div>
    </li>                           
    );
}