<template>
    <section id="about" class="page-section">
        <div class="container">
            <div class="text-center">
                <h2 class="section-heading text-uppercase">About</h2>
                <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amen consenter.</h3>
            </div>
            <div class="main-timeline">
                <div class="timeline left">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-danger">2021</h3>
                            <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quibusdam
                                ratione eveniet dignissimos, esse aliquid. Unde tempora consectetur recusandae voluptatem
                                reprehenderit. Numquam, tenetur. Dolorem veritatis accusantium vero error ut fugit!</p>
                        </div>
                    </div>
                </div>
                <div class="timeline right">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-danger">2021</h3>
                            <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quibusdam
                                ratione eveniet dignissimos, esse aliquid. Unde tempora consectetur recusandae voluptatem
                                reprehenderit. Numquam, tenetur. Dolorem veritatis accusantium vero error ut fugit!</p>
                        </div>
                    </div>
                </div>
                <div class="timeline left">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-danger">2021</h3>
                            <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quibusdam
                                ratione eveniet dignissimos, esse aliquid. Unde tempora consectetur recusandae voluptatem
                                reprehenderit. Numquam, tenetur. Dolorem veritatis accusantium vero error ut fugit!</p>
                        </div>
                    </div>
                </div>
                <div class="timeline right">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-danger">2021</h3>
                            <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quibusdam
                                ratione eveniet dignissimos, esse aliquid. Unde tempora consectetur recusandae voluptatem
                                reprehenderit. Numquam, tenetur. Dolorem veritatis accusantium vero error ut fugit!</p>
                        </div>
                    </div>
                </div>
                <div class="timeline left">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-danger">2021</h3>
                            <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quibusdam
                                ratione eveniet dignissimos, esse aliquid. Unde tempora consectetur recusandae voluptatem
                                reprehenderit. Numquam, tenetur. Dolorem veritatis accusantium vero error ut fugit!</p>
                        </div>
                    </div>
                </div>
                <div class="timeline right">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-danger">2021</h3>
                            <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quibusdam
                                ratione eveniet dignissimos, esse aliquid. Unde tempora consectetur recusandae voluptatem
                                reprehenderit. Numquam, tenetur. Dolorem veritatis accusantium vero error ut fugit!</p>
                        </div>
                    </div>
                </div>
                <div class="timeline left">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-danger">2021</h3>
                            <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quibusdam
                                ratione eveniet dignissimos, esse aliquid. Unde tempora consectetur recusandae voluptatem
                                reprehenderit. Numquam, tenetur. Dolorem veritatis accusantium vero error ut fugit!</p>
                        </div>
                    </div>
                </div>
                <div class="timeline right">
                    <div class="card">
                        <div class="card-body">
                            <h3 class="text-danger">2021</h3>
                            <p class="text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero quibusdam
                                ratione eveniet dignissimos, esse aliquid. Unde tempora consectetur recusandae voluptatem
                                reprehenderit. Numquam, tenetur. Dolorem veritatis accusantium vero error ut fugit!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'TheAbout'
}
</script>

<style scoped>
.main-timeline {
    position: relative;
}

.main-timeline::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: #939597;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
}

.timeline {
    position: relative;
    background-color: inherit;
    width: 50%;
}

.timeline::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -12px;
    background-color: #939597;
    border: 5px solid #f5df4d;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}

.left {
    padding: 0 40px 20px 0;
    left: 0%;
}

.right {
    padding: 0 0 20px 40px;
    left: 50%;
}

.left::before {
    content: " ";
    position: absolute;
    top: 18px;
    z-index: 13;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent red;
}

.right::before {
    content: '';
    position: absolute;
    top: 18px;
    z-index: 100;
    left: 31px;
    border: medium solid white;
    border-color: transparent red transparent transparent;
    border-width: 10px 10px 10px 0;
}

.right::after {
    left: -12px;
}

@media screen and (max-width: 600px) {
    .main-timeline::after {
        left: 31px;
    }

    .timeline {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    .timeline::before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    .left::after,
    .right::after {
        left: 18px;
    }

    .left::before {
        right: auto;
    }

    .right {
        left: 0%;
    }
}
</style>
