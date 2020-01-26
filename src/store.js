import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        posts: [],
        postId: 3
    },

    mutations: {
        setPosts(state, payload){
            state.posts = payload
        },
        setId(state){
            state.postId++
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

        async addPost({commit}, data){
               const posts = JSON.parse(localStorage.getItem('__data__'))
               posts.push(data)
               localStorage.setItem('__data__', JSON.stringify(posts))
               commit('setPosts', posts)
        },

        async updatePost({state, dispatch}, data){
        
            const post = await dispatch('getPostById', data.id)
            post.description = data.description
            post.tags = data.tags
            post.src = data.src
            localStorage.setItem('__data__', JSON.stringify(state.posts))
            await dispatch('downloadPosts')
        },

        async getPostById ({state, dispatch}, id){
            
            if(!state.posts.length){
                await dispatch('downloadPosts')
            }
            for(const post of state.posts){
                if(post.id === id){
                    return post
                }
            }
        },

         getNextId ({state, commit}) {
            const id = state.postId
            commit('setId')
            return id
        }
    }
})