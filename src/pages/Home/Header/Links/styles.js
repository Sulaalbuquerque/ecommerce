import styled from 'styled-components'

export const ContainerLinks = styled.div`
    grid-area: home;
    margin-bottom: 1rem;

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;

        list-style-type: none;
        padding: 1.5rem 0 0 0;
        font-weight: 700;
    }

    a{
        color: ${props => props.theme.colors.quaternary};
        text-decoration: none;

        :hover{
            color: ${props => props.theme.colors.text};
            cursor: pointer;
        }
    }

    @media (max-width: 800px) {
        .containerHome{
          display: none;
      }
    }
    @media (max-width: 990px) {
        ul{
            display: flex;
            justify-content: space-between;
        }

        a{
            font-size: .5rem;
            font-weight: 100;
        }
    }
    @media (max-width: 1200px) {
        a{
            font-size: .8rem;
        }
    }
`

