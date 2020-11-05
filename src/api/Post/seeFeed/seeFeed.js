export default{
    Query:{
        seeFeed:async(_, args, {request, isAuthenticated, prisma}) => {
            isAuthenticated(request)
            const {user} = request;

            const following = await prisma.user({id:user.id}).following();

            return  prisma.posts({
                where:{
                    user:{
                        id_in : [...following.map(user=> user.id), user.id]
                    }
            }});
        }
    }
}