import React from 'react'

function Oauth() {
    const handleGoogleLogin = () => {
        
    }
  return (
    <button 
        type='button'
        onClick={handleGoogleLogin}
        className="w-full uppercase p-2 rounded-lg bg-red-400 text-white hover:opacity-90"
    >
        Login with Google
    </button>
  )
}

export default Oauth