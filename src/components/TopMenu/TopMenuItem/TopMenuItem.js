export default {
    name: 'MenuItem',
    props: {
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            default: '#'
        }
    }
};
