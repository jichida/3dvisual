import { createReducer } from 'redux-act';
import {
    set_showmodel,
    set_device,
} from '../actions';

const initial = {
    data:{
        showmodel: {},
        device: "",
    },
};

const data = createReducer({
    [set_showmodel]: (state, payload) => {
        return { ...state, showmodel: payload};
    },
    [set_device]: (state, payload) => {
        return { ...state, device: payload};
    },
}, initial.data);

export default data;
