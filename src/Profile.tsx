import React from 'react'
import { useKeycloak } from '@react-keycloak/web'
const Profile = () => {
    const { keycloak } = useKeycloak()

    return (
        <div>
            Profile
            {!keycloak.authenticated && (
                <button type="button" onClick={() => keycloak.login()}>
                    Login
                </button>
            )}
            {!!keycloak.authenticated && (
                <button type="button" onClick={() => keycloak.logout()}>
                    Logout ({keycloak.tokenParsed.preferred_username})
                </button>
            )}
        </div>
    )
}

export default Profile
