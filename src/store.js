import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        posts: []
    },

    mutations: {
        setPosts(state, payload){
            state.posts = payload
        }
    },
    actions: {
        downloadPosts ({ commit }) {
            const fakedata = require('./fakedata.json')
            commit('setPosts', fakedata.posts)
        },

        async getPostById ({state, dispatch}, id){
            console.log(state.posts.length, 'length')
            if(!state.posts.length){
                await dispatch('downloadPosts')
            }
            for(const post of state.posts){
                if(post.id === id){
                    console.log(post, 'i am the post')
                    return post
                }
            }
        }
    }
})