import { Link } from "react-router-dom"

export const Footer = () => {
  return (
   <footer className="bg-white  shadow m-1 dark:bg-gray-800 mx-auto my-auto">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023<Link href="/" className="hover:underline">streamerr</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
       
            <Link target='_blank' className="hover:underline me-4 md:me-6">About</Link>
    
        
            <Link target='_blank' className="hover:underline me-4 md:me-6">Privacy Policy</Link>
 
       
            <Link target='_blank' className="hover:underline me-4 md:me-6">Licensing</Link>
      
            <Link target='_blank' className="hover:underline">Contact</Link>
        
    </ul>
    </div>
</footer>
  )
}
