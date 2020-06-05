<template>

    <div>
        
        <div class="d-flex" id="wrapper">

            <!-- Sidebar -->
            <Sidebar></Sidebar>
            <!-- /#sidebar-wrapper -->

            <!-- Page Content -->
            <div id="page-content-wrapper">

                <!-- Navbar -->
                <Navbar></Navbar>
                <!-- /#navbar-wrapper -->

                <nuxt></nuxt>

            </div>
            <!-- /#page-content-wrapper -->

        </div>
        <!-- /#wrapper -->

    </div>
  
</template>

<script>
import Navbar from '~/components/Navbar'
import Sidebar from '~/components/Sidebar'

export default {
    head() {
        return {
            title: 'Dashboard',
        }
    },
    components: {
        Navbar,
        Sidebar,
    },
}

</script>

<style>

</style>
