import { Footer } from "./footer/Footer"
import { FooterNav } from "./footerNav/FooterNav"
import { ContainerFooter } from "./styles"

export const IndexFooter = () => {
    return (
        <>
            <ContainerFooter>
                <FooterNav/>
                <Footer/>
            </ContainerFooter>
        </>
    )
} 