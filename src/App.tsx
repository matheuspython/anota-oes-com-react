import React from 'react'
import { Global } from './global/styles'
import { Main } from './components/Main'
import { NotesList } from './components/NotesList'
export const App:React.FC = () => {
  return (
    <div className="App">
      <Global />
      <main>
       <Main />
       <NotesList />
      </main>
    </div>
  )
}

