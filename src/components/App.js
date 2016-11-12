import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
  	<h1>CalHacks</h1><div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
  </div>
)

export default App
