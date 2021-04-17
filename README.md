# Applying Solid Principle #
 1) Principle being followed: 
    Open-closed principle states that “objects or entities should be open for extension but closed for modification”. 
	in our code, we tried to modify a class using “implement”. An example is from post.controller.ts where the PostController implements Icontroller. 
  ![open-closed principle](https://github.com/kailinwei/COMP2350-devHouse/blob/master/open-closed.png?raw=true "SOLID")
 Rather than dynamically change the class of IController, implements allows ‘PostContoller’ inherit all the methods and properties from ‘IController’ , so we can modify the unique property in the new class. 

2) Principla being followed:
   Dependency Inversion Principle
It states “It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.”
In our code, the file authentication.service.mockup.ts, there is a MockAuthenticationService class which is a high level module and follows the open-close principle.

Also, in Authentication.controller.ts file, we have a “registration” method in AuthenticationController class. It is a low level module. In this class, we use a constructor function to provide a service. We wanted to make it dependent on abstractions, we use interface IAuthenticationService instead of using MockAuthenticationService.

![dependencyinversion principle](https://github.com/kailinwei/COMP2350-devHouse/blob/master/SOLID2.png)
