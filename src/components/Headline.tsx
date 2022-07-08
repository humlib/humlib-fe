import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import type { DefaultProps } from '../types/props'

export const Headline = ({ children }: DefaultProps) => (
    <LHeadline>{children}</LHeadline>
)

const LHeadline = styled.h1`
    color: ${colors.secondary.text};
    font-size: 3rem;
`
