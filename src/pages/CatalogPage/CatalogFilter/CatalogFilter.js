export default {
    emits: ['filter-catalog-event'],
    data() {
        return {};
    },
    methods: {
        search(event) {
            let something = {};
            // emit filter event
            this.$emit('filter-catalog-event', something);
        },
        toggleAmmenities(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            console.log(inputId + isActive);
        },
        toggleCustomerType(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            console.log(inputId + isActive);
        },
        setStartDate(event) {
            const inputId = event.target.id;
            const isActive = event.target.value;
            console.log(inputId + isActive);
        },
        setEndDate(event) {
            const inputId = event.target.id;
            const isActive = event.target.value;
            console.log(inputId + isActive);
        }
    }
};
