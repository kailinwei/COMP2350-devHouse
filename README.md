# Applying Solid Principle #
 1) Principle being followed: 
    Open-closed principle states that “objects or entities should be open for extension but closed for modification”. 
	in our code, we tried to modify a class using “implement”. An example is from post.controller.ts where the PostController implements Icontroller. 
  ![open-closed principle](https://github.com/kailinwei/COMP2350-devHouse/blob/master/open-closed.png?raw=true "SOLID")
 Rather than dynamically change the class of IController, implements allows ‘PostContoller’ inherit all the methods and properties from ‘IController’ , so we can modify the unique property in the new class. 
