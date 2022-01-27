import Link from "next/link"
import { FC, Fragment, useState } from "react"
import { Menu, Transition } from '@headlessui/react'
import { AiOutlineAppstoreAdd,} from 'react-icons/ai'
import { IoIosArrowDown} from 'react-icons/io'
import { technology } from "@configs/static"
import Image from 'next/image'
import {BsBootstrap, BsGoogle} from 'react-icons/bs'
import {ImFacebook, ImParagraphLeft} from 'react-icons/im'
import {MdOutlineAccountCircle} from 'react-icons/md'
import {GrFormClose} from 'react-icons/gr'
import {DiGithubAlt} from 'react-icons/di'
import { Dialog } from '@headlessui/react'
import LoginForm from "@components/LoginForm"
import SingUpForm from "@components/Singup"





const NavLink:FC = () => {
  let [isOpen, setIsOpen] = useState(false)
  let [isLogin, setIsLogin] = useState(true)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

    const ModalHandler =()=>{
      if(isLogin){
        setIsLogin(false)
      }else{
        setIsLogin(true)
      }
    }
  return (
    <ul className="flex space-x-5 items-center z-[50000] relative">
        <li className="  ">
        <Menu >
      <Menu.Button className={`flex flex-col gap-1 justify-center items-center text-white font-poppins font-extralight`}>
           <span className="text-lg"><AiOutlineAppstoreAdd/></span>
          <h5 className="text-[14px] flex items-center">Technologies <span className="ml-1"><IoIosArrowDown/></span></h5>
        </Menu.Button>
        <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
      <Menu.Items className=" mt-5 flex flex-col space-y-2 absolute top-[100%]   rounded-md left-0 text-center   min-w-[180px] bg-slate-50 py-4 px-6 z-[9999]" >
        {
          technology.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <a className="flex items-center  text-slate-600 font-poppins font-extralight bg-transparent gap-2">
                  <Image src={item.logo} alt={item.name} width={35} height={35} className=""/>
                  <span className="text-sm">{item.name}</span>
                </a>
              </Link>
            )
          })
        }  
     
      </Menu.Items>
      </Transition>
    </Menu>
        </li>
        <li className="  ">
        <Menu >
      <Menu.Button className={`flex flex-col gap-1 justify-center items-center text-white font-poppins font-extralight`}>
           <span className="text-lg"><BsBootstrap/></span>
          <h5 className="text-[14px] flex items-center">Bootstrap<span className="ml-1"><IoIosArrowDown/></span></h5>
        </Menu.Button>
        <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
      {/* <Menu.Items className=" mt-5 flex flex-col space-y-2 absolute top-[100%]   rounded-md left-0 text-center   min-w-[180px] bg-slate-50 py-4 px-6 z-[9999]" >
        {
          technology.map((item, index) => {
            return (
              <Link href={item.link} key={index}>
                <a className="flex items-center  text-slate-600 font-poppins font-extralight bg-transparent gap-2">
                  <Image src={item.logo} alt={item.name} width={35} height={35} className=""/>
                  <span className="text-sm">{item.name}</span>
                </a>
              </Link>
            )
          })
        }  
     
      </Menu.Items> */}
      </Transition>
    </Menu>
        </li>
        <li>
          <Link href="/blog">
           
            <a className="flex flex-col text-white items-center text-[14px] gap-1">
            <span><ImParagraphLeft/></span>
               Blog
            </a>
          </Link>
        </li>
        <li className="relative">
           
        <div className="relative">
        <button
          type="button"
          onClick={openModal}
          className="text-white items-center text-[14px] flex flex-col gap-1"
        >
          <MdOutlineAccountCircle className="text-white text-lg"/>
          Login/Register
        </button>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
<Dialog
  as="div"
  className="fixed inset-0 z-10 top-12"
  onClose={closeModal}
>
  <div className="min-h-screen px-4 text-center">
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
    </Transition.Child>

    {/* This element is to trick the browser into centering the modal contents. */}
    <span
      className="inline-block h-screen "
      aria-hidden="true"
    >
      &#8203;
    </span>
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      <div className="inline-block w-full max-w-[380px] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-xl">
        <div className="flex justify-between items-center">
        <Dialog.Title
          as="h3"
          className="text-md font-medium leading-6 text-gray-900"
        >
          {isLogin? 'Login': 'Register'}
        </Dialog.Title>
          <button className="text-xl text-gray-400"
          onClick={closeModal}
          >
            <span className="text-red-600"><GrFormClose/></span>
          </button>
        </div>

        <div className="my-7 flex justify-center gap-8 items-center ">
            <div className="grid place-items-center w-[50px] h-[50px] rounded-full bg-black cursor-pointer hover:bg-black/80">
              <span className="text-white text-[30px]"><DiGithubAlt/></span>
            </div>
            <div className="grid place-items-center w-[50px] h-[50px] rounded-full bg-orange-600
            cursor-pointer hover:bg-opacity-80">
              <span className="text-white text-[20px]"><BsGoogle/></span>
            </div>
            <div className="grid place-items-center w-[50px] h-[50px] rounded-full bg-blue-600
            
            cursor-pointer hover:bg-opacity-80">
              <span className="text-white text-[20px]"><ImFacebook/></span>
            </div>
        </div>

         <div className="flex items-center justify-center">
           <div className="border border-gray-300 w-[34%]"></div>
            <span className="w-[80px] text-center">or</span>
            <div className="border border-gray-300 w-[34%]"></div>
            
         </div>
        

         {isLogin?
       <LoginForm ModalHandler={ModalHandler}/>:<SingUpForm ModalHandler={ModalHandler}/>
      }
      </div>
       
    </Transition.Child>

  </div>

</Dialog>
</Transition>




        </li>
         
    </ul>
  )
}

export default NavLink
