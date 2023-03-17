<template>
    <div>
        <the-masthead />
        <the-services />
        <the-portfolio />
        <the-about />
        <the-team />
        <the-clients />
        <the-contact />
    </div>
</template>

<script>
import TheAbout from '../components/TheAbout.vue'
import TheClients from '../components/TheClients.vue'
import TheContact from '../components/TheContact.vue'
import TheMasthead from '../components/TheMasthead.vue'
import ThePortfolio from '../components/ThePortfolio .vue'
import TheServices from '../components/TheServices.vue'
import TheTeam from '../components/TheTeam.vue'


export default {
    name: 'IndexPage',
    components: { 
        TheMasthead,
        TheServices,
        ThePortfolio,
        TheAbout,
        TheTeam,
        TheClients,
        TheContact,
    },
}
</script>

