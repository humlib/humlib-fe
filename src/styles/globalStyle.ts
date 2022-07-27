import { createGlobalStyle } from 'styled-components'

import MikiRegular from '../fonts/Miki/KontrapunktMiki-Regular.otf'

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: Miki Regular;
    font-style: normal;
    font-weight: 400;
    src: url(${MikiRegular});
    }

html * {
  font-family: Miki Regular
}
`

export default GlobalStyle
