import User from '../models/UserModel.shema';
import { Request } from 'express';
import passport from 'passport';
import {Strategy as localStrategy} from 'passport-local';

const findUserById = async (id: string) => {
  return await User.findById(id);
};


passport.use(
  new localStrategy({
    usernameField:"email",
    passwordField:"password",
  },
  async(email, password,done) => {
    //if user exit or not

   const user=await User.findOne({email})
    // if the credentials id valid or not

    //@ts-ignore
   if (user&& (await user.matchPassword(password)))done(null,user)
   else done(null,false)
    
  }
  
  )
)


passport.serializeUser((user:any, done)=>{
  done(null,user._id)
})

passport.deserializeUser(async (req: Request, id: string, done: any) => {
  try {
    const user = await findUserById(id)

    done(null, user);
  } catch (error) {
    // something went wrong :(
    done(error);
  }
});

export default passport;

