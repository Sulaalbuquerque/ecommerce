import { About } from "./About/About"
import { Attendance } from "./Attendance/Attendance"
import { Departaments } from "./Departaments/Departaments"
import { Help } from "./Help/Help"
import { ReiceiveNotifications } from "./ReceiveNotifications/ReceiveNotifications"
import { SocialNetworks } from "./SocialNetworks/SocialNetworks"
import { ContainerFooterNav } from "./styles"

export const FooterNav = () => {
    return (
        <>
            <ContainerFooterNav>
                <Departaments/>
                <About/>
                <Help/>
                <Attendance/>
                <ReiceiveNotifications/>
                <SocialNetworks/>
            </ContainerFooterNav>
        </>
    )
}