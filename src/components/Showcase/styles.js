import styled from 'styled-components'

export const ContainerShowcase = styled.div`

    h1{
        font-weight: 200;
        margin-top: 1rem;
    }

    .titles{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 2rem;
    }

    .banner{
        img{
            width: 100%;
            margin-bottom: 2rem;
        }
    }

    .linkPag{
        margin-top: 2rem;
        position: relative;
        right: -75%;
        text-decoration: none;
        color: #fff;
        display: flex;

        :hover{
            color: ${props => props.theme.colors.quaternary};
        }
    }

    @media (max-width: 850px) {
        .linkPag{
            right: -45%;
        }
    }
`

export const ContainerCarousel = styled.div`

    margin-bottom: 1rem;
`

export const ContainerCarouselCards = styled.div`

    display: flex;
    margin-bottom: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;

    ::-webkit-scrollbar{
        display: none;
    }
`

export const ContainerCarouselControls = styled.div`

    background-color: #000;
    display: flex;
    justify-content: center;
    
    button{
        width: 50%;
        border: none;
        background-color: ${props => props.theme.colors.background};

        :hover{
            cursor: pointer;
            border: solid 1px ${props => props.theme.colors.quaternary};
        }
    }

    svg{
        margin: 0 1rem;
        height: 2rem;
        width: 2rem;
        color: ${props => props.theme.colors.quaternary};
        background-color: ${props => props.theme.colors.background};
    }
`