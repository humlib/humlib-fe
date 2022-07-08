import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'

type AnkerProps = {
    textLink: boolean
}

const Anker = styled.a`
    text-decoration: ${(props: AnkerProps) =>
        props.textLink ? 'underline' : 'none'};
    color: ${colors.secondary.text};
`

interface LinkProps {
    url: string
    label?: string
    icon?: ReactNode
}

export const Link = ({ url, label, icon }: LinkProps) => (
    <Anker href={url} textLink={!icon} target="_blank">
        {icon ? icon : label}
    </Anker>
)
