import React from 'react'
import Select from 'react-select'
import { Button } from './Button'
import styled from 'styled-components'

const inputPlaceholder: string = 'Gebe hier Deine Interessen ein'
const testOptions = [
    { value: 'java', label: 'Java' },
    { value: 'javascript', label: 'JavaScript' },
] // @TODO Replace with real data

const tagComponentStyles = {
    container: (provided: any, state: any) => ({
        ...provided,
        width: 400,
    }),
}
export const TagComponent = () => (
    <TagContainer>
        <Select
            isMulti
            name="colors"
            options={testOptions}
            className="basic-multi-select"
            classNamePrefix="select"
            styles={tagComponentStyles}
            placeholder={inputPlaceholder}
        />
        <Button onClick={() => {}}>🔍</Button>
    </TagContainer>
)

const TagContainer = styled.div`
    display: flex;
`
