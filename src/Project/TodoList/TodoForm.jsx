import { useState } from "react";

export const TodoFrom =({AddTodo})=>{

    const [inputValue,setInputValue]=useState({});
    
    const handleInputChange=(value)=>{
        setInputValue({id:value, content:value, check:false});
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();  // when we submit this from means enter button , page is re-render so all element refresh. This is from default behaviour therefore we do not want this 
        AddTodo(inputValue); //call parent compoment and pass input value.
        setInputValue({id:"", content:"", check:false}); // click add Task then input box is empty.
    }
   
    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
              <div>
                    <input type="text" 
                        className="todo-input" 
                        autoComplete="off"
                        placeholder="Enter a title"        
                        value={inputValue.content}  //first value empty
                        onChange={(event)=>handleInputChange(event.target.value)} //input box always try to keep empty space because we gave inputValue="" in state variable. get a new value and give this value to handleInputChange function.
                    ></input>
                </div>
                <div>
                    <button type="submit" className="todo-btn"> Add Task</button> 
                </div>
            </form>                  
        </section>                    
    );
};