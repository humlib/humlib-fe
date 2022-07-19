import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import { Button } from './Button'

export const SearchBar = () => (
    <Container>
        <input placeholder="Gebe hier Deine Interessen ein" />
        <Button onClick={() => {}}>🔍</Button>
    </Container>
)

const Container = styled.div`
    display: flex;
    margin: 30px 0;
    input {
        flex: 1;
        border: 2px solid ${colors.primary.main};
    }
    button {
        background: ${colors.primary.main};
    }

    @media (min-width: 768px) {
        max-width: 500px;
    }
`
