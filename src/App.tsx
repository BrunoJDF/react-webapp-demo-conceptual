import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: 2,
    title: 'todo 2',
    completed: false
  },
  {
    id: 3,
    title: 'todo 3',
    completed: false
  },
  {
    id: 4,
    title: 'todo 4',
    completed: true
  }
]
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const handleRemove = (id: number): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
