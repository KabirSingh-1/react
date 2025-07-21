import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';


function MyApp(){
  return(
    <div>
      <h1>My App- Kabir Singh</h1>
    </div>
  )
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        children: '_blank'
    },
    children: 'click me to visit Google'
}

const anotherElement = (
  <a href="https://google.com" target="_blank">click me to visit Google</a>
)

const reactElement1 = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit Google'
)

createRoot(document.getElementById('root')).render(
  
    // <App />
    reactElement1
 
  
)
