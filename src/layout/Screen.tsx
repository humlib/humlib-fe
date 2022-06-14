import React from 'react'
import styled, { css } from 'styled-components'
import { SocialBar } from '../components/SocialBar'
import type { DefaultProps } from '../types/props'

const basicResponsiveBehavior = css`
    height: 100vh;
    margin: 0 auto;
    padding: 10px;
    @media (min-width: 768px) {
        max-width: 500px;
    }
`

const LScreen = styled.div`
    ${basicResponsiveBehavior};
    display: flex;
    flex-direction: column;
    & > main {
        flex: 1;
    }
`

export const Screen = ({ children }: DefaultProps) => {
    return (
        <LScreen>
            <main>{children}</main>
            <footer>
                <SocialBar />
            </footer>
        </LScreen>
    )
}
