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
            if(!localStorage.getItem('__data__')){
                const fakedata = require('./fakedata.json')
                localStorage.setItem('__data__', JSON.stringify(fakedata.posts))
            }  
                const posts = JSON.parse(localStorage.getItem('__data__'))
                commit('setPosts', posts)
        },

        async updatePost({state, dispatch}, id, data){
            const post = await dispatch('getPostById', id)
            post.description = data
            localStorage.setItem('__data__', JSON.stringify(state.posts))
            console.log({data})
            console.log(localStorage)
            console.log(state.posts)
          
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