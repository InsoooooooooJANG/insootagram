import { prisma } from "../../../../generated/prisma-client";
import { generatorSecret, sendSecretMail } from "../../../util";

export default{
	Mutation:{
		requestSecret:async (_, args, {request}) =>{
			console.log(request);
			const {email} = args;
			const loginSecret = generatorSecret();
			console.log(loginSecret);
			try{
				throw "test";
				await sendSecretMail(email, loginSecret);
				await prisma.updateUser({data:{loginSecret}, where: {email}});
				return true;
			}catch(err){
				console.log(err);
				return false;
			}
		}
	}
};