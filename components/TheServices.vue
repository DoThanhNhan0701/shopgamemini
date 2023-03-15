<template>
    <section id="service" class="page-section">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Service</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amen consenter.</h3>
            </div>
            <div class="row text-center">
                <div v-for="service in services" :key="service.id" class="col-md-4">
                    <img class="card-images-service" :src="service.image" alt="Thumbnail">
                    <h4 class="my-3 text-danger">{{ service.name }}</h4>
                    <p class="text-muted">{{ service.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheServices',
    data(){
        return{
            services: [
                {
                    id: 1,
                    name: 'E-Commerce1',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbu5sKBQYRXWQFySXBfZxoIqIvNBkRy59jmblkOTWbHwQ75LtxJrS3Z5bsrveuZSRG8C0&usqp=CAU',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit1.'
                },
                {
                    id: 2,
                    name: 'E-Commerce2',
                    image: 'https://i.ytimg.com/vi/xxl0MRdEZHU/maxresdefault.jpg',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit2.'
                },
                {
                    id: 3,
                    name: 'E-Commerce3',
                    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSarRU4JGbTqzj3SuE9jvsSQLOXmp7lsfe1SwxE4n6joeS8HvH_MS-_2_AUyT4MaSjoyoU&usqp=CAU',
                    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit3.'
                },
            ]
        }
    }
}
</script>

<style>
.page-section {
    padding: 6rem 0;
}

.section-heading {
    font-size: 2.5rem;
    color: black;
    margin-top: 0;
    margin-bottom: 1rem;
}

.section-subheading {
    font-size: 1rem;
    font-weight: 400;
    font-style: italic;
    margin-bottom: 4rem;
}

.card-images-service{
    width: 224px;
    height: 224px;
    object-fit: cover;
}

</style>