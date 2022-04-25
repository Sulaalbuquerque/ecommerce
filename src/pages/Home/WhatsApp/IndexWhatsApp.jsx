import { ContainerIndexWhatsapp } from "./styles"
import { FaWhatsapp } from 'react-icons/fa'
import { useRef} from "react"

export const IndexWhatsapp = () => {

    const buttonWhats = useRef(null)
    const buttonClose = useRef(null)

    const closeWhatsapp = () => {
        buttonWhats.current.classList.add('invisible')
        buttonClose.current.classList.add('invisible')
    }

    return (
        <>
            <ContainerIndexWhatsapp>
                <button  ref={buttonClose} onClick={closeWhatsapp}>x</button>

                <a ref={buttonWhats} className="whatsApp" href="#" target={'_blank'}>
                    <div className="whatsapp">
                        <FaWhatsapp/>
                        <p>Compre pelo Whatsapp!</p>
                    </div>
                </a>
            </ContainerIndexWhatsapp>
        </>
    )
}
