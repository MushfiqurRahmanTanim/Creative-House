import { FC } from "react"
import { NavbarGrid, NavbarLeft, NavbarParent, NavbarRight } from "./style_componets"
import Image from 'next/image'
import Link from 'next/link'
import NavLink from "./NavLink"

 
const Navbar:FC = () => {
  return (
    <NavbarParent>
    <div className="container">
    <NavbarGrid >
       {/* Logo part */}
       <NavbarLeft>
          <div className="">
              <Link href="/">
                <a className="flex items-center">
                <Image src="/house.svg" alt="logo" width={55} height={55} 
              className="bg-transparent"/>
              <h1 className="text-[17px] font-light text-white flex flex-col leading-5">Creative <span>House</span></h1>
                </a>
              </Link>
          </div>
       </NavbarLeft>
        {/* Menu part */}
         <NavbarRight>
           <NavLink/>
         </NavbarRight>
    </NavbarGrid>
    </div>
  </NavbarParent>
  )
}

export default Navbar
