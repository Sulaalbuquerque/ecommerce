import { ReactNode } from "react";
import { ContainerLinkInformationMain } from "./styles"

export const LinkInformationMain = ({ icon, description }) => {
    return (
        <>
            <ContainerLinkInformationMain>
                <a href="#">
                    {icon}
                    <p>{description}</p>
                </a>
            </ContainerLinkInformationMain>
        </>
    )
}