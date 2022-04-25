import styled from 'styled-components'

export const ContainerFooterFooter = styled.div`
    display: grid;
    grid-template-areas: 
        'payment payment safety safety sustainability reliability'
        'information information information information information information';
    
    padding-top: 2rem;
    height: 100%;
    color: ${props => props.theme.colors.tertiary};

    @media (max-width: 700px) {
        grid-template-areas: 
        'payment payment' 
        'safety safety' 
        'sustainability reliability'
        'information information';
    }
`