<template>
    <header class="masthead fix-margin">
        <div class="container">
            <div class="masthead-subheading">Welcome To Our Shop</div>
            <div class="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a class="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'TheMasthead'
}
</script>

<style scoped>
header.masthead {
    padding-top: 10.5rem;
    padding-bottom: 6rem;
    text-align: center;
    color: #fff;
    background-image: url('~/assets/images/header-bg.jpg');
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
}

header.masthead .masthead-subheading {
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.5rem;
    margin-bottom: 25px;
}


header.masthead .masthead-heading {
    font-size: 3.25rem;
    font-weight: 700;
    line-height: 3.25rem;
    margin-bottom: 2rem;
}

.btn-xl {
    padding: 1.25rem 2.5rem;
    font-size: 1.125rem;
    font-weight: 700;
}

.btn-primary{
    color: #fff;
    background-color: #ffc800;
    border-color: #ffc800;
}

.masthead{
    margin-top: 88px;
}

</style>