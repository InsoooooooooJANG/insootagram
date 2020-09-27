import {prisma} from "../../../../generated/prisma-client"

export default {
    Query:{
        allUser:() =>{
            return prisma.users();
        }
    }
}