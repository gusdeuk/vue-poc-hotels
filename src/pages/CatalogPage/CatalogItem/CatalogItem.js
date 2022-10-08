import Tag from './CatalogItemTag/CatalogItemTag.vue';
export default {
    props: ['item'],
    components: { Tag },
    data() {
        return {
            // dispose planet data
            name: this.item.name,
            image: this.item.image,
            imageURL: this.item.imageURL,
            address: this.item.address,
            stars: this.item.stars,
            priceRegularWeekday: this.item.priceRegularWeekday,
            priceRewardWeekday: this.item.priceRewardWeekday,
            priceRegularWeekend: this.item.priceRegularWeekend,
            priceRewardWeekend: this.item.priceRewardWeekend,
            selectedClass: ''
        };
    },
    computed: {
        getLabel() {
            //console.log(this.planet);
            return this.item.name + ' - ' + this.item.tags;
        },
        getTagList() {
            let tagsArray = this.item.tags.split(', ');
            return tagsArray;
        }
    },
    mounted() {
        // TODO: hardcoded selected item to show example
        if (this.item.id == '5') {
            this.selectedClass = 'selected';
        }
    }
};
