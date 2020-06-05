<template>

    <div>
        
        <div class="bg-light border-right" id="sidebar-wrapper">
            <div class="sidebar-heading">{{ title }}</div>
            <div class="list-group list-group-flush">
                <nuxt-link :to="{ name: 'index' }" class="list-group-item list-group-item-action bg-light">Dashboard</nuxt-link>
                <nuxt-link :to="{ name: 'about' }" class="list-group-item list-group-item-action bg-light">About</nuxt-link>
                <nuxt-link :to="{ name: 'inspire' }" class="list-group-item list-group-item-action bg-light">Inspire</nuxt-link>
                <nuxt-link :to="{ name: 'blogs' }" class="list-group-item list-group-item-action bg-light">Blog</nuxt-link>
                <nuxt-link :to="{ name: 'weather' }" class="list-group-item list-group-item-action bg-light">Weather</nuxt-link>
            </div>
        </div>
        
    </div>

</template>

<script>

export default {
    data() {
        return {
            title: 'Nuxt JS',
        }
    },
}

</script>

<style>

</style>
