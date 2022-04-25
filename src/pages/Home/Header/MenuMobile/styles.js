import styled, { css } from 'styled-components'

export const ContainerMenuMobile = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.backgroundMenuMobile};
    z-index: 5;
    opacity: 0;
    backdrop-filter: blur(3px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    transition: .5s;
    transform: translateY(50px);
    z-index: 5;

    svg{
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: ${props => props.theme.colors.background};
        cursor: pointer;
        
        :hover{
            color: ${props => props.theme.colors.quaternary};
        }
    }

    nav{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 80vw;
        gap: .3rem;
    }

    a{
        color: ${props => props.theme.colors.quaternary};
        text-decoration: none;
        font-weight: 700;
        background-color: ${props => props.theme.colors.background};
        padding: 1.5rem;
        width: 100vw;
        text-align: center;

        :hover{
            background-color: ${props => props.theme.colors.primary};
        }
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0px);
    `}
`


