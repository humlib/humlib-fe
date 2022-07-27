import React from 'react'
import { Search } from './screens/Search'
import ResetCSS from './styles/resetCSS'
import GlobalStyle from './styles/globalStyle'

export const App = () => (
    <>
        <ResetCSS />
        <GlobalStyle />
        <Search />
    </>
)
