import React from 'react'
import ParentComponent from './components/One/Parentcomponent'
import Parent from './components/Two/Parent'

const App = () => {
  return (
    <div>
      {/* This is parent ot child component */}
      <ParentComponent/>
      <Parent/>
      </div>
  )
}

export default App