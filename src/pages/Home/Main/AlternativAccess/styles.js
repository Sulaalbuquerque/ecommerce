import styled from 'styled-components'

export const ContainerAlternativeAccess = styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-around;

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.quaternary};
    }

    @media (max-width: 560px) {
        display: block;
    }
`

export const ContainerCardAlternativeAccess = styled.div`
    margin: 1rem;
    padding: 1rem;
    cursor: pointer;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    :hover{
        a{
            color: #fff;
        }
    }

    svg{
        height: 4rem;
        width: 4rem;
        margin: .5rem;
    }

    h6{
        margin: 1rem 0;
        line-height: 1rem;
    }

    @media (max-width: 560px) {
        flex-direction: row;
    }

    @media (max-width: 600px) {
        h6{
            display: none;
        }
    }

    @media (max-width: 700px) {
        svg{
            height: 1.5rem;
            width: 1.5rem;
        }

        h3{
        font-size: .9rem;
        }
    }
`