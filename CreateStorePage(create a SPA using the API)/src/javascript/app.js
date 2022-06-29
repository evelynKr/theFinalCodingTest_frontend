import { ProductPage, ProductDetail, Cart } from './pages/index.js';
import { Router } from './utils/index.js';

export default class App {
    constructor(props){
        this.props = props;
    }

    async setup(){
        const { el } = this.props;
        const rootElement = el;

        this.router = new Router(
            {
                "/": ProductPage,
                "/detail/:id": ProductDetail,
                "/cart": Cart,
                "/order": Cart,
            }
        );

        this.router.init(rootElement, (callback)=>{
            callback();
        });
    }
}