
import styled from 'styled-components'
import props from './profile-data'
import Button from './button'
import Icon from './icon'
//import {ReactComponent as Heart} from './icon/heart.svg'
import Heart from './icon/heart'

const ProfileStyled = styled.div`


    grid-area: profile;

     .custtom{
        border-color: green;
    }

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
    const {name, login, avatar_url, bio, followers, following, location, twitter_username, blog} = props
    return (
        <ProfileStyled>
            <Icon/>
            <img src={avatar_url} className='avatar' alt="" width='278' height='278'/>
            <p className="name">{name}</p>
            <p className="username">{login}</p>
            <div className="button">
                <Button
                    text = 'Follow'
                    link = '#'
                    className= 'custtom'
                    icon = {<Icon
                        name = 'branch'
                        /* sise={24}
                        color='red' */
                    />}
                />
                <Button
                    text = 'Sponsor'
                    icon = {<Icon
                        name = 'heart'
                        /* sise={24}
                        color='blue' */
                    />}
                />
            </div>
            <p className="bio info">{bio}</p>
            <p className="followers info">
                . {followers} <span>followers</span> <span>.</span>{following} <span>following</span>
            </p>
           {/*  <p className="stars info">
                . 81
            </p> */}
            <p className="location info">{location}</p>

            <a className='info' href={blog} target='_blank' rel="noreferrer">{blog}</a>
            <a className='info' href={`https://twitter.com/${twitter_username}`} target='_blank' rel="noreferrer">@{twitter_username}</a>
        </ProfileStyled>
    )
}

export default Profile
