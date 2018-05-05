/**
 * Created by kennyhu on 2018/4.
 */
import {SHOW_MSG,HIDE_MSG} from '../types'

const state = {
    message:{
        type:'',
        content:'',
        title:''
    }
};

const mutations = {
    [SHOW_MSG](state,action){

        state.message = {...action}
    },
    [HIDE_MSG](state,action){
        
        state.message = {
            type:'',
            content:'',
            title:''
        }
    }
};

export default {
    state,mutations
}