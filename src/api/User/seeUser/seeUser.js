export default {
    Query:{
        seeUser: (_, args, {request, isAuthenticated, prisma}) => {
            
            const {id} = args;
            return prisma.user({id});
        }
    }
}