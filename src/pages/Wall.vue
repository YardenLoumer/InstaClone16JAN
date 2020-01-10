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
import fakedata from './../fakedata.json'

export default {
	name: 'app',
	components: {
		Post
	},

	data() {
		return {
			posts: fakedata.posts
		}
	}
}
</script>


