import { Logo } from "./Logo/Logo"
import { Search } from "./Search/Search"
import { Nav } from "./Nav/Nav"
import { Links } from "./Links/Links" 

import { ContainerHeader } from "./styles"
import { ContainerSearch } from "./Search/styles"
import { ContainerNav } from "./Nav/styles"
import { ContainerLinks } from "./Links/styles"

import { GiHamburgerMenu } from 'react-icons/gi'

export const IndexHeader = ({ setMenuIsVisible }) => {

    return (
        <>
            <ContainerHeader>

                <Logo/>
 
                <ContainerSearch>
                    <Search/>
                </ContainerSearch>

                <GiHamburgerMenu size={'40px'} className="iconHamburger" onClick={() => setMenuIsVisible(true)}/> 

                <ContainerNav>
                    <Nav/>
                </ContainerNav>

                <ContainerLinks>
                    <Links/>
                </ContainerLinks>

            </ContainerHeader>
        </>
    )
}