export default (post=[],action)=>{
    switch(action.type){
        case 'Fetc_All_Post':
            return action.payload;
        case 'Create_Post':
            return post;
        default:
            return post;
    }
}