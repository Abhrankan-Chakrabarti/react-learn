import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'

import {App} from './App.jsx'
// import {StateMain} from "./Components/States/StateMain.jsx"
// import { Practices } from 'C:/Users/bikra/REACT/src/Practices.jsx';
// import {ButtonMain} from "./Project/Button/ButtonMain.jsx"
// import { TodoMain } from './Project/TodoList/TodoMain.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <StateMain /> */}
    {/* <Practices /> */}
    {/* <ButtonMain /> */}
    {/* <TodoMain /> */}
  </StrictMode>,
)
