import {
    faGithub,
    faLinkedin,
    IconDefinition,
} from '@fortawesome/free-brands-svg-icons'
import { faGavel } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../styles/theme'
import { Link } from './Link'

type SocialBarItemPros = {
    icon: IconDefinition
}

const SocialBarIcon = ({ icon }: SocialBarItemPros) => (
    <FontAwesomeIcon
        icon={icon}
        size="2x"
        color={colors.primary.main}
    ></FontAwesomeIcon>
)

export const SocialBar = () => (
    <SocialIconsContainer>
        <SocialIconsInnerContainer>
            <Link
                url="https://www.linkedin.com/groups/2844263/"
                icon={<SocialBarIcon icon={faLinkedin} />}
            />
            <Link
                url="https://www.github.com/humlib/"
                icon={<SocialBarIcon icon={faGithub} />}
            />
            <Link url="impressum" icon={<SocialBarIcon icon={faGavel} />} />
        </SocialIconsInnerContainer>
    </SocialIconsContainer>
)

const SocialIconsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const SocialIconsInnerContainer = styled.div`
    display: flex;
    width: clamp(20%, 150px, 70%);
    justify-content: space-between;
`
