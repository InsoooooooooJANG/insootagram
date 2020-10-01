import {prisma} from "../../../../generated/prisma-client";
export default{
    Query:{
        searchLocation : async(_, args) => prisma.posts({
          where:{
              OR:{location_contains:args.term}
          }  
        })
    }
}