import React from 'react'
import styled from 'styled-components'
import { DefaultProps } from '../types/props'

interface StyledContainerProps {
    stretch?: boolean
}

const LHorizontalContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`

const LVerticalContainer = styled.div<StyledContainerProps>`
    display: flex;
    flex-direction: column;
    height: ${(props) => (props.stretch ? '100%' : 'auto')};
    justify-content: center;
`

interface HorizontalContainerProps extends DefaultProps {}

interface VerticalContainerProps extends DefaultProps {
    stretch?: boolean
}

export const HorizontalContainer = ({ children }: HorizontalContainerProps) => (
    <LHorizontalContainer>{children}</LHorizontalContainer>
)

export const VerticalContainer = ({
    children,
    stretch,
}: VerticalContainerProps) => (
    <LVerticalContainer stretch={stretch}>{children}</LVerticalContainer>
)
