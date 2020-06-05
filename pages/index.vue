<template>

    <div>
        
        <div class="container-fluid">
            <h1 class="mt-4">{{ title }}</h1>
        </div>
        
    </div>

</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
    data() {
        return {
            title: 'Welcome to Dashboard !',
        }
    },
    components: {
        Logo,
    }
}
</script>
