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
            title: 'Inspire',
            meta: [
                { charset: 'utf-8' },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'My Amazing Inspire Page'
                }
            ]
        }
    },
    // it works before loading the component
    asyncData() {
        return {
            title: 'Inspire',
        }
    }
}

</script>

<style>

</style>
