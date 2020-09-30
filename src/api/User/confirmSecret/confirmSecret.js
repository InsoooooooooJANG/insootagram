export default{
    Mutation:{
        confirmSecret : (_, args) =>{
            const {email, secret} = args;

            const user = prisma.user({email});

            if(secret === user.loginSecret){
                //JWT
                return "TOKEN";
            }else{
                throw Error('Wrong email/secret combination');
            }
        }
    }
}