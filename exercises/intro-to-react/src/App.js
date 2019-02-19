import React from 'react'
import Nav from './Nav.js'
// Component - A function that returns JSX (HTML))
// App
function HelloWorld(){
    return <h1>Hello World</h1>
    
}
function App() {
    return (
    <div>
        <HelloWorld />
       
        <Nav />
        <p>Goodbye World</p>
    </div>
    )
}

export default App;