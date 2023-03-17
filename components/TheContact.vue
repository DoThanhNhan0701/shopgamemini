<template>
    <section id="contact" class="page-section">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-muted text-uppercase">Contact us</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amen consenter.</h3>
            </div>
            <form action="#" class="contactForm">
                <div class="row align-items-stretch mb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            <input id="name" type="text" class="form-control" placeholder="Your Name *">
                        </div>  
                        <div class="form-group">
                            <input id="name" type="text" class="form-control" placeholder="Your Email *">
                        </div> 
                        <div class="form-group mb-md-0">
                            <input id="name" type="text" class="form-control" placeholder="Your Phone *">
                        </div> 
                    </div>
                    <div class="col-md-6">
                        <div class="form-group form-group-textarea mb-md-0">
                            <textarea id="message" class="form-control" placeholder="Your Message"></textarea>
                        </div>
                    </div>
                </div>
                <div class="text-center">
                    <button id="submitButton" class="btn btn-primary fix-height btn-xl text-uppercase disabled" type="submit">Send Message</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'TheContact'
    }
</script>

<style>

section#contact {
    background-color: #212529;
    background-image: url('https://startbootstrap.github.io/startbootstrap-agency/assets/img/map-image.png');
    background-repeat: no-repeat;
    background-position: center;
}

.form-group{
    margin-bottom: 1.5rem;

}

.form-control {
    height: auto;
    padding: 1.25rem;
    font-family: inherit;
}

textarea {
    height: 100%;
    min-height: 10rem;
}

.form-group textarea {
    padding: 1.25rem;
}

.btn.disabled {
    pointer-events: none;
    opacity: 0.65;
}


.btn-primary.disabled {
    color: #fff;
    background-color: #ffc800;
    border-color: #ffc800;
}

.btn-xl {
    padding: 1.25rem 2.5rem;
    font-family: inherit;
    font-size: 1.125rem;
    font-weight: 700;
}
</style>






