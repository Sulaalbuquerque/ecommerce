import { ContainerMenuMobile } from "./styles"
import { AiFillCloseCircle } from 'react-icons/ai'
import { useEffect } from "react"


export const IndexMenuMobile = ({ menuIsVisible, setMenuIsVisible }) => {

    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
    }, [menuIsVisible])

    return (
        <>
            <ContainerMenuMobile isVisible={menuIsVisible}>

                <AiFillCloseCircle size={45} onClick={() => setMenuIsVisible(false)}/>
                
                <nav>
                    <a href="#">Ajuda</a>
                    <a href="#">Revenda</a>
                    <a href="#">Pedidos</a>
                    <a href="#">Minha Conta</a>
                    <a href="#">Sacola</a>
                </nav>

            </ContainerMenuMobile>
        </>
    )
}