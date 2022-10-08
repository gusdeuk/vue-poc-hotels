<template>
    <div class="main-wrapper">
        <router-view />
    </div>
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App'
});
</script>

<style src="./App.scss" scoped lang="scss"></style>
