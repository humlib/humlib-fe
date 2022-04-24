import type { ReactElement } from 'react'
import React from 'react'
import { hello } from './api'
function App(): ReactElement {
    return (
        <div>
            <h2>Welcome to React {hello()}</h2>
            <h3>current Date : {new Date().toDateString()}</h3>
        </div>
    )
}

export default App
