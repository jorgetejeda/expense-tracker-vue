import './assets/style.css'

import { createApp } from 'vue'
import App from './App.vue'

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const app = createApp(App)
app.use(Toast,
    // {
    //     position: "top-right",
    //     timeout: 3000,
    //     closeOnClick: true,
    //     pauseOnFocusLoss: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     draggablePercent: 0.6,
    //     showCloseButtonOnHover: false,
    //     hideProgressBar: false,
    //     closeButton: "button",
    //     icon: true,
    //     rtl: false,
    //     maxToasts: 20,
    //     transition: "Vue-Toastification__fade",
    //     newestOnTop: false,
    //     filterBeforeCreate: (toast, toasts) => {
    //         if (toasts.filter(
    //             t => t.content === toast.content
    //         ).length !== 0) {
    //             return false;
    //         }
    //         return toast;
    //     }
    // }
);
app.mount('#app')
