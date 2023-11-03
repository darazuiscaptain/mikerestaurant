import { Link } from "react-router-dom"

function PageNotFound() {
  return (
    <div className="flex flex-col gap-3 text-center h-[100vh]">
        <h1 className="text_gradient_h text-2xl">This page is under development!</h1>
        <Link to={"/"} className="text-blue-500">Go to Home</Link>
    </div>
  )
}

export default PageNotFound