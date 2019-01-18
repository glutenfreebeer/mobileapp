import Vue from "nativescript-vue";

import Home from "./components/Home.vue";

// Vue.config.silent = !DEBUG_MODE

new Vue({
    template: `<Frame><Home /></Frame>`,
    components: {
        Home
    }
}).$start();
