

export default{
    Query:{
        seeFullPost : async(_, args, {request, isAuthenticated, prisma}) => {
            const {id} =args;
            return await prisma.post({id});
            
        }
    }
}