import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import { DefaultProps } from '../types/props'

export const Subtitle = ({ children }: DefaultProps) => (
    <LSubtitle>{children}</LSubtitle>
)

const LSubtitle = styled.h2`
    color: ${colors.secondary.text};
    font-size: 1.25rem;
`
