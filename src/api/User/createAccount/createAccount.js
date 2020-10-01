
export default {
	Mutation: {
		createAccount: async (_, args, {prisma, request}) => {
			const { username, email, firstName="", lastName="", bio="" } = args;
			const user = await prisma.createUser(
				{
					username, 
					email,
					firstName,
					lastName,
					bio
				}
			);
			return user;
		}
	}
};