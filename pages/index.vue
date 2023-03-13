<template>
    <div>
        <the-masthead />
        <the-services />
        <the-portfolio />
        <the-about />
        <div>Đây là trang Home</div>
    </div>
</template>

<script>
import TheAbout from '../components/TheAbout.vue'
import TheMasthead from '../components/TheMasthead.vue'
import ThePortfolio from '../components/ThePortfolio .vue'
import TheServices from '../components/TheServices.vue'
export default {
    name: 'IndexPage',
    components: { 
        TheMasthead,
        TheServices,
        ThePortfolio,
        TheAbout 
    },
}
</script>

