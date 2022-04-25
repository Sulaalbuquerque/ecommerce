import styled from 'styled-components'

export const ContainerInformationMain = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin: 2rem 0 4rem;

    @media (max-width: 990px) {
        display: none;
    }
`
export const ContainerLinkInformationMain = styled.div`
    border-radius: 5%;

    :hover{
        color: ${props => props.theme.colors.quaternary};
    }
    
    a{
        display: flex;
        text-decoration: none;
        margin: 1rem;
        color: ${props => props.theme.colors.tertiary};
        cursor: pointer;

        :hover{
            color: ${props => props.theme.colors.quaternary};
        }

        svg{
            height: 2rem;
            width: 2rem;
        }

        p{
            margin-left: 1rem;
        }
    }

    @media (max-width: 1200px) {
        p{
            font-size: .8rem;
        }
    }
`