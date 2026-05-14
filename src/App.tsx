import { useFetch } from "./components/Hooks/useFetch"

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const App = () => {

  const {data: todo, isLoading, error} = useFetch<Todo>("https://jsonplaceholder.typicode.com/todos/1")

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div >
      <h1>Fetch</h1>
      <div>
        <h2>{todo?.title}</h2>
        <h3>
          {
            todo?.id
          }
        </h3>
      </div>
      
    </div>
  )
}

export default App