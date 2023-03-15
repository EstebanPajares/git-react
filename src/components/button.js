// Validando un elemento de React
import { isValidElement } from 'react'

import React from 'react'
import styled from 'styled-components'

const ButtonStyled = styled.button`
    display: inline-flex;
    gap: .5rem;
    align-items: center;
    text-decoration:none !important;
    cursor: pointer;
    background: var(--buttonBG);
    color: var(--white);
    border: solid 1px var(--grey);
    min-inline-size: 8.43rem;
    justify-content: center;
    border-radius: .5rem;
    padding-block: .25rem;
    font: var(--button);


    &:hover{
        background: var(--white);
        color: var(--buttonBG)
    }

`

function Button({text, link, className, icon}) {
    const component = link ? 'a' : 'button'
    let IconComponent = null
    if (icon){
        if (isValidElement(icon)){
            IconComponent = icon
        }
    }
    return (
        <ButtonStyled as={component} href={link} className={className}>
            {IconComponent}
            {text}
        </ButtonStyled>
    )
}

export default Button