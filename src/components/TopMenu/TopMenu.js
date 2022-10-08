import MenuItem from './TopMenuItem/TopMenuItem.vue';
import linkData from './data/linkData';

export default {
    // -------------------------------------------
    // props > strings or typed
    props: [
        //{ someProp: Number }
        //'someProp'
    ],

    // -------------------------------------------
    // data part >> available with this.XXXX
    data() {
        return {
            essentialLinks: linkData.menuData
        };
    },

    // -------------------------------------------
    // methods
    methods: {
        doThis() {
            // console.log('something')
        }
    },

    // -------------------------------------------
    // computed properties > returning stuff
    computed: {
        getSomething() {
            return 'something';
        }
    },

    // -------------------------------------------
    // watch data changes > examples
    watch: {},

    // -------------------------------------------
    // emit CUSTOM events > called from methods
    emits: ['toggle-favorite'],

    // -------------------------------------------
    // register components
    components: { MenuItem },

    // -------------------------------------------
    // SOME HOOKS
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUnmount() {}
};
