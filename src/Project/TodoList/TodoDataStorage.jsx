const todoKey="ReactTodo";

export const getLocalStorageTodoData=()=>{
    const rawTodo=localStorage.getItem(todoKey); // get previous elements from localstorage.  
    if(!rawTodo) return [];
    return JSON.parse(rawTodo);
};


//Add Data to localStorage
export const setLocalStorageTodoData=(task)=>{
    return localStorage.setItem(todoKey,JSON.stringify(task)); //take key and value , which is string
};

