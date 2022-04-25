import styled from 'styled-components'

export const ContainerSocialNetworks = styled.div`
    grid-area: socialNetworks;
    display: flex;
    align-items: flex-end;
    justify-content: end;

    @media (max-width: 700px) {
        margin: 2.5rem 0;
    }
    
    @media (max-width: 1600px) {
        padding-right: 4rem;

    }
`

export const ContainerImg = styled.div`
    img{
        height: 4rem;
    }
`

export const ContainerSocial = styled.div`
    margin-right: 1rem;

    .icon{
        margin: 0 .3rem;
        color: ${props => props.theme.colors.tertiary};
        height: 1.5rem;
        width: 1.5rem;

        :hover{
        color: ${props => props.theme.colors.quaternary};
        }
    }
`