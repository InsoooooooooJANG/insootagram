export default{
    Query:{
        seeMyProfile:(_, args, {request, isAuthenticated, prisma}) => {
            const {user} = request;

            return prisma.user({id:user.id});
        }
    }
}