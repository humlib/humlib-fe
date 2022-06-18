import type { MouseEvent } from 'react'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import type { DefaultProps } from '../types/props'
interface ButtonProps extends DefaultProps {
    primary?: boolean
    onClick: (evt: MouseEvent) => void
}

interface StyledButtonProps {
    primary?: boolean
}

export const Button = ({ children, primary, onClick }: ButtonProps) => (
    <StyledButton primary={primary} onClick={onClick}>
        {children}
    </StyledButton>
)

const StyledButton = styled.button<StyledButtonProps>`
    border: none;
    background-color: ${(props) =>
        props.primary ? colors.primary.main : colors.secondary.main};
`
