import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

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
  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  return (
    <div className="todoapp">
      <Todos
        todos={todos}
        onCompletedTodo={handleCompleted}
        onRemoveTodo={handleRemove}
      />
    </div>
  )
}

export default App
