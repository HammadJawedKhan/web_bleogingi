import Image from 'next/image';
import "@/app/globals.css"
import img from "../../../public/assests/istockphoto-1317323736-612x612.jpg"


export default function page(){
    return(
      <div className='flex justify-center'>
        <div className="block rotate-scale-up-diag-1 border-2  w-96 h-96 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white mt-8 sm:w-[600px]  sm:flex sm:h-72 md:w-[700px]">
        <div className="rotate-scale-up ml-4 border-2 w-80 h-40 bg-black rounded-xl shadow-lg relative sm:w-[500px] sm:ml-0 md:w-72 md:mt-8">
          <Image 
            src={img} 
            alt="Blog Image" 
            objectFit="cover" 
            className="rounded-xl " 
          />
        </div>
        <div className=' sm:block sm:w-64 ml-10 '>
        <h1 className="text-lg font-bold mt-20 sm:mt-8 md:mt-12">Blog Title 01</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
        </div>
      </div>
      </div>
    )
}