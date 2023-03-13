<template>
    <header>
        <nav id="my-class" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container">
                <nuxt-link class="navbar-brand" to="/">Home</nuxt-link>
                <button 
                    class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div id="navbarResponsive" class="navbar-collapse collapse">
                    <ul class="navbar-nav ml-auto text-uppercase py-4 py-lg-0">
                        <li class="nav-item">
                            <nuxt-link class="nav-link" to="/categories">Categories</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link class="nav-link" to="/products">Products</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link class="nav-link" to="/profiles">Profile</nuxt-link>
                        </li>
                        <li>
                            <nuxt-link class="nav-link" to="/settings">Setting</nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>
  
<script>
export default {
    name: 'DefaultHeader',
}
</script>

<style>

#my-class {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border: none;
    background-color: transparent;
}

.navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: 0.25rem;
}

.navbar-dark .navbar-toggler {
    color: aqua;
    border-color: black;
}
</style>
