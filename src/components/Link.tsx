import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'

interface AnchorProps {
    textLink: boolean
}

const Anchor = styled.a`
    text-decoration: ${(props: AnchorProps) =>
        props.textLink ? 'underline' : 'none'};
    color: ${colors.secondary.text};
`

interface LinkProps {
    url: string
    label?: string
    icon?: ReactNode
}

export const Link = ({ url, label, icon }: LinkProps) => (
    <Anchor href={url} textLink={!icon} target="_blank">
        {icon ? icon : label}
    </Anchor>
)
