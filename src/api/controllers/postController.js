import PostService from "../services/postService.js";
import CustomError from "../../middlewares/customError.js";

const postService = new PostService();

class PostController {
    static async getPosts(req, res){
        const query = req.query;

        try {
            const posts = await postService.getPosts(query);
            res.status(200).send(posts)
        } catch (err) {
            if(err instanceof CustomError){
                return res.status(err.statusCode).send({message:err.message})
            }
            res.status(500).send({message:err.message})
        }
    }
}

export default PostController;
