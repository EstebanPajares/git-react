import React from 'react'
import styled from 'styled-components'

const FiltersStyled = styled.div`
    grid-area: filters;
    background-color: green;
`

function Filters() {
    return (
        <FiltersStyled>
            Filters
        </FiltersStyled>
    )
}

export default Filters
