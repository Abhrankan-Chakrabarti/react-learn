import "./TodoStyle.css";
import { TodoDate } from "./TodoDate";
import { useState } from "react";
import { TodoFrom } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./TodoDataStorage";

export const TodoMain=()=>{  
    
    const [task,setTask]=useState(()=>getLocalStorageTodoData());

    const handleFormSubmit=(inputValue)=>{
        
        const {id,content,check}=inputValue;  //disstructure
        if(!content) return;     //  empty string not add in list

        // if(task.includes(inputValue)){
        //     alert("Task already exist");
        //     return;
        // }; // search in list(task),any element is equal to inputValue. same element not add.
        
        const todoContent=task.find((curTask)=>curTask.content=== content); // find input element is stay in task. and return true or false.
        if(todoContent){
            alert("Task already exist");
            return ;
        } // condition is true then don't add element and return fro function, neither spik conditon.

        setTask((prevElem)=>[{id,content,check},...prevElem]);  // add input value with previous Element in list(task).

    }
    //check
    const handleCheckTodo=(content)=>{
        const updateTask=task.map((curTask)=>{
            if(curTask.content===content){
                return{...curTask,check:!curTask.check} // id,conent keep same and check change (if true=>false, false=>true)
            }
            else{
                return curTask; // others elements no need any change.
            }
        });
        setTask(updateTask);
    }

    //// delete element         
    const deleteElement=(data)=>{
        console.log(data);
        const updateTask=task.filter((curTask)=>curTask.content !==data);
        setTask(updateTask);
    };

    //delete all
    const hancleAllDelete=()=>{
        setTask([]);
    }

    //add element to local storage
    setLocalStorageTodoData(task);
    

    return (
       <section className="main-content">
            <div className="todo-main">
                <div className="todo-header">
                    <h1>Todo List</h1>
                </div>
                <TodoDate />
                <TodoFrom AddTodo={handleFormSubmit} />
                <hr></hr>
                <section className="myUnorderList">
                    <ul>
                        {
                            task.map((curElem)=>{
                                return(
                                    <TodoList deleteElem={deleteElement}
                                    checkTodo={handleCheckTodo} 
                                    checked={curElem.check}
                                    data={curElem.content} 
                                    key={curElem.id} /> 
                                )
                            })
                        }
                    </ul>
                </section>
                <section className="clear-Btn">
                    <button className="clearAll" onClick={hancleAllDelete}>CLear</button>
                </section>
        </div>
       </section>
    );
}

//////////////////////////////// Memory problem solved //////////////////////////////////////////
// useEffect(()=>{
//     const interval= setInterval(() => {
//         const now=new Date();
//         const dateFormat=now.toDateString();
//         const timeFormat=now.toLocaleTimeString();
//         setDateTimes(`${dateFormat} - ${timeFormat}`);
//     },1000);
//     return()=>clearInterval(interval);
// },[])