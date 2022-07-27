import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import type { DefaultProps } from '../types/props'

export const Headline = ({ children }: DefaultProps) => (
    <StyledHeadline>{children}</StyledHeadline>
)

const StyledHeadline = styled.h1`
    color: ${colors.secondary.text};
    font-size: 3rem;
`
