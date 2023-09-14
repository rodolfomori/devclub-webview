import React from 'react'

import { Routes, Route } from 'react-router-dom'

import { Home } from './containers/Home'
import { DeleteAccount } from './containers/DeleteAccount'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/delete" element={<DeleteAccount />}></Route>
    </Routes>
  )
}
