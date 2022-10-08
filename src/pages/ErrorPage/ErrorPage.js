export default {
    name: "ErrorPage",
    data() {
        return {
            showContent: false,
        };
    },
    created() {},
    mounted() {
        setTimeout(() => {
            // show content > fire IN transition
            this.showContent = true;
        }, 200);
    },
    beforeUnmount() {},
    methods: {
        navToHome(message, event) {
            event.preventDefault();
            // hide content > fire OUT transition
            this.showContent = false;
            // nav to
            setTimeout(() => this.$router.push({ path: "/home" }), 800);
        },
    },
};
