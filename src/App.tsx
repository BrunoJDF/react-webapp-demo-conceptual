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
  const [todos] = useState(mockTodos)
  return (
    <div className="todoapp">
      <Todos todos={todos} />
    </div>
  )
}

export default App
