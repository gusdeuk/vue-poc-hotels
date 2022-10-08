import CatalogFilter from '../CatalogFilter/CatalogFilter.vue';
import CatalogItem from '../CatalogItem/CatalogItem.vue';

export default {
    name: 'CatalogList',
    components: {
        CatalogFilter,
        CatalogItem
    },
    data() {
        return {
            isLoading: false,
            error: null
        };
    },
    mounted() {
        // other
    },
    created() {
        const itemsInStore = this.$store.getters['catalogModule/getCatalog'];
        // load items just once!
        if (itemsInStore.length === 0) {
            this.loadCatalog(true);
        }
    },
    computed: {
        filteredCatalog() {
            const catalogList = this.$store.getters['catalogModule/getCatalog'];
            return catalogList.filter(item => {
                // show all for now
                return true;
            });
        }
    },
    methods: {
        async loadCatalog() {
            // flag to show / hide a loader while getting data in store
            this.isLoading = true;
            try {
                // dispatch action and load stuff in store
                await this.$store.dispatch('catalogModule/loadCatalog', {
                    // TODO: add force reload or something like that in the payload
                    something: true
                });
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
            // loading complere
            this.isLoading = false;
        },
        doSearch(updatedFilters) {
            alert('search in list');
        }
    }
};
