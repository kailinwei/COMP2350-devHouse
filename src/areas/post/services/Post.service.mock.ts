import IPost from "../../../interfaces/post.interface";
import IPostService from "./IPostService";
import {database, posts, post} from "../../../model/fakeDB"

// ⭐️ Feel free to change this class in any way you like. It is simply an example...
export class MockPostService implements IPostService {
  addPost(post: IPost, username: string): void {
   
    let newPost = {
      id: post.id,
      userId: username,
      createdAt: new Date(),
      message: post.message,
      comments: 0,
      reposts: 0,
      likes: 0,
      commentList: [],
    };
    
    const users = database.users;
    const userFind = users.find((element) => element.id == post.id);
    userFind.posts.push(newPost);
      throw new Error("Method not implemented.");
  }

  getAllPosts(username: string): IPost[] {
    
    const users = database.users;
    // const post= users.find(
    //   async (element) => element.username == username){
    //     await 
    //   };
    throw new Error("Method not implemented.");
  }
  findById(id: string): IPost {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
  addCommentToPost(message: { id: string; createdAt: string; userId: string; message: string }, postId: string): void {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }

  sortPosts(posts: IPost[]): IPost[] {
    // 🚀 Implement this yourself.
    throw new Error("Method not implemented.");
  }
}
