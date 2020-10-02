import { ROOM_FRAGMENT } from "../../../fragments";

export default {
    Query:{
        seeRoom:async(_, args, {request, isAuthenticated, prisma}) => {
            isAuthenticated(request);

            const {id} = args;
            const {user} = request;
            const canSee = await prisma.$exists.room({
                participants_some:{
                    id:user.id
                }
            });

            if(canSee){
                console.log("canSee");
                return prisma.room({id})
                
            }else{
                throw Error("You can't see this");
            }
        }
    }
}