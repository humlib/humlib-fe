import React from 'react'
import { Headline } from './Headline'
import { Subtitle } from './Subtitle'
import { VerticalContainer } from '../layout/Container'

export const PageTitle = () => (
    <VerticalContainer>
        <Headline>HumLib</Headline>
        <Subtitle>Entdecke Deinen Beruf</Subtitle>
    </VerticalContainer>
)
