export default (post=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL_POST':
            return action.payload;
        case 'CREATE_POST':
            return [...post,action.payload];
        default:
            return post;
    }
}