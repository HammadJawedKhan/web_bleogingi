import Image from 'next/image';
import "@/app/globals.css"
import img from '../../public/assests/istockphoto-1317323736-612x612.jpg';
import Link from 'next/link';

export default function Home() {
  return (
<div>
<div className="flex flex-wrap  w-[100%]  justify-center  gap-4 ">
      <Link href={"/Blogtitle1"}>
      <div className="rotate-scale-up-diag-1 border-2 mt- w-72 h-96 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white mt-8 sm:w-80">
        <div className="border-2 w-64 h-40 bg-black rounded-xl shadow-lg relative">
          <Image 
            src={img} 
            alt="Blog Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-xl" 
          />
        </div>
        <h1 className="text-lg font-bold mt-5">Blog Title 01</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div></Link >
      <Link href={"/Blogtitle2"}>
      <div className="border-2 mt- w-72 h-96 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white  mt-8">
        <div className="border-2 w-64 h-40 bg-black rounded-xl shadow-lg relative">
          <Image 
            src={img} 
            alt="Blog Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-xl" 
          />
        </div>
        <h1 className="text-lg font-bold mt-5">Blog Title 02</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div></Link>
      <Link href={"/Blogtitle3"}>
      <div className="border-2 mt- w-72 h-96 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white  mt-8">
        <div className="border-2 w-64 h-40 bg-black rounded-xl shadow-lg relative">
          <Image 
            src={img} 
            alt="Blog Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-xl" 
          />
        </div>
        <h1 className="text-lg font-bold mt-5">Blog Title 03</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div></Link>
      
      <Link href={"/Blogtitle4"}>
      <div className="border-2 mt- w-72 h-96 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white mt-8 ">
        <div className="border-2 w-64 h-40 bg-black rounded-xl shadow-lg relative">
          <Image 
            src={img} 
            alt="Blog Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-xl" 
          />
        </div>
        <h1 className="text-lg font-bold mt-5">Blog Title 04</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div></Link>
      <Link href={"/blogtitle5"}>
      <div className="border-2 mt- w-72 h-96 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white mt-8">
        <div className="border-2 w-64 h-40 bg-black rounded-xl shadow-lg relative">
          <Image 
            src={img} 
            alt="Blog Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-xl" 
          />
        </div>
        <h1 className="text-lg font-bold mt-5">Blog Title 05</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div></Link>
      <Link href={"/Blogtitle6"}>
      <div className="border-2 mt- w-72 h-96 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white mt-8">
        <div className="border-2 w-64 h-40 bg-black rounded-xl shadow-lg relative">
          <Image 
            src={img} 
            alt="Blog Image" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-xl" 
          />
        </div>
        <h1 className="text-lg font-bold mt-5">Blog Title 06</h1>
        <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus exercitationem magni, </p>
      </div></Link>
    </div>

    </div>
  );
}





