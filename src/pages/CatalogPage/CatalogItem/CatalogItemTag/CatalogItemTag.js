export default {
    props: ['label'],
    data() {
        return {
            labelTag: this.label
        };
    },
    computed: {
        getTagColor() {
            return 'test';
        }
    }
};
