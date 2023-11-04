import { useNavigate } from "react-router-dom"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from "../firebase"
import axios from "axios"
import { signInFailure, signInStart, signInSuccess } from "../redux/authSlice"
import { useDispatch } from "react-redux"

function Oauth() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleGoogleLogin = async () => {
    dispatch(signInStart())
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const data = await signInWithPopup(auth, provider)

      const result = await axios.post("http://localhost:5000/api/v1/auth/google", {
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
      className="w-full uppercase p-2 rounded-lg bg-red-400 text-white hover:opacity-90"
    >
      Continue with Google
    </button>
  )
}

export default Oauth