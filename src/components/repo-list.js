import React from 'react'
import styled from 'styled-components'

const RepoListStyled = styled.div`
    grid-area: repoList;
    background: green;
`

function RepoList() {
    return (
        <RepoListStyled>
            RepoList
        </RepoListStyled>
    )
}

export default RepoList
