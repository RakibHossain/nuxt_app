<template>
  
    <div>

        <div class="container-fluid">
            <h1 class="mt-4">This is {{ title }} page</h1>
        </div>

    </div>

</template>

<script>

export default {
    head() {
        return {
            title: 'Blog',
            meta: [
                { charset: 'utf-8' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My Amazing Blog Page'
                }
            ],
        }
    },
    // it works before loading the component
    asyncData() {
        return {
            title: 'Blog',
        }
    },
    middleware: 'blog',
}

</script>

<style>

</style>
