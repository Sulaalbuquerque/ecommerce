import { IndexShowcase } from "../../../../components/Showcase/IndexShowcase"
import { ContainerPromotion } from "./styles"

export const Promotion = () => {
    return (
        <>
            <ContainerPromotion>
                <IndexShowcase
                   title={'PROMOÇÕES'}
                   description={'Lorem Ipsum has been the industry'}
                   banner={'https://via.placeholder.com/1300x350.png/BC8F8F/FFFFFF/?text=banner'}
                   descriptionBanner={'banner com promoções'}
                   link={'Ver todas as promoções'}
                />
            </ContainerPromotion>
        </>
    )
}
