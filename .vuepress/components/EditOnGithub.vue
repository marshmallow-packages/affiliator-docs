<template>
	<div v-if="edit_url" class="edit-on-github page-edit edit-link">
		<a :href="githubEditUrl()" target="_blank" rel="noopener noreferrer">
			Help us improve this page! 🥰
		</a>
		<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" class="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path><polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg>
	</div>
</template>

<script>
export default {
  	props: [
  		'edit_url',
  		'repo_name',
  	],
  	methods: {
  		githubEditUrl() {
  			return 'https://github.com/marshmallow-docs/' + this.repo_name + '/blob/master/' + this.edit_url;
  		}
  	}
}
</script>

<style>
footer.page-edit {
	display: none
}
.edit-on-github {
    padding: 1.5rem 0;
}
.edit-on-github a {
	color: #4e6e8e;
    margin-right: 0.25rem;
}
.theme-default-content:not(.custom) {
	padding-bottom: 0;
}
</style>
