<template>
    <div class="container">
		<div class="post">

			<div class="post__header">

				<div class="post__user">
					<div class="user">
						<a href="#" class="user__avatar">
							<img src="img/avatars/01.png" alt="">
						</a>
                        <div>
                            User Info: 
                        </div>
						<a href="#" class="user__name">
                               <input v-model="newName" placeholder="Enter a name">
                               <input v-model="newSurname" placeholder="Enter a name">
						</a>
					</div>

				</div>

				<div class="post__links">
				</div>
			</div>

			<div class="post__img">
				<img src="img/posts/man-in-forest.jpg" alt="Photo">
			</div>

			<div class="post__edit">
				<div class="post__edit-name">Описание:</div>
				<div class="post__edit-textarea-wrapper">
					 <input v-model="newDescription" placeholder="Enter a description">
				</div>
			</div>

			<div class="post__edit">
				<div class="post__edit-name">Хэштеги:</div>
				<div class="post__edit-textarea-wrapper">
				    <input v-model="newTags" placeholder="Enter tags">
				</div>
			</div>

			<div class="post__buttons">

				<!-- <button @click="addPost" class="btn btn--save">Add Post</button> -->
				
            <router-link :to="`/wall`" >
				<button @click="addPost" class="btn btn--save">Add Post</button>
			</router-link>


			</div>
		</div>

	</div>
</template>

<script>
export default {
    computed: {
        postId(){
            return parseInt(this.$route.params.id)
        }
    },

    methods: {
     async addPost() {
        
     let newId = await this.$store.dispatch('getNextId')
        
      const newPost = {
          id: newId,
          description: this.newDescription,
          tags: this.newTags,
          src: "/img/posts/man-in-forest.jpg",
          user: {
              name: this.newName,
              surname: this.newSurname,
              ava: "/img/avatars/01.png"
          }
      }
     
      this.$store.dispatch('addPost', newPost)
    }

  }
}
</script>