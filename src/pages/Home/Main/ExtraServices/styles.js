import styled from 'styled-components'

export const ContainerExtraServices = styled.div`
    margin-bottom: 4rem;
    display: flex;

    a{
        text-decoration: none;
        color: ${props => props.theme.colors.quaternary};
    }

    @media (max-width: 560px) {
        display: block;

        button{
            margin-left: 1rem;
        }
    }
`

export const ContainerCardExtraServices = styled.div`
    margin: 1rem;
    padding-bottom: 1rem;
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

    button{
        padding: .5rem 1rem;
        font-weight: 600;
        cursor: pointer;
        border: none;
        background-color: ${props => props.theme.colors.quaternary};

        :hover{
            background-color: ${props => props.theme.colors.backgroundFooter};
            color: ${props => props.theme.colors.text};
        }
    }

    @media (max-width: 560px) {
        flex-direction: row;
    }

    @media (max-width: 600px) {

        h6{
            display: none;
        }

        button{
            margin-top: 1rem;
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