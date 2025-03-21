<template>
<div>
    <!-- First section with some margin from the top -->
    <section class="hero py-5 bg-light">
    <div class="container">
        <h1 class="display-4 text-center">Welcome to Your Application</h1>
        <p class="lead text-center mb-5">This page is designed to test the fixed navbar functionality</p>
        <div class="row">
        <div class="col-md-6 offset-md-3">
            <div class="card shadow-sm">
            <div class="card-body">
                <h5 class="card-title">Scroll Down</h5>
                <p class="card-text">Scroll down to see if the navbar remains fixed at the top of the screen.</p>
                <a href="#section2" class="btn btn-primary">Go to next section</a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>

    <!-- Second section with different background -->
    <section id="section2" class="py-5 bg-primary text-white">
    <div class="container">
        <h2 class="text-center mb-4">Section 2</h2>
        <div class="row">
        <div class="col-md-4 mb-3">
            <div class="card bg-light text-dark">
            <div class="card-body">
                <h5 class="card-title">Card 1</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card bg-light text-dark">
            <div class="card-body">
                <h5 class="card-title">Card 2</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        <div class="col-md-4 mb-3">
            <div class="card bg-light text-dark">
            <div class="card-body">
                <h5 class="card-title">Card 3</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
            </div>
        </div>
        </div>
        <div class="text-center mt-4">
        <a href="#section3" class="btn btn-light">Continue scrolling</a>
        </div>
    </div>
    </section>

    <!-- Third section with different background -->
    <section id="section3" class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-4">Section 3</h2>
        <div class="row">
        <div class="col-lg-8 offset-lg-2">
            <p class="lead mb-4">Check if the navbar is still visible at the top of your screen.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </div>
    </div>
    </section>

    <!-- Fourth section with different background -->
    <section class="py-5 bg-dark text-white">
    <div class="container">
        <h2 class="text-center mb-4">Section 4</h2>
        <div class="row">
        <div class="col-md-6">
            <h4>Feature One</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="col-md-6">
            <h4>Feature Two</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
        <div class="row mt-4">
        <div class="col-md-6">
            <h4>Feature Three</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="col-md-6">
            <h4>Feature Four</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        </div>
    </div>
    </section>

    <!-- Final section -->
    <section class="py-5 bg-light">
    <div class="container">
        <h2 class="text-center mb-4">Bottom Section</h2>
        <p class="lead text-center">You've reached the bottom of the page.</p>
        <p class="text-center">If the navbar has remained visible throughout your scrolling, it's working correctly!</p>
        <div class="text-center mt-4">
        <a href="#" class="btn btn-primary">Back to Top</a>
        </div>
    </div>
    </section>
</div>
</template>

<style scoped>
/* Smooth scrolling behavior for anchor links */
html {
scroll-behavior: smooth;
}

section {
/* min-height: 50vh; */
display: flex;
align-items: center;
}

.hero {
/* min-height: 80vh; */
}
</style>