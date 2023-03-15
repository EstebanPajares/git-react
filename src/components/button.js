import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`

`

function Button({text}) {
    return (
        <ButtonStyled>
            {text}
        </ButtonStyled>
    )
}

export default Button