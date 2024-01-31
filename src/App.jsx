import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import TodoApp from './components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/todo' element={<TodoApp/>}/>
    </Routes>
    </BrowserRouter>
      <TodoApp/>
      
    </>
  )
}

export default App
