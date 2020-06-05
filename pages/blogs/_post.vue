<template>
  
    <div>

        <div class="container-fluid">
            <h1 class="mt-4">{{ slug.post }}</h1>
        </div>

    </div>

</template>

<script>

export default {
    head() {
        return {
            title: 'Blog Post',
            meta: [
                { charset: 'utf-8' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My Amazing Blog Post Page'
                }
            ],
        }
    },
    data() {
        return {
            slug: this.$route.params
        }
    },
    validate({ params }) {
        // return true
        return /^\d+$/.test(params.post)
    },
    created() {
        // console.log(this.$route.params)
    }
}

</script>

<style>

</style>
