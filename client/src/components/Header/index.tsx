import { FC } from "react"
import Navbar from "./Navbar"
import { HeaderSection } from "./style_componets"



const Header:FC = () => {
  return (
    <HeaderSection>
      <Navbar/>
    </HeaderSection>
  )
}

export default Header
