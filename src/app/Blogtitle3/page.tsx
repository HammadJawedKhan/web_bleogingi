import Image from 'next/image';
import img from "../../../public/assests/istockphoto-1317323736-612x612.jpg"


export default function page(){
    return(
        <div className="flex gap-4 border-2 mt- w-[50%] h-72 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white  mt-8">
        <div className="border-2 w-96 h-64 bg-black rounded-xl shadow-lg relative">
          <Image 
            src={img} 
            alt="Blog Image"
            layout='fill' 
            objectFit="cover" 
            className="rounded-xl" 
          />
        </div>
        <div>
        <h1 className="text-lg font-bold mt-5">Blog Title 03</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
        </div>
      </div>
    )
}