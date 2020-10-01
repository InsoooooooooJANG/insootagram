import { prisma } from "../../../../generated/prisma-client";
import {isAuthenticated} from "../../../middlewares";

export default{
    Mutation:{
        toggleLike:async(_, args, {request})=>{
            try{
                isAuthenticated(request);
                const {postId} = args;
                const {user} = request;
                const filterOptions = {
                    AND: [
                        {
                            user:
                            {
                                id:user.id
                            }
                        },
                        {
                            post:{
                                id:postId
                            }
                        }
                    ]
                };

                const existingLike = await prisma.$exists.like(filterOptions);
                if(existingLike){
                    await prisma.deleteManyLikes(filterOptions);
                } else{
                    await prisma.createLike(
                        {
                            user:
                            {
                                connect:{
                                    id:user.id
                                }
                            },
                            post:
                            {
                                connect:{
                                    id:postId
                                }
                            }
                        }
                    );
                }

                return true;
            }catch(error){
                console.log(error);
                return false;
            }
        }
    }
}