export default{
    User:{
        fullName:(parent) => {
            return `${parent.firstName} ${parent.lastName}`;
        },
        isFollowing: async(parent, _, {request, prisma})=>{
            const {user} = request;
            const {id:parentId} = parent;

            try{
                return await prisma.$exists.user({AND:[{id:parentId}, {followers_some:{id:user.id}}]});
            }catch (error){
                return false;
            }
        },
        isSelf:(parent, _, {request,prisma}) => {
            const {user} =request;
            const {id:parentId} = parent;
            return user.id === parentId;
        },
        posts:({id}, _, prisma)=> prisma.user({id}).posts(),
        following:({id}, _, prisma)=> prisma.user({id}).following(),
        followers:({id}, _, prisma)=> prisma.user({id}).followers(),
        likes:({id}, _, prisma)=> prisma.user({id}).likes(),
        comments:({id}, _, prisma)=> prisma.user({id}).comments(),
        rooms:({id}, _, prisma)=> prisma.user({id}).rooms(),
    
    }
}