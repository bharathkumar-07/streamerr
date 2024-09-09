import { Children } from "react"

export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl text-white text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium">{children}</button>
  )
}
