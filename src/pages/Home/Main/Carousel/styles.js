import styled from 'styled-components'

export const ContainerCarousel = styled.div`
    margin: 3rem  0  4rem;

    .legend{
        visibility: hidden;
    }

    .thumbs-wrapper{
        display: none;
    }

    .control-arrow{
        width: 20%;
    }

    @media (max-width: 770px) {
        margin: 1rem  0  2rem;

        .control-arrow{
            width: 30%;
        }
    }
`