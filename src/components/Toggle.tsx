import type { ReactElement } from 'react'

import React from 'react'
import styled from 'styled-components'

// CSS -> Styled-Components cheat sheet https://jsramblings.com/migrating-to-styled-components-cheatsheet/

const Label = styled.label`
    color: orange;
    cursor: pointer;
`

const Input = styled.input`
    cursor: pointer;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    > ${Label} {
        margin-right: 5px;
    }
`

interface ToggleProps {
    onToggle: () => void
    children: React.ReactNode
    id: string
}

const Toggle = ({ onToggle, children, id }: ToggleProps): ReactElement => {
    return (
        <Wrapper>
            <Label htmlFor={id}>{children}</Label>
            <Input id={id} type="checkbox" onChange={onToggle}></Input>
        </Wrapper>
    )
}

export default Toggle
