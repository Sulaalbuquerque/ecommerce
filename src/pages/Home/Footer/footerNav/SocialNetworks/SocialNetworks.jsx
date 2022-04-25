import { 
    ContainerSocial, 
    ContainerSocialNetworks, 
    ContainerImg } from "./styles"
import { BsFacebook } from 'react-icons/bs'
import { GrInstagram } from 'react-icons/gr'
import { IoLogoYoutube } from 'react-icons/io'

export const SocialNetworks = () => {
    return (
        <>
            <ContainerSocialNetworks>
                    <ContainerSocial>
                        <a href="#" target={'_blank'}><BsFacebook className="icon"/></a>
                        <a href="#" target={'_blank'}><GrInstagram className="icon"/></a>
                        <a href="#" target={'_blank'}><IoLogoYoutube className="icon"/></a>
                    </ContainerSocial>
                    <ContainerImg>
                        <img
                            src="https://via.placeholder.com/250x200.png/BC8F8F/FFFFFF/?text=Logo" //../../../../cosmetics.png
                            alt="Imagem com a logomarca"
                            height={'40px'}
                        />
                    </ContainerImg>
            </ContainerSocialNetworks>
        </>
    )
}