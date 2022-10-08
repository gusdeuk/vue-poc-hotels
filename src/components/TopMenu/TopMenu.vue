<template>
    <div class="navigation-menu">
        <MenuItem v-for="link in essentialLinks" :key="link.title" v-bind="link" />
    </div>
</template>

<script src="./TopMenu.js"></script>
<style src="./TopMenu.scss" scoped lang="scss"></style>
