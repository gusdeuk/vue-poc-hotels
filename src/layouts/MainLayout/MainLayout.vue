<template>
    <div class="main-layout">
        <transition name="fade-view" appear>
            <div>
                <header-area></header-area>
                <content-area></content-area>
                <footer-area></footer-area>
            </div>
        </transition>
    </div>
</template>

<script src="./MainLayout.js"></script>
<style src="./MainLayout.scss" scoped lang="scss"></style>
