<template>
    <!-- *************************************** -->
    <!-- ERROR PAGE > DECOUPLED LAYOUT -->
    <!-- *************************************** -->
    <transition name="fade-view" appear v-show="showContent">
        <div class="error-page">
            <div class="legend">ERROR 404</div>
            <img class="logo" src="../../images/isologo-v-white.svg" />

            <button type="button" class="btn btn-primary back-btn" @click="navToHome('', $event)">CONTINUE NAVIGATION</button>
        </div>
    </transition>
</template>

<script src="./ErrorPage.js"></script>
<style src="./ErrorPage.scss" scoped lang="scss"></style>
