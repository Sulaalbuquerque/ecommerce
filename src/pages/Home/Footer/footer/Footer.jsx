import { Information } from "./Information/Information"
import { Payment } from "./Payment/Payment"
import { Reliability } from "./Reliability/Reliability"
import { Safety } from "./Safery/Safety"
import { ContainerFooterFooter } from "./styles"
import { Sustainability } from "./Sustainabilit/Sustainability"

export const Footer = () => {
    return (
        <>
            <ContainerFooterFooter>
                <Payment/>
                <Safety/>
                <Sustainability/>
                <Reliability/>
                <Information/>
            </ContainerFooterFooter>
        </>
    )
}