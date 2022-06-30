import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useFetchHumans } from '../api/humans.api'
import { FirstVisitModal } from '../components/FirstVisitModal'
import { Headline } from '../components/Headline'
import { SearchBar } from '../components/SearchBar'
import { Subtitle } from '../components/Subtitle'
import { VerticalContainer } from '../layout/Container'
import { Screen } from '../layout/Screen'
import { selectFirstVisit } from '../redux/userSlice'

export const Search = () => {
    const firstVisit = useSelector(selectFirstVisit)
    const tags = useMemo(() => {
        return ['foo', 'bar']
    }, [])
    const { humans } = useFetchHumans(1, tags)
    return (
        <Screen>
            {humans.map((human) => (
                <p key={human.teaserText}>{human.profession}</p>
            ))}

            {firstVisit && <FirstVisitModal />}
            <VerticalContainer stretch>
                <Headline>HumLib</Headline>
                <Subtitle>Entdecke Deinen Beruf</Subtitle>
                <SearchBar />
            </VerticalContainer>
        </Screen>
    )
}
