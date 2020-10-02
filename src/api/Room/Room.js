export default {
    Room: {
        participants:({id}, _, {prisma}) => prisma.room({id}).participants(),
        messages:({id}, _, {prisma}) => prisma.room({id}).messages()
    }
  };
  