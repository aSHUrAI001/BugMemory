import * as api from '../api';

export const getPosts=()=>async (dispatch)=>{
    try {
        const {data}=await api.fetchPosts();
        dispatch({type:'Fetch_All_Post',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}