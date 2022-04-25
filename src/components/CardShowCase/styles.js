import styled from 'styled-components'

export const ContainerCard = styled.div`
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.quaternary};
    padding: 1rem;
    position: relative;
    margin: .5rem;
    width: 20%;
    cursor: pointer;
    min-width: 250px;
    min-height: 500px;
    border-radius: 5px;
    
    :hover{
        .announcement{
            display: none;
        }

        .extras{
            display: flex;
        }
    }

    span{
        display: block;
    }

    .discount{
        background-color: #000;
        position: absolute;
        right: 10%;
        border-radius: 20%;
        padding: .1rem .4rem;
        font-weight: 600;
    }

    .imgProduct{
        width: 100%;
        margin-bottom: .4rem;
        //object-fit: cover;
    }

    .detail{
        border: solid 1px #fff;
        width: fit-content;
        padding: .2rem .3rem;
        font-size: .8rem;
        margin-bottom: .4rem;
    }

    .name{
        font-weight: 600;
        margin-bottom: .4rem;
    }

    .assessments{
        margin-bottom: .4rem;
    }

    .main{
        margin-bottom: .4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .values{
        .previousValue{
            font-size: .8rem;
            text-decoration: line-through;
        }

        .currentValue{
            margin: .2rem 0;
        }

        .installment{
            font-size: .8rem;
        }
    }

    .announcement{
        font-size: .9rem;
    }

    .extras{
        display: none;
        flex-direction: column;
        transition: transform 1s;
        
        :hover{
            transition: transform 1s;

        }

        button{
            display: flex;
            justify-content: center;
            border-radius: 5px;
            padding: .8rem .5rem;
            font-size: .8rem;
            font-weight: 700;
            background-color: ${props => props.theme.colors.secondary};
            color: #fff;
            border: none;
            margin: 1rem 0;
            cursor: pointer;

            :hover{
                background-color: ${props => props.theme.colors.background};
            }
        }

        a{
            display: flex;
            text-decoration: none;
            color: #fff;

            :hover{
                color: ${props => props.theme.colors.quaternary};
            }
        }
    }
`