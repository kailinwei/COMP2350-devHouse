import { database } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";


export class MockAuthenticationService implements IAuthenticationService {
  readonly _db = database;

  public async getUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    const users = this._db.users;
    const userFind = users.find(element => element.email == email && element.password == password);
//    const passwordFind = users.find(element => element.password == password);

    // if(userFind){
    //   if(passwordFind){
    //     return userFind;
    //   }else{
    //     throw new Error ("Please Check your Password")
    //   }
    // }else{
    //   throw new Error ("Please Check your email")
    // }

    if(userFind){
      return userFind;
    }else{
      throw new Error("Please Check your Information");
    }
  }

  //try and catch????

  public async findUserByEmail(email: String): Promise<null | IUser> {
    const users = this._db.users;
    const userFind = users.find(element => element.email == email);
    if(users){
      return userFind;
    }
    throw new Error("Please Check your email");
  }

  public async createUser(user: IUser): Promise<IUser> {
    const users = this._db.users;
    const newUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    }
    users.push(newUser);
    return newUser;
  }
}
