
export default {
    Mutation:{
        editUser: async(_, args, {request, isAuthenticated, prisma}) => {
            isAuthenticated(request);
            const {user} = request;
            const {username, email, firstName, lastName, bio, avatar } = args;

            return prisma.updateUser({where:{id:user.id}, data:{
                username, email, firstName, lastName, bio, avatar
            }})
        }
    }
}