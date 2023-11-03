// import { use } from 'passport';
// import GoogleStrategy from 'passport-google-oauth2';

import User from "../model/users.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

// use(new GoogleStrategy({
//   clientID: process.env.GOOGLE_CLIENT_ID,
//   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//   callbackURL: 'http://localhost:3000/auth/google/callback',
// }, async (accessToken, refreshToken, profile, done) => {
//   // Find the user in your database or create a new one.
//   const user = await User.findOne({ googleId: profile.id });
//   if (!user) {
//     user = await User.create({
//       googleId: profile.id,
//       name: profile.displayName,
//       email: profile.email,
//     });
//   }

//   // Return the user to Passport.
//   done(null, user);
// }));

export const login = async (req, res, next) => {
  const { username, password } = req.body

  const user = await User.findOne({username})
  if(!user) return res.status(409).json("Wrong Credential")

  const compPassword = bcrypt.compareSync(password, user.password)
  if(!compPassword) return res.status(409).json("Wrong Credential")

  const token = jwt.sign({ id: user._id }, "jwt_token", {expiresIn: '1h'})



  
  res.json(token)

  
}


export const register = async(req, res, next) => {
  const { username, email, password } = req.body
  if(username === "" || email === "" || password === ""){
    return res.json("fields required")
  }
  try{
    const user = await User.find({email})
    if(user.length > 0 ) return res.json("Email Already taken")
  
    const hashPassword = bcrypt.hashSync(password, 10)
  
    const savedUser = await User.create({
      username,
      email,
      password: hashPassword
    })
  
    res.json(savedUser)

  }catch(err){
    res.json(err)
  }


  
}
