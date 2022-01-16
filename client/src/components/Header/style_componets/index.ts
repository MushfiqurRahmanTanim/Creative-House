import styled from "styled-components";
import tw from "twin.macro";


export const HeaderSection =styled.section`
background: linear-gradient(
  -45deg, rgba(147,26,222,0.83) 0%, rgba(28,206,234,0.82) 100%);

  
  
 ${tw`
   relative
   w-full
   bg-transparent
   flex
   h-[100px]
   bg-[#36275d]
 `}
`

export const HomeHeader = styled.div`
background: linear-gradient(
  -45deg, rgba(147,26,222,0.83) 0%, rgba(28,206,234,0.82) 100%);
    
 ${tw`
 absolute
 top-0
 left-0
 h-[92vh]
 max-h-[768px]
 w-full
 flex
 
 bg-[#36275d]
`}

`

export const NavbarParent = styled.nav`
${tw`
 fixed
 top-0
 w-full
 py-6
 left-0
 z-[1030]
`}
`

export const NavbarGrid = styled.div`
 ${tw`
   grid
   grid-cols-12
   justify-between
   items-center
 `}
`

export const NavbarLeft = styled.div`
  ${tw`
  col-span-12 
  md:col-span-4
  `}

`

export const NavbarRight = styled.div`
  ${tw`
  col-span-12
   md:col-span-8
  `}
`