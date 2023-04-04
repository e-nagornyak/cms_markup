import React, { FC } from 'react'
import './App.css'
import { Main, Nav } from 'features'

export const App: FC = () => {
  return (
    <div className="app">
      <Nav />
      <Main />
    </div>
  )
}
