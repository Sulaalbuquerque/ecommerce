import styled from 'styled-components'

export const ContainerReceiveNotifications = styled.div`
    grid-area: receiveNotifications;

    form{
        margin: 1rem 0;
    }
      
    input{
        padding: .5rem;
    }

    p{
        font-size: .8rem;
        margin-top: .3rem;
    }

    button{
        padding: .5rem;
    }

    input, button{
        margin: .3rem;
    }

    .privacyPolicy{
        text-decoration: underline;
        color: ${props => props.theme.colors.quaternary};
    
        :hover{
            color: #fff;
        }
    }

    @media (max-width: 700px) {
        margin-top: 1rem;

        .email{
            grid-area: email;

            input{
                width: 100%;
            }
        }

        .nome{
            grid-area: nome;

            input{
                width: 95%;
            }
        }

        .button{
            grid-area: button;
        }

        .parag{
            grid-area: parag;
        }

        input, button{
            margin: .2rem;
            padding: .8rem;
            border-radius: 5%;
        }

        .form{
            display: grid;
            grid-template-areas: 
            'email email'
            'nome button'
            'parag parag';
        }
    }
`