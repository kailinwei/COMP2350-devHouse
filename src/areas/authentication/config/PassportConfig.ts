//----------------------------------------
// TODO:                                 |
//----------------------------------------
// 🚀 Configure Passport.js Local Authentication in this file
//    Ensure code is fully typed wherever possible (unless inference can be made)

import { MockAuthenticationService } from "../services/Authentication.service.mock";
import * as passportLocal from 'passport-local';
import { Strategy } from "passport";
const LocalStrategy = passportLocal.Strategy;

export default class PassportConfig {
    private _user;
    private _strategy;
    private _service;

    constructor(service:MockAuthenticationService){
        this._service = service;
        this._strategy = new LocalStrategy(

        {
            usernameField: "email",
            passwordField: "password",
        },
        async (email,password,done) =>{
            this._user = await this._service.getUserByEmailAndPassword(email,password)

            return this._user
            ? done(null, this._user)
            : done (null, false, {
                message : "Your login details are not valid. Please try again."
            })
        }
        )
    }
    //왜 안됨????????????????????????

    public get user () {
        return this._user;
    }

    public get service(): MockAuthenticationService {
        return this._service;
    }

    public get strategy(): passportLocal.Strategy {
        return this._strategy;
    }

}
