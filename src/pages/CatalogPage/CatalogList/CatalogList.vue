<template>
    <div class="catalog-list-component">
        <!-- listen to custom event > filter-catalog-event -->
        <catalog-filter @filter-catalog-event="doSearch"></catalog-filter>

        <div class="loader-wrap" v-if="isLoading">
            <font-awesome-icon :icon="['fas', 'spinner']" spin style="font-size: 50px; color: #eeeeee;" />
        </div>

        <transition name="fade-simple">
            <div class="catalog-list clearfix" v-if="!isLoading">
                <transition-group name="catalog-list" tag="div">
                    <catalog-item v-for="item in filteredCatalog" :key="item.name" :item="item" class="list-item"></catalog-item>
                </transition-group>
            </div>
        </transition>
    </div>
</template>

<script src="./CatalogList.js"></script>
<style src="./CatalogList.scss" scoped lang="scss"></style>
