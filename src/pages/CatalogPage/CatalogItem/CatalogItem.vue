<template>
    <div class="catalog-item-component" :class="selectedClass">
        <div class="name-wrap  text-truncate">{{ name }}</div>

        <div class="image-wrap">
            <img v-bind:src="imageURL" />
        </div>

        <div class="star-wrap">
            <font-awesome-icon v-for="star in stars" :key="star" style="font-size: 17px; color: #ebc900;" :icon="['fas', 'star']"></font-awesome-icon>
        </div>

        <div class="address-wrap text-truncate" :title="address">
            <div class="data text-truncate">{{ address }}</div>
        </div>

        <div class="price-wrap">
            <div class="price-title text-truncate">Weekday Prices (USD / Day)</div>
            <div class="price-container">
                <div class="item  text-truncate">
                    <span class="key">REGULAR: </span><span class="value">{{ priceRegularWeekday }}</span>
                </div>
                <div class="item  text-truncate">
                    <span class="key">REWARD: </span><span class="value">{{ priceRewardWeekday }}</span>
                </div>
            </div>
        </div>
        <div class="price-wrap">
            <div class="price-title text-truncate">Weekend Prices (USD / Day)</div>
            <div class="price-container">
                <div class="item text-truncate">
                    <span class="key">REGULAR: </span><span class="value">{{ priceRegularWeekend }}</span>
                </div>
                <div class="item  text-truncate">
                    <span class="key">REWARD: </span><span class="value">{{ priceRewardWeekend }}</span>
                </div>
            </div>
        </div>

        <div class="tag-wrap">
            <tag v-for="tag in getTagList" :key="tag" :label="tag"></tag>
        </div>
    </div>
</template>

<script src="./CatalogItem.js"></script>
<style src="./CatalogItem.scss" scoped lang="scss"></style>
