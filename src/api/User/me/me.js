
export default{
    Query:{
        me: async(_, args, {request, isAuthenticated, prisma}) => {
            isAuthenticated(request);
            const {user} = request;

            // const userProfile = await prisma.user({id:user.id});
            // const posts = await prisma.user({id:user.id}).posts();

            // return {
            //     user:userProfile,
            //     posts
            // };

            return await prisma.user({id:user.id});
        }
    }
}