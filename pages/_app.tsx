import {ToastContainer} from "react-toastify"
import {setupStore} from "@/redux/store";
import {Provider} from "react-redux";
import {AppType} from "next/app";


import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.min.css"
import "@/styles/variables.module.scss"
import "@/styles/main.scss"

export const store = setupStore()

const App: AppType = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
            <ToastContainer/>
        </Provider>
    )
}
export default App;
