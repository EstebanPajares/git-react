import React from 'react'
import styled from 'styled-components'

const ProfileStyled = styled.div`
    grid-area: profile;

    .avatar{
        border-radius: 50%;
        border: 1px solid var(--grey-1);
        overflow:hidden;
        box-sizing: border-box;
        margin-block-end: 1.5rem;
    }

    .info{
        color: var(--grey-1);
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: .5rem;
        margin-block: 1rem;
        font-family: var(--body2-semi-bold);
    }

    a:hover{
        text-decoration: underline;
    }
    .name{
        font: var(--headline1);
        color: var(--white);
        margin: 0;
        margin-block-end: .5rem;
    }
    .username{
        margin-block: .5rem;
        font: var(--headline2-ligth);
        margin-block-end: 1.5rem;
    }

    .button{
        display: flex;
        gap: .5rem;
        margin-block-end: 1.5rem;
    }
`

function Profile() {
    return (
        <ProfileStyled>
            <img src="" className='avatar' alt="" width='278' height='278'/>
            <p className="name">Esteban</p>
            <p className="username">Esteban Pajares</p>
            <div className="button">
                <button>Follow</button>
                <button>Soponsor</button>
            </div>
            <p className="bio info">Software Engineer</p>
            <p className="followers info">
                . 10 <span>followers</span> <span>.</span>15 <span>following</span>
            </p>
            <p className="stars info">
                . 81
            </p>
            <p className="location info">Lima</p>

            <a className='info' href="https://github.com/EstebanPajares" target='_blank' rel="noreferrer">https://github.com/EstebanPajares</a>
            <a className='info' href="https://twitter.com/Esteban_Pajares" target='_blank' rel="noreferrer">@EstebanPajares</a>
        </ProfileStyled>
    )
}

export default Profile
