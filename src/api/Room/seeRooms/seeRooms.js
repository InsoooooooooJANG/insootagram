import { ROOM_FRAGMENT, USER_FRAGMENT } from "../../../fragments";

export default{
    Query:{
        seeRooms:(_, args, {request, isAuthenticated, prisma}) => {
            isAuthenticated(request);

            const {user} = request;
            return prisma.rooms({
                where:{
                    participants_some:{
                        id: user.id
                    }
                }
            });
        }
    }
}