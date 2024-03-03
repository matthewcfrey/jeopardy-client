import { useState } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'

import Create from './components/Create.jsx'
import Jeopardy from './components/Jeopardy.jsx'
import Layout from './components/Layout.jsx'
import ViewCategories from './components/ViewCategories.jsx'

function App() {

  const cats = ['HISTORY', 'RADIO DISNEY', 'GENERAL SCIENCE', 'INTERNATIONAL SPORTSMEN', 'RHYMES WITH SMART', 'HOMOPHONIC PAIRS']
  const vals = ['$200', '$400', '$600', '$800', '$1000']
  const dcats = ['HISTORY', 'TAINTED GOV', 'AMERICAN NICKNAMES', 'DOWN MEXICO WAY', 'SCOTLAND', 'SCIENCE & NATURE']
  const dvals = ['$400', '$800', '$1200', '$1600', '$2000']

  return (
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index key='single' element={<Jeopardy cats={cats} vals={vals}/>} />
          <Route path='double' key='double' element={<Jeopardy cats={dcats} vals={dvals}/>} />
          <Route path='create' element={<Create />} />
          <Route path='view' element={<ViewCategories />} />
        </Route>
      </Routes>
  )
}

export default App
