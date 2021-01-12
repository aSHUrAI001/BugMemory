import express, { Router } from 'express';
import {getPosts,createPosts,updatePosts,deletePosts} from '../controller/posts.js';

const router=express.Router();

router.get('/',getPosts);
router.post('/',createPosts);
router.patch('/:id',updatePosts);
router.delete('/:id',deletePosts);

export default router;