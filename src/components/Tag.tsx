import React from 'react'
import Select from 'react-select'
import { Button } from './Button'
import styled from 'styled-components'
import { colors } from '../styles/theme'

const inputPlaceholder: string = 'Gebe hier Deine Interessen ein'
const testOptions = [
    { value: 'java', label: 'Java' },
    { value: 'javascript', label: 'JavaScript' },
] // @TODO Replace with real data

export const TagComponent = () => (
    <TagContainer>
        <Select
            isMulti
            name="colors"
            options={testOptions}
            className="humlib-select"
            classNamePrefix="humlib-select"
            placeholder={inputPlaceholder}
        />
        <Button onClick={() => {}}>🔍</Button>
    </TagContainer>
)

const TagContainer = styled.div`
    display: flex;
    .humlib-select {
        width: 400px;
    }
    .humlib-select .humlib-select__multi-value {
        background-color: ${colors.primary.light};
    }
`
