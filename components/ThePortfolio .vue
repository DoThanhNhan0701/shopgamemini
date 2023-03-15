<template>
    <section id="portfolio" class="page-section bg-light">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">Portfolio</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amen consenter.</h3>
            </div>
            <div class="row">
                <div v-for="portfolio in portfolios" :key="portfolio.id" class="col-lg-4 col-sm-6 mb-4">
                    <div class="portfolio-item">
                        <a class="portfolio-link" href="#">
                            <div class="portfolio-hover">
                                <div class="portfolio-hover-content">
                                    <svg 
                                    class="svg-inline--fa fa-plus fa-3x" aria-hidden="true" focusable="false" 
                                    data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z"></path></svg>
                                </div>
                              </div>
                            <img :src="portfolio.image" alt="Thumbnail card" class="img-fluid">
                        </a>
                        <div class="portfolio-caption">
                             <div class="portfolio-caption-heading text-muted">{{ portfolio.name }}</div>
                             <div class="portfolio-caption-subheading text-muted">{{ portfolio.description }}</div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'ThePortfolio',
        data(){
            return{
                portfolios: [
                    {
                        id: 1,
                        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg',
                        name: 'Threads1',
                        description: 'Illustration1',
                    },
                    {
                        id: 2,
                        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg',
                        name: 'Threads2',
                        description: 'Illustration2',
                    },
                    {
                        id: 3,
                        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg',
                        name: 'Threads3',
                        description: 'Illustration3',
                    },
                    {
                        id: 4,
                        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg',
                        name: 'Threads4',
                        description: 'Illustration4',
                    },
                    {
                        id: 5,
                        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg',
                        name: 'Threads5',
                        description: 'Illustration5',
                    },
                    {
                        id: 6,
                        image: 'https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg',
                        name: 'Threads6',
                        description: 'Illustration6',
                    },
                ]
            }
        }
    }
</script>

<style>

.light {
    background-color: #f0f8ff;
}

.portfolio-item{
    max-width: 26rem;
    margin-left: auto;
    margin-right: auto;
}

.portfolio-link{
    position: relative;
    display: block;
    margin: 0 auto;
}

.portfolio-item a{
    color: #ffc800;
    text-decoration: underline;
}

.portfolio-hover{
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffc800;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity ease-in-out 0.25s;
    z-index: 3;
}

.portfolio-hover:hover {
  opacity: 1;
}

.portfolio-hover-content {
    font-size: 1.25rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.fa-plus{
    width: 50px;
    height: 50px;
}

.img-fluid {
    max-width: 100%;
    height: auto;
}

/* Captions */
.portfolio-caption {
    padding: 1.5rem;
    text-align: center;
    background-color: #fff;
}

.portfolio-caption-heading{
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 0;
}
</style>