import { prisma } from "../../../../generated/prisma-client";

export default {
	Mutation: {
		createAccount: async (_, args) => {
			const { username, email, firstName="", lastName="", bio="" } = args;
			const username_exists = await prisma.$exists.user({username});
			if(username_exists){
				throw Error("This username is alraedy exists");
				return false;
			}
			const email_exists = await prisma.$exists.user({email});
			if(email_exists){
				throw Error("This email is already exists. Try other email");
				return false;
			}
			const user = await prisma.createUser(
				{
					username, 
					email,
					firstName,
					lastName,
					bio
				}
			);
			return true;
		}
	}
};