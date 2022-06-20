// React - CamelCase

import React, {useState} from 'react'
import "./style/style.css"

// Import component
import UserInfo from './UserInfo'

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
            <div className='box'>
                <h3>Greetings</h3>
                <div className='msg'>Hello, {name}.</div>
            </div>
            <div className='box'>
                <h3>Count: {count}</h3>
                <button onClick={incrementCount}>Increment</button>
                <button onClick={decrementCount}>Decrement</button>
            </div>
            <div className='box'>
                <h3>On Change:</h3>
                <input className='textInput' type="text" onChange={onChange} value={input}/>
            </div>
            <div className='flex-box'>
                < UserInfo name='Ray Joshua' gender='Male' address='Davao' />
                < UserInfo name='Anya Forger' gender='Female' address='Tokyo'/>
                < UserInfo />
                < UserInfo />
            </div>
        </div>
    )
}

export default App