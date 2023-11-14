import { useNavigate } from "react-router-dom"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from "../firebase"
import axios from "axios"
import { signInFailure, signInStart, signInSuccess } from "../redux/authSlice"
import { useDispatch } from "react-redux"
import { BASE_URL } from "../baseurl"

function Oauth({loading}) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoogleLogin = async () => {
    dispatch(signInStart())
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const data = await signInWithPopup(auth, provider)

      const result = await axios.post(`${BASE_URL}/auth/google`, {
        name: data.user.displayName,
        email: data.user.email,
        photo: data.user.photoURL
      })

      if (result){
        dispatch(signInSuccess(result.data))
        navigate("/")
      } 
    } catch (error) {
      dispatch(signInFailure(error))      
    }
  }
  return (
    <button
      type='button'
      onClick={handleGoogleLogin}
      className="w-full uppercase p-[5px] border-[1px] bg-red-300 text-white hover:opacity-90"
    >
      { loading ? "Loading" : "Continue with Google" }
    </button>
  )
}

export default Oauth