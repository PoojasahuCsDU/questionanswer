import { useState } from 'react'
import data from './data'
import './App.css'
import Questions from './Questions'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
   <main> 
    <Questions questions ={questions}/>
    </main>
  )
}

export default App
