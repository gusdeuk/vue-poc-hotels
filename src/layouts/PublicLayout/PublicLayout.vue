<template>
    <div class="public-layout">
        <!-- router view VUE component  -->
        <router-view class="content-wrapper" v-slot="slotProps">
            <keep-alive>
                <component :is="slotProps.Component"></component>
            </keep-alive>
        </router-view>
    </div>
</template>

<script src="./PublicLayout.js"></script>
<style src="./PublicLayout.scss" scoped lang="scss"></style>
