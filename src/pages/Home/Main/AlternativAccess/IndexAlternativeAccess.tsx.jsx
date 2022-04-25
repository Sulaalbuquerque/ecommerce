import { CardAlternativeAccess } from "./CardAlternativeAccess"
import { ContainerAlternativeAccess } from "./styles"
import { 
    BsWhatsapp, 
    BsHandbag } from 'react-icons/bs'
import { GiLipstick } from 'react-icons/gi'
import { MdOutlineDeliveryDining } from 'react-icons/md'

export const AlternativeAccess = () => {
    return (
        <>
            <ContainerAlternativeAccess>
                <CardAlternativeAccess
                    icon={<BsWhatsapp/>}
                    title={'WHATSAPP'}
                    subtitle={'COMPRE PELO 0800 000 000'}
                />

                <CardAlternativeAccess
                    icon={<BsHandbag/>}
                    title={'LOJAS FÍSICAS'}
                    subtitle={'ENCONTRE A MAIS PRÓXIMA'}
                />

                <CardAlternativeAccess
                    icon={<GiLipstick/>}
                    title={'EU AMO MAKE'}
                    subtitle={'NOSSO CATÁLOGO'}
                />

                <CardAlternativeAccess
                    icon={<MdOutlineDeliveryDining/>}
                    title={'DELIVERY'}
                    subtitle={'BAISE O APP E APROVEITE'}
                />
            </ContainerAlternativeAccess>
        </>
    )
}
