import styled from 'styled-components'

export const ContainerIndexWhatsapp = styled.div`
    background-color: green;
    position: fixed;
    bottom: 13%;
    right: 3%;
    border-radius: 8%;
    z-index: 3;
    box-shadow: -10px 10px 30px black;
    
    a{
        color: ${props => props.theme.colors.quaternary};
        text-decoration: none;
    }

    display: flex;
    flex-direction: column;

    button{
        border-radius: 50%;
        width: 1rem;
        border: none;
        padding: .1rem .07rem .2rem .1rem;
        font-weight: 600;
        position: absolute;
        right: -4%;
        top: -15%;
        background-color: ${props => props.theme.colors.quaternary};
        cursor: pointer;
    
        :hover{
            background-color: ${props => props.theme.colors.tertiary};
        }
    }

    .whatsapp{
        display: flex;
        align-items: center;
        padding: .5rem .7rem;

        :hover{
            background-color: ${props => props.theme.colors.primary};
        }

        svg{
            height: 2rem;
            width: 2rem;
            margin-right: .5rem 0;

        }

        p{
            padding-left: .5rem;
            font-size: .9rem;
            width: 6rem;
            font-weight: 600;

        }
    }

    .invisible{
        display: none;
    }

    @media (max-width: 670px) {
        display: none;
    }

`