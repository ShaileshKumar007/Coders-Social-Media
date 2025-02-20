import { FETCH_ALL, UPDATE, DELETE,  CREATE } from '../constants/actionTypes';
import * as api from '../api';

// Actions creators
export const getPosts = () => async (dispatch) => {       // using thunk middleware

    try {
        // const response = await api.fetchPosts();
        const { data } = await api.fetchPosts();

        dispatch({type: FETCH_ALL, payload: data});

    } catch (error) {
        console.log(error.message);
    }

    // const action = {
    //     type:'FETCH_ALL',
    //     payload: []
    // }

    // dispatch(action);
}

export const createPost = (post) => async (dispatch) => {
    try{
        const {data} = await api.createPost(post);

        dispatch({type: CREATE, payload: data})

    }catch(error){
        console.log(error.message);

    }

}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({type: UPDATE, payload: data});

    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({type: DELETE, payload: id});
    } catch (error) {
        console.log(error.message);
    }
}


export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({type: UPDATE, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}