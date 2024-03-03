import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'

import Create from './components/Create.jsx'
import Jeopardy from './components/Jeopardy.jsx'
import Layout from './components/Layout.jsx'
import ViewCategories from './components/ViewCategories.jsx'
import DoubleJeopardy from './components/DoubleJeopardy.jsx'

function App() {

  const cats = ['HISTORY', 'RADIO DISNEY', 'GENERAL SCIENCE', 'INTERNATIONAL SPORTSMEN', 'RHYMES WITH SMART', 'HOMOPHONIC PAIRS']
  const vals = ['$200', '$400', '$600', '$800', '$1000']

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index  element={<Jeopardy cats={cats} vals={vals}/>} />
          <Route path='double' element={<DoubleJeopardy />} />
          <Route path='create' element={<Create />} />
          <Route path='view' element={<ViewCategories />} />
        </Route>
      </Routes>
  )
}

export default App
