import { LinkInformationMain } from "./LinkInformationMain"
import { ContainerInformationMain } from "./styles"
import { RiTruckLine } from 'react-icons/ri'
import { GiLipstick } from 'react-icons/gi'
import { TiArrowSync } from 'react-icons/ti'
import { MdPayment } from 'react-icons/md'

export const Information = () => {
    return (
        <>
            <ContainerInformationMain>
                <LinkInformationMain 
                    icon={<RiTruckLine/>} 
                    description={'Confira o valor mínimo para FRETE GRATIS!'}
                />
                <LinkInformationMain 
                    icon={<GiLipstick/>} 
                    description={'Cadastre-se no Nosso Clube e acumule pontos!'}
                />
                <LinkInformationMain 
                    icon={<TiArrowSync/>} 
                    description={'15 dias de prazo para troca e devolução.'}
                />
                <LinkInformationMain 
                    icon={<MdPayment/>} 
                    description={'Tudo em até 10x sem juros e parcela mínima de R$15,00.'}
                />
            </ContainerInformationMain>
        </>
    )
}