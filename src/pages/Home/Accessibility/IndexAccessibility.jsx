import { 
    ContainerAccessibility, 
    ContainerIndexAccessibility } from "./styles"
import { MdSettingsAccessibility } from 'react-icons/md'
import { ListAccessibility } from "./ListAccessibility"

export const Accessibility = () => {

    return (
        <>
            <ContainerAccessibility>

                <ContainerIndexAccessibility>
                    <MdSettingsAccessibility/>
                </ContainerIndexAccessibility>
                
                <ListAccessibility/>
                
            </ContainerAccessibility>
        </>
    )
}
