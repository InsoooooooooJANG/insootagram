import { prisma } from "../../../../generated/prisma-client";
import { generatorSecret } from "../../../util";

export default{
	Mutation:{
		requestSecret:async (_, args) =>{
			const {email} = args;
			const secret = generatorSecret();
			console.log(secret);
			try{
				await prisma.updateUser({data:{loginSecret}, where: {email}});
				return true;
			}catch{
				return false;
			}
		}
	}
};