import { MockAuthenticationService } from "../areas/authentication/services";
import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";
import IUser from "../interfaces/user.interface";

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  // Use PassportConfig class here

const localLogin = new PassportConfig(new MockAuthenticationService);

passport.serializeUser((user:IUser, done) => {
  done(null, user.email);
});

passport.deserializeUser(async (email:string, done) => {
  let user = await localLogin.service.findUserByEmail(email);
  if (user) {
      done(null, user);
  } else {
      done(new Error('user ID is invalid'));
  }
});

passport.use(localLogin.strategy);

};