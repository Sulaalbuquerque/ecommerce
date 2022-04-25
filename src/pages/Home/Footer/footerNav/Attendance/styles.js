import styled from 'styled-components'

export const ContainerAttendance = styled.div`
    
    grid-area: attendance;
    padding-right: .5rem;

    button{
        margin-top: 1rem;
        padding: .5rem;
    }

    @media (max-width: 500px) {
        margin-bottom: 2rem;

        button{
            padding: 1rem;
        }
    }

    @media (max-width: 700px) {
        margin: 2.5rem 0;
    }
`