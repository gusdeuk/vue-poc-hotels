<template>
    <transition name="fade-view" appear>
        <div class="test-page">
            <div class="page-title">Test Page</div>

            <div class="page-content">
                <!-- TEST BS 5 -->
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            One of three columns
                        </div>
                        <div class="col-sm">
                            One of three columns
                        </div>
                        <div class="col-sm">
                            <font-awesome-icon style="font-size: 24px; color: aqua;" rotation="180" :icon="['fas', 'coffee']" />

                            <font-awesome-icon :icon="['fas', 'spinner']" spin />
                            <font-awesome-icon :icon="['far', 'address-card']" />
                            <font-awesome-icon :icon="['fab', 'twitter']" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm">
                            <button type="button" class="btn btn-primary">Primary</button>
                            <button type="button" class="btn btn-secondary">Secondary</button>
                            <button type="button" class="btn btn-success">Success</button>
                            <button type="button" class="btn btn-danger">Danger</button>
                            <button type="button" class="btn btn-warning">Warning</button>
                            <button type="button" class="btn btn-info">Info</button>
                            <button type="button" class="btn btn-light">Light</button>
                            <button type="button" class="btn btn-dark">Dark</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script src="./TestPage.js"></script>
<style src="./TestPage.scss" scoped lang="scss"></style>
