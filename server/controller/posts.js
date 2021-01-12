import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

/* learn about status codes : https://www.restapitutorial.com/httpstatuscodes.html*/
export const getPosts= async (req,res)=>{
    try {
        const postMessages=await PostMessage.find();
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPosts=async (req,res)=>{
    const post=req.body;

    const newPost=new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}
export const updatePosts=async (req,res)=>{
    const {id:_id}=req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with taht id');
        const post=req.body;
        const updatedPost=await PostMessage.findByIdAndUpdate(_id,{...post,_id},{new:true});
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}

export const deletePosts=async (req,res)=>{
    const {id}=req.params;
    try {
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');
        const post=req.body;
        const deletedPost=await PostMessage.findByIdAndRemove(id);
        res.status(200).json('Post Delete Successfully!!');
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}