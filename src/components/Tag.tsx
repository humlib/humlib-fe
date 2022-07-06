import React, { MouseEvent } from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import type { DefaultProps } from '../types/props'

interface TagProps extends DefaultProps {
    onClick: (evt: MouseEvent) => void
    removable?: boolean
}

export const Tag = ({ children, removable }: TagProps) => {
    return <StyledTagComponent>{children}</StyledTagComponent>
}

const StyledTagComponent = styled.span`
    border: none;
    border-radius: 1em;
    background-color: ${() => colors.primary.main};
    color: ${() => colors.primary.text};
    width: 3em;
    height: 1em;
    &:after {
        top: 0;
        content: '𝗑';
    }
`
