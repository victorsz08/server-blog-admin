import { Router } from "express";
import PostController from "../controllers/postController.js";

const router = Router()

router
    .get('/posts', PostController.getPosts)

export default router;