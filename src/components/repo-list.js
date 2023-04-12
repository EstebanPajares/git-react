import React from 'react'
import styled from 'styled-components'
import RepoItem from './repo-item'

const RepoListStyled = styled.div`
    grid-area: repoList;
    background: green;
`

function RepoList({ repoList}) {
    return (
        <RepoListStyled>
            {repoList.map((item)=>{
                return <RepoItem {...item}/>
            })}
        </RepoListStyled>
    )
}

export default RepoList
