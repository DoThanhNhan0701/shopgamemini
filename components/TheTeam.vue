<template>
    <section id="team" class="page-section bg-light">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-muted text-uppercase">Our Amazing Team</h2>
                <h3 class="section-subheading text-muted">Our Amazing Team</h3>
            </div>
            <div class="row">
                <div  v-for="team in teams" :key="team.id" class="col-lg-4">
                    <div class="team-member">
                        <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/team/1.jpg" alt="Thumbnail Image" class="mx-auto rounded-circle">
                        <h4 class="text-danger">{{ team.nameless }}</h4>
                        <p class="text-muted">{{ team.job }}</p>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><svg class="svg-inline--fa fix-icon-image fa-twitter" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"></path></svg></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><svg class="svg-inline--fa fix-icon-image fa-facebook-f" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"></path></svg></a>
                        <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><svg class="svg-inline--fa fix-icon-image fa-linkedin-in" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.3 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.6 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.3 61.9 111.3 142.3V448z"></path></svg></a>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, 
                        laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'TheTeam',
        data(){
            return {
                teams: [
                    {
                        id: 1,
                        nameless: 'Do Thanh Nhan1',
                        job: 'Learning VueJs1'
                    },
                    {
                        id: 2,
                        nameless: 'Do Thanh Nhan2',
                        job: 'Learning VueJs2'
                    },
                    {
                        id: 3,
                        nameless: 'Do Thanh Nhan3',
                        job: 'Learning VueJs3'
                    },
                ]
            }
        }
    }
</script>

<style>

.team-member {
    margin-bottom: 3rem;
    text-align: center;
}

.team-member img {
    width: 14rem;
    height: 14rem;
    border: 0.5rem solid black;
}

.btn-social {
    height: 2.5rem;
    width: 2.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    border-radius: 100%;
}

.btn-dark {
    color: #fff;
    background-color: #212529;
    border-color: #212529;
}

.mx-2 {
    margin-right: 0.5rem !important;
    margin-left: 0.5rem !important;
}

.fix-icon-image{
    display: var(--fa-display,inline-block);
    height: 1em;
    overflow: visible;
    vertical-align: -0.125em;
}
</style>