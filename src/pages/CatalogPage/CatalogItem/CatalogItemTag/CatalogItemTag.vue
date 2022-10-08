<template>
    <div class="tag-component text-truncate" :class="getTagColor" :title="labelTag.toUpperCase()">
        {{ labelTag }}
    </div>
</template>

<script src="./CatalogItemTag.js"></script>
<style src="./CatalogItemTag.scss" scoped lang="scss"></style>
