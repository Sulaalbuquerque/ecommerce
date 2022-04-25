import styled from 'styled-components'

export const ContainerNav = styled.div`
    grid-area: nav;

    display: flex;
    align-items: center;
    width: 100%;

    ul{
        display: flex;
        justify-content: space-evenly;
        align-items: flex-end;
        width: 100%;
    }

    li{
        list-style-type: none;
        font-weight: 700;
    }

    a{
        color: ${props => props.theme.colors.quaternary};
        text-decoration: none;

        :hover{
            color: ${props => props.theme.colors.text};
        }
    }

    .bill{
        font-weight: 200;
    }

    .bag{
        margin-left: .2rem;
    }

    @media (max-width: 770px) {
        .containerNav{
          display: none;
      }
    }

    @media (max-width: 990px) {
        a{
            font-size: 1rem;
        }
    }
`


