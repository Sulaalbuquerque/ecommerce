import { ContainerExtraServices } from "./styles"
import { CardExtraServices } from "./CardExtraServices"
import { AiOutlineGift } from 'react-icons/ai'
import { FiTruck } from 'react-icons/fi'
import { RiCoupon3Line } from 'react-icons/ri'
import { IoMdStopwatch } from 'react-icons/io'

export const ExtraServices = () => {
    return (
        <>
            <ContainerExtraServices>
                <CardExtraServices
                    icon={<AiOutlineGift/>}
                    title={'TRANSFORME EM PRESENTE'}
                    subtitle={'QUALQUER PEDIDO NO SITE PODE VIRAR PRESENTE POR APENAS + R$ 1.'}
                    button={'EU QUERO'}
                />

                <CardExtraServices
                    icon={<FiTruck/>}
                    title={'FRETE GRÁTIS SEMPRE CAI BEM'}
                    subtitle={'COMPRE PELO SITE E RETIRE NA LOJA MAIS PRÓXIMA. DISPONÍVEL EM ATÉ 48H.'}
                    button={'APROVEITAR'}
                />

                <CardExtraServices
                    icon={<RiCoupon3Line/>}
                    title={'VEM DE CUPOM'}
                    subtitle={'LEVE SÓ PREÇO NCRÍVEL NOS ITENS QUE VOCÊ TÁ QUERENDO.'}
                    button={'DESCUBRA'}
                />

                <CardExtraServices
                    icon={<IoMdStopwatch/>}
                    title={'TÁ COM PRESSA?'}
                    subtitle={'VAI DE FRETE SUPER EXPRESSO QUE O PEDIDO CHEGA NO MESMO DIA.'}
                    button={'EU QUERO'}
                />
            </ContainerExtraServices>
        </>
    )
}