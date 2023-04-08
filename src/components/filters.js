import styled from 'styled-components'
import Icon from './icon'

const FiltersStyled = styled.div`
  grid-area: filters;
  background: skyblue;
`

function Filters() {
    return (
        <FiltersStyled>
            <h1>Filters Icons</h1>
            <Icon name='arrow-down' />
            <Icon name='book' />
            <Icon name='branch' />
            <Icon name='cancel' />
            <Icon name='heart' />
            <Icon name='check' />
        </FiltersStyled>
    )
}

export default Filters
