import type { ReactElement } from 'react'
import React from 'react'
import styled from 'styled-components'
import { hello } from './api'

const Title = styled.h2`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
`

function App(): ReactElement {
    return (
        <div>
            <Title>Welcome to React {hello()}</Title>
            <h3>current Date : {new Date().toDateString()}</h3>
        </div>
    )
}

export default App
