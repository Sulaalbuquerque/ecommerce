import { BsHandbag } from 'react-icons/bs'
import { TiArrowSortedDown } from 'react-icons/ti'
import { ContainerNav } from './styles'

export const Nav = () => {
    return (
        <>
            <ContainerNav className='containerNav'>
                <ul>
                    <li><a href="#">Ajuda</a></li>
                    <li><a href="#">Revenda</a></li>
                    <li><a href="#">Pedidos</a></li>
                    <li>
                        <a href="#">
                            <span className='bill'>Olá! Entrar na</span>
                            <br/>
                            Minha Conta
                            <TiArrowSortedDown/>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <BsHandbag/>
                            <span className='bag'>Sacola</span>
                            <TiArrowSortedDown/>
                        </a>
                    </li>
                </ul>
            </ContainerNav>
        </>
    )
} 