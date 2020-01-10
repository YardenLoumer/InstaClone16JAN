<template>
    <div class="container">
        <div class="post">
            {{postId}}
            <div class="post__header">

                <div class="post__user">
                    <div class="user">
                        <a href="#" class="user__avatar">
                            <img :src="post.user.ava" alt="">
                        </a>
                        <a href="#" class="user__name">
                            {{post.user.name}} {{post.user.surname}}
                        </a>
                    </div>

                </div>

                <div class="post__links">
                </div>
            </div>

            <div class="post__img">
                <img :src="post.src" alt="Photo">
            </div>

            <div class="post__edit">
                <div class="post__edit-name">Описание:</div>
                <div class="post__edit-textarea-wrapper">
                    {{post.description}}
                </div>
            </div>

            <div class="post__edit">
                <div class="post__edit-name">Хэштеги:</div>
                <div class="post__edit-textarea-wrapper">
                    <template v-for="tag of post.tags">
                        <a href="#" v-bind:key="tag"> #{{ tag }} </a>

                    </template>
                </div>
            </div>

            <div class="post__buttons">
                <button class="btn btn--save">Сохранить</button>
                <button class="btn btn--cancel">Отмена</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    created () {
        const posts = require('./../fakedata.json').posts
        for (const post of posts){
            if(post.id === this.postId){
                return this.post = post
            }
        }
    },
    
    data () {
        return {
            posts: null
        }
    },
    computed: {
        postId(){
            return parseInt(this.$route.params.id)
        }
    }
}
</script>