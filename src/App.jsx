import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'

import Create from './components/Create.jsx'
import Jeopardy from './components/Jeopardy.jsx'
import DoubleJeopardy from './components/DoubleJeopardy.jsx'
import Layout from './components/Layout.jsx'
import ViewCategories from './components/ViewCategories.jsx'

function App() {

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Jeopardy />} />
          <Route path='double' element={<DoubleJeopardy />} />
          <Route path='create' element={<Create />} />
          <Route path='view' element={<ViewCategories />} />
        </Route>
      </Routes>
  )
}

export default App
