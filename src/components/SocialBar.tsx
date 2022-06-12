import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { Link } from './Link'

export const SocialBar = (props: object) => (
    <SocialIconsContainer>
        <SocialIconsInnerContainer>
            <Link
                url="linkedin.com"
                icon={<FontAwesomeIcon icon={faLinkedin} />}
            />
            <Link url="impressum" icon={<FontAwesomeIcon icon={faGithub} />} />
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
    width: clamp(20%, 200px, 70%);
    justify-content: space-between;
`
