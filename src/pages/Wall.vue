<template>
    <div class="container">
	
		<!-- <post :data="posts[0]"></post> -->
	
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


