import { Posts } from "../../models/posts.js";
import CustomError from "../../middlewares/customError.js";
import { Op } from 'sequelize';
import { Users } from "../../models/users.js";


class PostService {
    async getPosts(query) {
        const { sort, filter, order, field, page , perPage , keyword } = query

        const pageOption = page || 1;
        const perPageOption = perPage || 10;

        const queryOptions = {
            order: [],
            where: {},
            limit: perPageOption,
            offset: (pageOption - 1) * perPageOption,
            include: {
                model: Users,
                as: 'user_post',
                attributes: ['id','name','role']
            }
        }

        if (sort && field && order) {
            queryOptions.order.push([field, order.toUpperCase()]);
          }

        if (keyword) {
            queryOptions.where[Op.or] = [
                { title: { [Op.like]: `%${keyword}%` } },
                { content: { [Op.like]: `%${keyword}%`} },
                ];
            }

        if (filter && field) {
            queryOptions.where[field] = {
              [Op.like]: `%${filter}%`
            };
          }


        const posts = await Posts.findAll(queryOptions)

        if(posts.length === 0){
            throw new CustomError("Nenhuma postagem encontrada", 404)
        }

        return posts

    }

    async getPostById(id){
        const post = await Posts.findByPk(id,{
            include: {
                model: Users,
                as: "user_post",
                attributes: ['id','name','role']
            }
        })

        if(!post){
            throw new CustomError("Postagem não encontrada", 404)
        }

        return post;
    }
}

export default PostService;