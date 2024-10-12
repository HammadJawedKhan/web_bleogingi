import Image from 'next/image';
import "@/app/globals.css"
import img from "../../../public/assests/istockphoto-1317323736-612x612.jpg"


export default function page(){
    return(
        <div className="flex gap-4 border-2 mt- w-[50%] h-72 bg-white rounded-xl shadow-lg p-3 hover:bg-blue-400 duration-100text-white  mt-8">
        <div className="rotate-scale-up-diag-1 border-2 w-96 h-64 bg-black rounded-xl shadow-lg mt-2 relative">
          <Image 
            src={img} 
            alt="Blog Image"
            layout='fill' 
            objectFit="cover" 
            className="rounded-xl" 
          />
        </div>
        <div className='w-96'>
        <h1 className="text-lg font-bold mt-3">Blog Title 01</h1>
        <p className="mt-2">Hello! My name is Muhammad Hammad Khan. I'm currently enrolled in an AI and Web 3.0 course under the Governor's initiative. I'm passionate about technology and exploring how artificial intelligence can be integrated into web development. Currently, I'm working with Next.js, which allows me to create dynamic and efficient web applications. I’m excited to learn more and contribute to innovative projects in the tech space!</p>
        </div>
      </div>
    )
}