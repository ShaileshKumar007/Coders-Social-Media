import * as api from '../api';

// Actions creators
export const getPosts = () => async (dispatch) => {       // using thunk middleware

    try {
        // const response = await api.fetchPosts();
        const { data } = await api.fetchPosts();

        dispatch({type:'FETCH_ALL', payload:data});

    } catch (error) {
        console.log(error.message);
    }

    // const action = {
    //     type:'FETCH_ALL',
    //     payload: []
    // }

    // dispatch(action);
}