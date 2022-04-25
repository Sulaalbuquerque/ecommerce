import styled from 'styled-components'

export const ContainerSearch = styled.div`
    grid-area: search;
    width: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;

    .icon{
        color: #fff;
        font-size: 1rem;
        color: ${props => props.theme.colors.quaternary};
    }

    input{
        width: 100%;
        font-size: 1rem;
    }

    button{
        background-color: ${props => props.theme.colors.primary};
        cursor: pointer;

        :hover{
            background-color: ${props => props.theme.colors.quaternary};
            .icon{
                color: #fff;
            }
        }
    }

    input, button{
        padding: .7rem;
        border: solid 1px ${props => props.theme.colors.quaternary};
    }

    @media (max-width: 770px) {
        input, button{
            padding: 1rem;
        }
    }

    @media (max-width: 990px) {
        margin-top: .5rem;
    }

    @media (max-width: 1200px) {
        margin-top: .5rem;
    }
`



