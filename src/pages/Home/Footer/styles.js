import styled from 'styled-components'

export const ContainerFooter = styled.footer`
    padding: 3rem 4.5rem 0;
    height: auto;

    background-color: ${props => props.theme.colors.backgroundFooter};

        @media (max-width: 990px) {
        padding: 2rem 2rem 0;
    }
`