<template>
    <div class="container" v-if="post"> {{post}}
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
                <button @click="updatePost" class="btn btn--save">Сохранить</button>
                <button class="btn btn--cancel">Отмена</button>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    async created () {
        this.post = await this.$store.dispatch('getPostById', this.postId)
    },

    
    data () {
        return {
            post: null
        }
    },
    computed: {
        postId(){
            return parseInt(this.$route.params.id)
        }
    },

    methods: {
    updatePost () {
      const word = "nana banana"
      this.$store.dispatch('updatePost', this.postId, word)
        console.log('post updated',word )
    }
  }
}
</script>