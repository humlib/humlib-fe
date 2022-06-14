import React from 'react'
import { useSelector } from 'react-redux'
import { FirstVisitModal } from '../components/FirstVisitModal'
import { Headline } from '../components/Headline'
import { SearchBar } from '../components/SearchBar'
import { Subtitle } from '../components/Subtitle'
import { VerticalContainer } from '../layout/Container'
import { Screen } from '../layout/Screen'
import { selectFirstVisit } from '../redux/userSlice'

export const Search = () => {
    const firstVisit = useSelector(selectFirstVisit)
    return (
        <Screen>
            {firstVisit && <FirstVisitModal />}
            <VerticalContainer stretch>
                <Headline>HumLib</Headline>
                <Subtitle>Entdecke Deinen Beruf</Subtitle>
                <SearchBar />
            </VerticalContainer>
        </Screen>
    )
}
