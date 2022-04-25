import styled from 'styled-components'

export const ContainerHeader = styled.header`
  display: grid;
  grid-template-areas:
   'logo search search search nav nav nav nav'
   'home home home home home home home home';
  background-color: ${props => props.theme.colors.primary};
  padding:0 4.5rem;
  padding-top: 2rem;

  .iconHamburger{
    grid-area: iconMenu;
    display: none;
    cursor: pointer;

    :hover{
      color: ${props => props.theme.colors.quaternary};
    }
  }

  @media (max-width: 500px) {
    padding: 1rem 2rem;
    padding-bottom: 0;
  }

  @media (max-width: 770px) {
    display: grid;
    grid-template-areas: 
      'logo logo logo iconMenu iconMenu iconMenu'
      'search search search search search search';
    align-items: center;
    padding-right: 0;
    gap: 1rem 0;
    position: relative;
      
    .iconHamburger{
      display: inline-block;
      position: absolute;
      right: 7%;
      top: 25%;
    }
  }
    
  @media (max-width: 990px) {
    grid-template-areas: 
      'logo logo nav nav nav nav'
      'search search search search search search'
      'home home home home home home';
    padding: 1rem 2.2rem;
  }

  @media (max-width: 1200px) {
    grid-template-areas: 
      'logo logo nav nav nav nav'
      'search search search search search search'
      'home home home home home home';
  }
`
