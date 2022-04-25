import { IndexCard } from "../../../../components/CardShowCase/IndexCard"
import { IndexShowcase } from "../../../../components/Showcase/IndexShowcase"
import { ContainerReleases } from "./styles"

export const Releases = () => {
    return (
        <>
            <ContainerReleases>
                <IndexShowcase
                   title={'LANÇAMENTOS'}
                   description={'Lorem Ipsum has been the industry'}
                   banner={'https://via.placeholder.com/1300x250.png/BC8F8F/FFFFFF/?text=banner'}
                   descriptionBanner={'banner com lançamentos'}
                   link={'Ver todos os lançamentos'}
                />
            </ContainerReleases>
        </>
    )
}
