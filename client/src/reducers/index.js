import { combineReducers } from "redux";

import posts from './posts'
import auth from './auth'

export const reducers = combineReducers({  posts, auth });     // posts:posts but bcz key and value is same