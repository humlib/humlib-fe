import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import { TagComponent } from './Tag'

export const SearchBar = () => (
    <Container>
        <TagComponent />
    </Container>
)

const Container = styled.div`
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;

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
