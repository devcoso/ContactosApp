import { PropsWithChildren } from "react"

const Error = ({children} : PropsWithChildren) => {
    return (
        <div className="text-center my-4 bg-red-600 font-bold p-3 uppercase text-white">
            {children}
        </div>
    )
}
export default Error