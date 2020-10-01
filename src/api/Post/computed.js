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
  },
};
