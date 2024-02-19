import { PropsWithChildren } from "react"

const ErrorComponent = ({children} : PropsWithChildren) => {
    return (
        <div className="text-center my-4 bg-red-600 font-bold p-3 uppercase text-white">
            {children}
        </div>
    )
}
export default ErrorComponent