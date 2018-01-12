import { createReducer } from 'redux-act';
import {
    set_showmodel,
    set_device,
    set_formdata
} from '../actions';

const initial = {
    data:{
        showmodel: {},
        device: "",
        formdata : {}
    },
};

const data = createReducer({
    [set_showmodel]: (state, payload) => {
        return { ...state, showmodel: payload};
    },
    [set_device]: (state, payload) => {
        return { ...state, device: payload};
    },
    [set_formdata]: (state, payload) => {
        return { ...state, formdata : payload};
    }
}, initial.data);

export default data;
