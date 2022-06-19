// React - CamelCase

import React, {useState} from 'react'
import "./style/style.css"


const App = () => {
    // Variables
    const name = 'Ray Joshua'

    // States
    const [count, setCount] = useState(0)
    const [input, setInput] = useState('')

    // Function for incrementing the count
    const incrementCount = () => {
        setCount(count + 1)
    }

    // Function for decrementing the count
    const decrementCount = () => {
        setCount(count - 1)
    }

    // Function for on change event
    const onChange = (element) => {
        setInput(element.target.value)
    }

    // Display component


    return ( 
        // <React.fragment></React.fragment> or <></> or 1 parent element
        <div className='container'>
            <div className='msg'>Hello, {name}.</div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <br/>
            <br/>
            <p>On Change:</p>
            <input type="text" onChange={onChange} value={input}/>
            <br/>
            <br/>
            <p>Display Component:</p>
            
        </div>
    )
}

export default App