# Applying Solid Principle #
 1) Principle being followed: 
    Open-closed principle states that “objects or entities should be open for extension but closed for modification”. 
	in our code, we tried to modify a class using “implement”. An example is from post.controller.ts where the PostController implements Icontroller. 
  > class AuthenticationController implements IController {
  > public path = "/auth";
  > public router = express.Router();

  > constructor(service: IAuthenticationService) {
    this.initializeRoutes();
  }
 Rather than dynamically change the class of IController, implements allows ‘PostContoller’ inherit all the methods and properties from ‘IController’ , so we can modify the unique property in the new class. 
