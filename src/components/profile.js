import React from 'react'
import styled from 'styled-components'

const ProfileStyled = styled.div`
    grid-area: profile;
    background: silver;
`

function Profile() {
    return (
        <ProfileStyled>
            Profile
        </ProfileStyled>
    )
}

export default Profile
