
export default {
  Mutation: {
    sendMessage: async (_, args, { request, isAuthenticated, prisma }) => {
      isAuthenticated(request);
      const { user } = request;
      const { roomId, message, toId } = args;

      let room;

      if (roomId === undefined) {
        if (user.id !== toId){
          room = await prisma.createRoom({
            participants: {
              connect: [
                {
                  id: toId
                },
                {
                  id: user.id
                }
              ]
            }
          })
        }
      } else {
          room = await prisma.room({id:roomId})
      }

      if(!room){
        throw Error("There is no room");
      }

      const getTo = room.participants.filter(participant => participant.id !== user.id)[0];
      const createdMessage = await prisma.createMessage({
          text: message,
          from:{
              connect:{
                id:user.id
              }
          },
          to:{
              connect:{
                  id: roomId? getTo.id:toId
              }
          },
          room:{
              connect:{
                id:room.id
              }
          }
      })

      return createdMessage;

    }
  }
};