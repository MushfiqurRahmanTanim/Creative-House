import Head from "next/head"
import Image from "next/image"
import  Fade  from "react-reveal"






const PageNotFound = () => {
  return  (
    <div className="w-full h-screen">
       <Head>
        <title>Page Not Found</title>
       </Head>
       <Fade top>
        <div className="flex justify-center items-center h-full">
            <h2 className="text-9xl">404</h2>
          </div>
          </Fade>
    </div>
  )
}

export default PageNotFound
