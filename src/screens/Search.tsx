import React from 'react'
import { useSelector } from 'react-redux'
import { FirstVisitModal } from '../components/FirstVisitModal'
import { Link } from '../components/Link'
import { PageTitle } from '../components/PageTitle'
import { SearchBar } from '../components/SearchBar'
import { VerticalContainer } from '../layout/Container'
import { Screen } from '../layout/Screen'
import { selectFirstVisit } from '../redux/userSlice'

export const Search = () => {
    const firstVisit = useSelector(selectFirstVisit)
    return (
        <Screen>
            {firstVisit && <FirstVisitModal />}
            <VerticalContainer stretch>
                <PageTitle />
                <SearchBar />
                <Link
                    url="https://example.org"
                    label="Wie funktioniert die HumLib?"
                />
            </VerticalContainer>
        </Screen>
    )
}
