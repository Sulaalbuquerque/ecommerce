
import { IndexFooter } from "./pages/Home/Footer/IndexFooter"
import { IndexHeader } from "./pages/Home/Header/IndexHeader"
import { IndexMain } from "./pages/Home/Main/IndexMain"
import { ContainerApp, 
        ContainerAppFooter, 
        ContainerAppHeader, 
        ContainerAppMain } from "./styles/stylesApp"

import { GlobalStyle } from "./styles/stylesGlobal"
import { ThemeProvider } from "styled-components"
import light from "./styles/themes/theme"

import { IndexMenuMobile } from "./pages/Home/Header/MenuMobile/IndexMenuMobile"
import { useState } from "react"
import { IndexWhatsapp } from "./pages/Home/WhatsApp/IndexWhatsApp"

import { Accessibility } from './pages/Home/Accessibility/IndexAccessibility'

function App() {

  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <>
      <ThemeProvider theme={light}>

        <GlobalStyle/>

        <ContainerApp>
          <IndexMenuMobile
            menuIsVisible = {menuIsVisible}
            setMenuIsVisible = {setMenuIsVisible}
          /> 

          <Accessibility/>
          
          <ContainerAppHeader>
            <IndexHeader setMenuIsVisible = {setMenuIsVisible}/>
          </ContainerAppHeader>

          <ContainerAppMain>
            <IndexMain/>
          </ContainerAppMain>
          
          <ContainerAppFooter>
            <IndexFooter/>
          </ContainerAppFooter>

          <IndexWhatsapp/>
        </ContainerApp>

      </ThemeProvider>
    </>
  )
}

export default App
