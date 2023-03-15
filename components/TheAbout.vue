<template>
    <section id="about" class="page-section">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">About</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amen consenter.</h3>
            </div>
            <ul class="timeline">
                <li>
                    <div class="timeline-image">
                        <img 
                            src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/about/1.jpg"
                            class="rounded-circle img-fluid" alt="">
                    </div>
                    <div class="timeline-panel">
                        <div class="timeline-heading">
                            <h4 class="text-muted">2022-2023</h4>
                            <h4 class="subheading text-muted">Our Humble Beginnings</h4>
                        </div>
                        <div class="timeline-body">
                            <p class="text-muted">
                                Lorem ipsum dolor sit amet consectetur adipisicing <br>
                                elit.Culpa magnam, dolore eos id tempore beatae vero <br>
                                totam sint dolorum sequi quia sapiente sed ullam, magni <br>
                                eligendi aliquid laudantium? Adipisci, officia?
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheAbout'
}
</script>

<style>
.timeline {
    padding: 0;
    list-style: none;
}

.timeline-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    height: 100%;
}

/*
.timeline-image::before {
    height: 400px;
    width: 5px;
    top: 0;
    transform: translateX(-50%);
    content: "";
    background-color: #e9ecef;
    position: absolute;
    left: 50%;
    z-index: 1;
}
*/
.timeline-image img {
    z-index: 2;
    position: relative;
    width: 157px;
    height: 157px;
}

/* Timeline panel */

/*
.timeline-panel {
    float: left;
    text-align: right;
    padding: 0 20px 20px 100px;
    position: absolute;
} 
*/

.timeline-heading {
    margin-top: 0;
    color: inherit;
}

.timeline-body > p {
    margin-bottom: 0;
}
</style>