import styled from 'styled-components'

export const ContainerAccessibility = styled.div`
    position: absolute;
    top: 5rem;
    left: 1rem;
    z-index: 3;

    :hover{
        .list{
                display: block;
            }
    }
    
    @media (max-width: 770px) {
        z-index: 2;
        padding: .4rem .3rem .1rem .3rem;
    }

    @media (max-width: 990px) {
        left: 10rem;
        top: 3rem;
    }
`

export const ContainerIndexAccessibility = styled.div`

    svg{
        border: solid 1px ${props => props.theme.colors.secondary};
        border-radius: 50%;
        padding: .3rem .2rem .1rem .2rem;
        cursor: pointer;
        color: ${props => props.theme.colors.secondary};
        font-size: 1.8rem;

        :hover{
            color: ${props => props.theme.colors.quaternary};
            border: solid 1px ${props => props.theme.colors.quaternary};
        }

    }
`

export const ContainerListAccessibility = styled.div`
    display: none;
    background-color: ${props => props.theme.colors.secondary};
    
    h3{
        padding: 1rem;
        border-bottom: solid 1px #fff;
        color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.quaternary};
    }

    li{
        padding: .7rem;
        font-size: 1.2rem;
        cursor: pointer;
        list-style-type: none;

        :hover{
            color: ${props => props.theme.colors.primary};
            background-color: ${props => props.theme.colors.quaternary};
        }
    }
`