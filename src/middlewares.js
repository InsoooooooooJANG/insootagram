export const isAuthenticated= (request)=>{
    if(!request.user){
        throw Error('You need to login to perfom this action');
    }

    return;
}