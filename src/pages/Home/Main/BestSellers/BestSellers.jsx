import { IndexShowcase } from "../../../../components/Showcase/IndexShowcase"
import { ContainerBestSellers } from "./styles"

export const BestSellers = () => {
    return (
        <>
            <ContainerBestSellers>
                <IndexShowcase
                   title={'MAIS VENDIDOS'}
                   description={'Lorem Ipsum has been the industry'}
                   banner={'https://via.placeholder.com/1300x250.png/BC8F8F/FFFFFF/?text=banner'}
                   descriptionBanner={'banner com produtos mais vendidos'}
                   link={'Ver todos os mais vendidos'}
                />
            </ContainerBestSellers>
        </>
    )
}
