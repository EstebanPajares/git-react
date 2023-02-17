import React from 'react'
import styled from 'styled-components'

const RepoStyled = styled.div`
    border: 10px solid green;
    max-inline-size: 200px;
    margin: auto;

`

function Repo() {
    return (
        <RepoStyled>
            Esteban
        </RepoStyled>
    )
}

export default Repo
