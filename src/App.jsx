
import './App.css'
import { useState } from 'react'

function App() {
  // Step 1: use the useState hook to implement state for this app. Our state will be an array of todos, and should start empty. Delete the temporary todos variable (tempTodos) once this is complete.
  // Step 2: hook up the todos state to the render
  // Step 3: update handleCreateNewTodo() so that when a user clicks the create new todo button, a new todo will be added to state
  // Step 4: update handleTodoDoneClick() function so that the done button deletes a todo when clicked
  // Step 5: create a useEffect hook to "alert" the user whenever a new todo is created - e.g., window.alert("New Todo created!")
  // Step 6: create a useEffect hook that will "alert" the user once with a welcome message, when the page loads

  const [todoInput, setTodoInput] = useState('')


  const handleCreateNewTodo = () => {

  }

  const handleTodoDoneClick = (idx) => {
    console.log(`clicked todo number ${idx}`)
  }


  const handleTodoInputChange = (e) => {
    setTodoInput(e.target.value)
  }

  const tempTodos = [
    'Make breakfast',
    'Drink coffee',
    'Walk the dog'
  ]

  return (
    <>
      <h1>Todos with hooks!</h1>
      <div className="card">
        {tempTodos.map((todo, idx) => {
         return (
          <div className = "todo" key={todo}>
            <button onClick={() => handleTodoDoneClick(idx)}>Done</button>
            <p>{todo}</p>
          </div>
         )
        })}
        <input type='text' value={todoInput} onChange={handleTodoInputChange}/>
        <button onClick={handleCreateNewTodo}>Create new todo</button>
      </div>
    </>
  )
}

export default App
