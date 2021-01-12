import {FETCH_ALL,CREATE_POST,UPDATE_POST,DELETE_POST} from '../constrants/actionTypes'

export default (post=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE_POST:
            return [...post,action.payload];
        case UPDATE_POST:
            return post.map((x)=>x._id===action.payload._id?action.payload:x);
        case DELETE_POST:
            return post.filter((x)=>x._id!==action.payload);
        default:
            return post;
    }
}