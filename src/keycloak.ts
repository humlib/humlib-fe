import Keycloak from 'keycloak-js'
const keycloak = new Keycloak({
    url: 'http://localhost:8180/auth',
    realm: 'humlib',
    clientId: 'humlib-fe',
})

export default keycloak
