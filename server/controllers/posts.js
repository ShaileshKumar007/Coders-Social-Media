import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';


export const getPosts = async (req, res)=>{
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message:error.message });
    }

}


export const createPost = async (req, res)=>{
    const post = req.body;

    const newPostMessage = new PostMessage({...post, creator : req.userId, createdAt: new Date().toISOString()});

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({message:error.message });
    }
}


export const updatePost = async (req, res) => {
    const { id: _id} = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatePost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });

    res.json(updatePost);
}


export const deletePost = async (req, res) => {
    const {id: _id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(_id);

    res.json({message: "Post Deleted Successfully"});
}


export const likePost = async (req, res) => {
    const {id} = req.params;
    
    if(!req.userId) return res.json({message: "Unauthenticated"});

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex((id) => id === String(req.userId));

    if(index===-1){
        // like the post
        post.likes.push(req.userId);
    }
    else{
        // dislike the post
        post.likes = post.likes.filter((id) => id!==String(req.userId)); 
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, { new: true });

    res.json(updatedPost);
}