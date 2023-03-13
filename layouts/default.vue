<template>
    <div>
        <default-header />
        <nuxt/>
        <default-footer />
    </div>
</template>
<script>
import DefaultFooter from '../components/Footer/DefaultFooter.vue'
import DefaultHeader from '../components/Header/DafaultHeader.vue'

export default {
    components: {
        DefaultHeader,
        DefaultFooter  
    },
  
  }
</script>

<style lang="scss" scoped>

</style>

  
  
  
  
  
  