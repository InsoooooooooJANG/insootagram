export default {
  Post: {
    isLiked: async (parent, _, { request, prisma }) => {
      const { user } = request;
      const { id } = parent;
      return prisma.$exists.like({
        AND: [
          {
            user: {
              id: user.id,
            },
          },
          {
            post: {
              id,
            },
          },
        ],
      });
    },
    likeCount: (parent, _, { prisma }) => {
      return prisma
        .likesConnection({
          where: {
            post: {
              id: parent.id,
            },
          },
        })
        .aggregate()
        .count();
    },
    files:({id}, _, {prisma})=>{
      prisma.post({id}).files()
    },
    comments:({id}, _, {prisma}) => {
      prisma.post({id}).comments()
    },
    user:({id}, _, {prisma}) =>{
      prisma.post({id}).user()
    },
    likes:({id}, _, {prisma}) =>{
      prisma.post({id}).likes()
    }
  },
};
