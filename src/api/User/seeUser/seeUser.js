export default {
    Query:{
        seeUser: async(_, args, {request, isAuthenticated, prisma}) => {
            
            const {id} = args;
            const user = await prisma.user({id});
            const posts = await prisma.user({id}).posts();
            return {user, posts};
        }
    }
}