import { AlternativeAccess } from "./AlternativAccess/IndexAlternativeAccess.tsx"
import { BestSellers } from "./BestSellers/BestSellers"
import { CarouselComp } from "./Carousel/Carousel"
import { ContainerCarousel } from "./Carousel/styles"
import { ExtraServices } from "./ExtraServices/IndexExtraServices"
import { Information } from "./Information/Information"
import { Promotion } from "./Promotion/Promotion"
import { Releases } from "./Releases/Releases"
import { ContainerMain } from "./styles"

export const IndexMain = () => {
    return (
        <>
            <ContainerMain>
                <ContainerCarousel>
                    <CarouselComp/>
                </ContainerCarousel>
                <Information/>
                <Releases/>
                <Promotion/>
                <ExtraServices/>
                <BestSellers/>
                <AlternativeAccess/>
            </ContainerMain>
        </>
    )
}