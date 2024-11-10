
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import Footer from './Components/Footer'

function App() {
  
  return (
    <>
      <div>
        <h1 className="text-4xl text-center text-white mt-10">TODO Application by the use of Redux Toolkit</h1>
      </div>
      <AddTodo />
      <Todos />
      
      <Footer/>
    </>
  )
}

export default App