import { prisma } from "../../../../generated/prisma-client";
import {generateToken} from "../../../util"
export default{
    Mutation:{
        confirmSecret : async (_, args, {request}) =>{
            const {email, secret} = args;

            const user = await prisma.user({email});

            if(secret === user.loginSecret){
                //JWT
                const token = generateToken(user.id);
                return token;
            }else{
                throw Error('Wrong email/secret combination');
            }
        }
    }
}