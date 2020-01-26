<template>
    <div class="container">
	
		<!-- <post :data="posts[0]"></post> -->
		
			<router-link :to="`/add`" >
				<button> Add new post</button>
			</router-link>
			
		<post v-for="post of posts" 
		:data="post" 
		v-bind:key="post.id"></post>

    </div>
</template>

<script>
import Post from '@/components/Post'

export default {
	components: {
		Post
	},

	created() {
		this.$store.dispatch('downloadPosts')
	},

	computed: {
		posts() {
			return this.$store.state.posts
		}
	}
}
</script>


