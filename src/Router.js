import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Home } from './containers/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  )
}
