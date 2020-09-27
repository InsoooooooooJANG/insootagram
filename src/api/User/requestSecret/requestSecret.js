import { prisma } from "../../../../generated/prisma-client";
import { generatorSecret } from "../../../util";

export default{
	Mutation:{
		requestSecret:async (_, args) =>{
			const {email} = args;
			const loginSecret = generatorSecret();
			console.log(loginSecret);
			try{
				await prisma.updateUser({data:{loginSecret}, where: {email}});
				return true;
			}catch(err){
				console.log(err);
				return false;
			}
		}
	}
};