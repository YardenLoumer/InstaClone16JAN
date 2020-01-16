<template>
    <div class="container" > {{post}}
        <div class="post">
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
    props: ['post'],
    async created () {
        this.post = await this.$store.dispatch('getPostById', this.postId)
        console.log(this.post, 'i am the post in post editor')
        console.log(this.post.user.name)
    },
    // async created () {
    //     // const posts = this.$store.state.posts
    //     this.post = await this.$store.dispatch('getPostById', this.postId)
    //      console.log(this.post, 'i am the post in post editor')
    //     // for (const post of posts){
    //     //     if(post.id === this.postId){
    //     //         return this.post = post
    //     //     }
    //     // }

    // },
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