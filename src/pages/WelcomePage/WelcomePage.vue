<template>
    <!-- *************************************** -->
    <!-- LOGIN PAGE > DECOUPLED LAYOUT -->
    <!-- *************************************** -->
    <transition name="fade-view" v-show="showContent">
        <div class="welcome-page">
            <img class="logo" src="../../images/isologo-v.svg" />

            <button type="button" class="btn btn-primary enter-btn" @click="navToHome('', $event)">ENTER SITE</button>
        </div>
    </transition>
</template>

<script src="./WelcomePage.js"></script>
<style src="./WelcomePage.scss" scoped lang="scss"></style>
