import styled from 'styled-components'

export const ContainerFooterNav = styled.div`

    display: grid;
    grid-template-areas: 
        'departaments about help attendance receiveNotifications'
        'departaments about help attendance socialNetworks';

    h5{
        margin-bottom: .5rem;
    }

    li{
        list-style-type: none;
        font-size: .9rem;
        margin-bottom: .2rem;
    }

    a{
        text-decoration: none;

        :hover{
            text-decoration: underline;
            color: ${props => props.theme.colors.quaternary};
        }
    }

    a, h5, h6, p{
        color: ${props => props.theme.colors.tertiary};
    }

    button{
        background-color: ${props => props.theme.colors.tertiary};
        color: ${props => props.theme.colors.primary};
        border-radius: 5%;
        font-weight: 700;
        border: solid 1px ${props => props.theme.colors.tertiary};
        cursor: pointer;
    
        :hover{
            background-color: ${props => props.theme.colors.quaternary};
            border: solid 1px ${props => props.theme.colors.quaternary};
        }
    }

    @media (max-width: 700px) {
        grid-template-areas: 
        'receiveNotifications receiveNotifications receiveNotifications receiveNotifications'
        'attendance attendance socialNetworks socialNetworks'
        'departaments about about help';
    }
`