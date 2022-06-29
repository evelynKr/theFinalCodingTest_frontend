class Router {
    // const router = new Router({
    //     "/":ProductPage,
    //     "/detail":ProductDetail,
    // });
    constructor(routes){
        if(!router){
            console.error("Can not initailize routes, need routes!");
        }
        this.routes = routes;
    }

    init(rootElementId){
        if(!rootElementId){
            console.error("Can not initailize Route, not define rootElementId");
            return null;
        }
        this.rootElementId = rootElementId;

        // 라우팅 되는 부분
        // about:blank의 window.loction.pathname은 blank
        // http://paullob.co.kr/abc의  window.loction.pathname은 /abc
        // http://www.paullob.co.kr/about.html의  window.loction.pathname은 /about.html
        this.routing(window.location.pathname);

        window.addEventListener('click', (e) => {
            if(e.target.tagName.toLowCase() === 'a'){
                e.preventDefault();
                this.routePush(e.target.href);
            }
        });

        window.onpopstate = () => this.routing(window.location.pathname);
    }

    routePush(pathname){
        window.history.pushState({}, null, pathname);
        this.routing(window.location.pathname);
    }

    routing(pathname){
        const [_, routeName, ...param] = pathname.split('/');
        let page = '';

        if(this.routes[pathname]){
            const components = new this.routes[pathname];
            page = components.render();
        }

        if(page){
            this.render(page)
        }
    }

    render(page){
        const rootElementId = document.querySelector(this.rootElementId);
        rootElement.innerHTML = '';
        rootElement.appendChild(page);
    }
}

export default Router