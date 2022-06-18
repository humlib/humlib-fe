import type { ReactNode } from 'react'
import React from 'react'
import styled from 'styled-components'

type AnkerProps = {
    textLink: boolean
}

const Anker = styled.a`
    text-decoration: ${(props: AnkerProps) =>
        props.textLink ? 'underline' : 'none'};
`

interface LinkProps {
    url: string
    label?: string
    icon?: ReactNode
}

export const Link = ({ url, label, icon }: LinkProps) => (
    <Anker href={url} textLink={!icon}>
        {icon}
    </Anker>
)
