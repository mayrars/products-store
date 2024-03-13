import './polyfills.server.mjs';
import{B,D as H,E as _,F as R,G as O,H as T,I as N,J as z,K as U,L as V,O as q,S as I,T as G,V as D,W as M,X as J,Y as K,a as p,b as $,c as m,d as L,e as s,f as b,g as E,h as C,i as x,j as i,k as n,l,m as S,n as P,o as k,p as r,q as u,r as d,s as w,t as f,u as g}from"./chunk-KHI55OYT.mjs";var h=(()=>{let e=class e{constructor(){this._http=m(N),this.baseurl="https://fakestoreapi.com"}getAllProducts(a){let o=a?`?limit=${a}`:"";return this._http.get(`${this.baseurl}/products${o}`)}getProductById(a){return this._http.get(`${this.baseurl}/products/${a}`)}getAllCategories(){return this._http.get(`${this.baseurl}/products/categories`)}getProductsByCategory(a,o){let c=o?`?sort=${o}`:"";return this._http.get(`${this.baseurl}/products/category/${a}${c}`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function se(t,e){if(t&1&&(i(0,"li")(1,"a",18),r(2),f(3,"titlecase"),n()()),t&2){let v=e.$implicit;s(),k("routerLink","/categories/",v,""),s(),u(g(3,2,v))}}var j=t=>({active:t}),Q=(()=>{let e=class e{constructor(){this.categoriesList=[],this.menuOption="",this._apiService=m(h)}onOption(a){this.menuOption=a}ngOnInit(){this._apiService.getAllCategories().subscribe(a=>{this.categoriesList=a})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-header"]],standalone:!0,features:[d],decls:28,vars:12,consts:[["data-bs-theme","light",1,"navbar","border-bottom","border-body","navbar-expand-lg","bg-body-tertiary"],[1,"container"],["routerLink","/",1,"navbar-brand"],["src","./assets/shopcart.png","width","120"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNav","aria-controls","navbarNav","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLink","/",1,"nav-link",3,"ngClass","click"],[1,"nav-item","dropdown"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"nav-link","dropdown-toggle"],[1,"dropdown-menu"],["routerLink","products",1,"nav-link",3,"ngClass","click"],["href","/login",1,"icons_header",3,"ngClass"],[1,"bi","bi-person-circle"],["href","/cart",1,"icons_header",3,"ngClass"],[1,"bi","bi-bag-plus"],[1,"dropdown-item",3,"routerLink"]],template:function(o,c){o&1&&(i(0,"nav",0)(1,"div",1)(2,"a",2),l(3,"img",3),n(),i(4,"button",4),l(5,"span",5),n(),i(6,"div",6)(7,"ul",7)(8,"li",8)(9,"a",9),S("click",function(){return c.onOption("home")}),r(10,"Home"),n()(),i(11,"li",10)(12,"a",11),r(13," Categories "),n(),i(14,"ul",12),C(15,se,4,4,"li",null,E),n()(),i(17,"li",8)(18,"a",13),S("click",function(){return c.onOption("products")}),r(19,"Products"),n()()()(),i(20,"a",14),l(21,"i",15),i(22,"span"),r(23,"Account"),n()(),i(24,"a",16),l(25,"i",17),i(26,"span"),r(27,"Cart"),n()()()()),o&2&&(s(9),b("ngClass",w(4,j,c.menuOption=="home")),s(6),x(c.categoriesList),s(3),b("ngClass",w(6,j,c.menuOption=="products")),s(2),b("ngClass",w(8,j,c.menuOption=="login")),s(4),b("ngClass",w(10,j,c.menuOption=="login")))},dependencies:[T,H,_,M],styles:[".icons_header[_ngcontent-%COMP%]{font-size:23px;margin-right:25px;display:flex;align-items:center;color:#fff;text-decoration:none}.icons_header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;margin-left:10px}.icons_header[_ngcontent-%COMP%]:hover{text-decoration:underline}"]});let t=e;return t})();var W=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-footer"]],standalone:!0,features:[d],decls:41,vars:0,consts:[[1,"footer"],[1,"container","container-fluid"],[1,"row"],[1,"col-md-4"],["src","./assets/shopcart.png","width","200",1,"mb-3"],[1,"col-lg-8"],[1,"list-group","list-group-flush"],[1,"list-group-item"]],template:function(o,c){o&1&&(i(0,"footer",0)(1,"div",1)(2,"div",2)(3,"div",3),l(4,"img",4),i(5,"p"),r(6," Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. "),n()(),i(7,"div",5)(8,"div",2)(9,"div",3)(10,"h3"),r(11,"About us"),n(),i(12,"ul",6)(13,"li",7),r(14,"About Shopcart"),n(),i(15,"li",7),r(16,"News & Blog"),n(),i(17,"li",7),r(18,"Help"),n()()(),i(19,"div",3)(20,"h3"),r(21,"Services"),n(),i(22,"ul",6)(23,"li",7),r(24,"Gift Card"),n(),i(25,"li",7),r(26,"Mobile App"),n(),i(27,"li",7),r(28,"Shipping & Delivery"),n(),i(29,"li",7),r(30,"Order Pickup"),n(),i(31,"li",7),r(32,"Account Signup"),n()()(),i(33,"div",3)(34,"h3"),r(35,"Help"),n(),i(36,"ul",6)(37,"li",7),r(38,"Contact Us"),n(),i(39,"li",7),r(40,"Shopcart Help"),n()()()()()()()())},styles:[".footer[_ngcontent-%COMP%]{width:100%;bottom:0;left:0;border-top:1px solid #dedede;padding-top:2rem}"]});let t=e;return t})();var X=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-root"]],standalone:!0,features:[d],decls:5,vars:0,consts:[[1,"wrapper"],[1,"main-body"]],template:function(o,c){o&1&&(i(0,"div",0),l(1,"app-header"),i(2,"div",1),l(3,"router-outlet"),n(),l(4,"app-footer"),n())},dependencies:[T,G,Q,W],styles:[".wrapper[_ngcontent-%COMP%]{min-height:100%;position:relative}.main-body[_ngcontent-%COMP%]{padding-bottom:81px}"]});let t=e;return t})();function le(t,e){if(t&1&&(i(0,"a",13)(1,"div",14)(2,"h2"),r(3),f(4,"titlecase"),n()()()),t&2){let v=e.$implicit;k("routerLink","/categories/",v,""),s(3),u(g(4,2,v))}}function pe(t,e){t&1&&(i(0,"div",15)(1,"span",8),r(2,"Loading categories..."),n()())}var Y=(()=>{let e=class e{constructor(){this.categoriesList=[],this._apiService=m(h)}ngOnInit(){this._apiService.getAllCategories().subscribe(a=>{this.categoriesList=a})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-home"]],standalone:!0,features:[d],decls:21,vars:1,consts:[["id","carouselExample",1,"carousel","slide"],[1,"carousel-inner"],[1,"carousel-item","active"],["src","../../../assets/principal-image.jpg",1,"d-block","w-100"],[1,"carousel-item"],["src","../../../assets/image2.jpg",1,"d-block","w-100"],["type","button","data-bs-target","#carouselExample","data-bs-slide","prev",1,"carousel-control-prev"],["aria-hidden","true",1,"carousel-control-prev-icon"],[1,"visually-hidden"],["type","button","data-bs-target","#carouselExample","data-bs-slide","next",1,"carousel-control-next"],["aria-hidden","true",1,"carousel-control-next-icon"],[1,"container","mt-5"],[1,"row","mt-5","categories"],[1,"card","text-bg-dark","mb-3","col-lg-3","col-md-3","col-sm-6","mx-2","text-center","d-flex","justify-content-center",2,"max-width","18rem",3,"routerLink"],[1,"card-header"],["role","status",1,"spinner-border","d-flex","justify-content-center"],["class","card text-bg-dark mb-3 col-lg-3 col-md-3 col-sm-6 mx-2 text-center d-flex justify-content-center ","style","max-width: 18rem;",3,"routerLink"],["class","spinner-border d-flex justify-content-center","role","status"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),l(3,"img",3),n(),i(4,"div",4),l(5,"img",5),n()(),i(6,"button",6),l(7,"span",7),i(8,"span",8),r(9,"Previous"),n()(),i(10,"button",9),l(11,"span",10),i(12,"span",8),r(13,"Next"),n()()(),i(14,"div",11)(15,"h2"),r(16,"Categories"),n(),i(17,"div",12),C(18,le,5,4,"a",16,E,!1,pe,3,0,"div",17),n()()),o&2&&(s(18),x(c.categoriesList))},dependencies:[_,K,M],styles:[".categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]});let t=e;return t})();var A=(()=>{let e=class e{constructor(){this._router=m(D)}ngOnInit(){}detailsProduct(a){this._router.navigate(["/products",a])}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-product-card"]],inputs:{product:"product"},standalone:!0,features:[d],decls:11,vars:6,consts:[[1,"card","product-card",2,"width","18rem"],[1,"card-img-top","p-4","image",3,"src","alt"],[1,"card-body","mt-2"],[1,"card-title"],[1,"card-subtitle","mt-3","mb-2","text-muted"],[1,"d-flex","justify-content-center"],[1,"btn","btn-outline-secondary","mt-3","product-button",3,"click"]],template:function(o,c){o&1&&(i(0,"div",0),l(1,"img",1),i(2,"div",2)(3,"h5",3),r(4),n(),i(5,"h6",4),r(6),f(7,"currency"),n(),i(8,"div",5)(9,"button",6),S("click",function(){return c.detailsProduct(c.product.id)}),r(10," Details "),n()()()()),o&2&&(s(),P("src",c.product.image,L),P("alt",c.product.title),s(3),u(c.product.title),s(2),u(g(7,4,c.product.price)))},dependencies:[O],styles:[".product-card[_ngcontent-%COMP%]{border:none;height:100%}.product-card[_ngcontent-%COMP%]   .product-button[_ngcontent-%COMP%]{border-radius:20px}.product-card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{height:300px;object-fit:contain}"]});let t=e;return t})();var de=(t,e)=>e.id;function me(t,e){if(t&1&&l(0,"app-product-card",3),t&2){let v=e.$implicit;b("product",v)}}function ue(t,e){t&1&&(i(0,"div",4)(1,"div",5)(2,"span",6),r(3,"Loading products..."),n()()())}var Z=(()=>{let e=class e{constructor(){this.productsList=[],this._apiService=m(h),this._router=m(D)}ngOnInit(){this._apiService.getAllProducts().subscribe(a=>{this.productsList=a})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-products"]],standalone:!0,features:[d],decls:7,vars:1,consts:[[1,"container","mt-5"],[1,"mb-5"],[1,"row","text-center"],[1,"col-4","col-md-3","col-sm-6","my-3",3,"product"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["class","col-4 col-md-3 col-sm-6 my-3",3,"product"],["class","d-flex justify-content-center"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"h1",1),r(2,"All products"),n(),i(3,"div",2),C(4,me,1,1,"app-product-card",7,de,!1,ue,4,0,"div",8),n()()),o&2&&(s(4),x(c.productsList))},dependencies:[A]});let t=e;return t})();var ee=(()=>{let e=class e{constructor(){this._apiService=m(h),this._route=m(I)}ngOnInit(){this._route.params.subscribe(a=>{this._apiService.getProductById(a.id).subscribe(o=>{this.product=o})})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-products-detail"]],standalone:!0,features:[d],decls:15,vars:10,consts:[[1,"container","mt-5"],[1,"row"],[1,"col-lg-6","col-md-6","col-sm-12","py-5","px-5"],[1,"img-fluid",3,"src","alt"],[1,"col-lg-6","col-md-6","col-sm-12"],[1,"mb-3"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),l(3,"img",3),n(),i(4,"div",4)(5,"h1",5),r(6),n(),i(7,"h2"),r(8),f(9,"uppercase"),n(),i(10,"h3",5),r(11),f(12,"currency"),n(),i(13,"p"),r(14),n()()()()),o&2&&(s(3),P("src",c.product==null?null:c.product.image,L),P("alt",c.product==null?null:c.product.title),s(3),u(c.product==null?null:c.product.title),s(2),u(g(9,6,c.product==null?null:c.product.category)),s(3),u(g(12,8,c.product==null?null:c.product.price)),s(3),u(c.product==null?null:c.product.description))},dependencies:[O,R]});let t=e;return t})();function fe(t,e){if(t&1&&(i(0,"a",2)(1,"h2",3),r(2),f(3,"titlecase"),n()()),t&2){let v=e.$implicit;k("routerLink","/categories/",v,""),s(2),u(g(3,2,v))}}function ge(t,e){t&1&&(i(0,"div",4)(1,"div",5)(2,"span",6),r(3,"Loading products..."),n()()())}var te=(()=>{let e=class e{constructor(){this.categoriesList=[],this._apiService=m(h)}ngOnInit(){this._apiService.getAllCategories().subscribe(a=>{this.categoriesList=a})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-categories"]],standalone:!0,features:[d],decls:7,vars:1,consts:[[1,"container","mt-5"],[1,"row","categories"],[1,"card","col-lg-3","col-md-3","col-sm-6","my-5","mx-3","text-center","d-flex","align-center","justify-content-center","p-3",2,"width","18rem",3,"routerLink"],[1,"card-title"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["class","card col-lg-3 col-md-3 col-sm-6 my-5 mx-3 text-center d-flex align-center justify-content-center p-3","style","width: 18rem;",3,"routerLink"],["class","d-flex justify-content-center"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"h1"),r(2,"Categories"),n(),i(3,"div",1),C(4,fe,4,4,"a",7,E,!1,ge,4,0,"div",8),n()()),o&2&&(s(4),x(c.categoriesList))},dependencies:[_,M],styles:[".categories[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]});let t=e;return t})();var ve=(t,e)=>e.id;function he(t,e){if(t&1&&l(0,"app-product-card",7),t&2){let v=e.$implicit;b("product",v)}}function ye(t,e){t&1&&(i(0,"div",8)(1,"div",9)(2,"span",10),r(3,"Loading products..."),n()()())}var ie=(()=>{let e=class e{constructor(){this.productsList=[],this.title="",this.selectedValue="",this._apiService=m(h),this._route=m(I)}ngOnInit(){this._route.params.subscribe(a=>{this.title=a.name,this._apiService.getProductsByCategory(a.name).subscribe(o=>{this.productsList=o})})}onSelect(a){this.selectedValue=a,this._route.params.subscribe(o=>{this.title=o.name,this._apiService.getProductsByCategory(o.name,this.selectedValue).subscribe(c=>{this.productsList=c})})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-category-detail"]],standalone:!0,features:[d],decls:19,vars:4,consts:[[1,"container","mt-5"],[1,"row"],[1,"d-flex","justify-content-end","align-center"],[1,"dropdown","ml-2"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-secondary","dropdown-toggle"],[1,"dropdown-menu"],[1,"dropdown-item",3,"click"],[1,"col-4","col-md-3","col-sm-6","my-3",3,"product"],[1,"d-flex","justify-content-center"],["role","status",1,"spinner-border"],[1,"visually-hidden"],["class","col-4 col-md-3 col-sm-6 my-3",3,"product"],["class","d-flex justify-content-center"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"h1"),r(2),f(3,"titlecase"),n(),i(4,"div",1)(5,"div",2)(6,"div",3)(7,"button",4),r(8," Sort "),n(),i(9,"ul",5)(10,"li")(11,"a",6),S("click",function(){return c.onSelect("asc")}),r(12,"Asc"),n()(),i(13,"li")(14,"a",6),S("click",function(){return c.onSelect("desc")}),r(15,"Desc"),n()()()()(),C(16,he,1,1,"app-product-card",11,ve,!1,ye,4,0,"div",12),n()()),o&2&&(s(2),u(g(3,2,c.title)),s(14),x(c.productsList))},dependencies:[_,A],styles:[".dropdown[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}"]});let t=e;return t})();var ne=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-login"]],standalone:!0,features:[d],decls:3,vars:0,consts:[[1,"container","mt-5"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"h1"),r(2,"Login"),n()())}});let t=e;return t})();var oe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=p({type:e,selectors:[["app-cart"]],standalone:!0,features:[d],decls:3,vars:0,consts:[[1,"container","mt-5"]],template:function(o,c){o&1&&(i(0,"div",0)(1,"h1"),r(2,"Cart"),n()())}});let t=e;return t})();var re=[{path:"",component:Y},{path:"products",component:Z},{path:"products/:id",component:ee},{path:"categories",component:te},{path:"categories/:name",component:ie},{path:"login",component:ne},{path:"cart",component:oe}];var ae={providers:[J(re),z(),V()]};var Ce={providers:[q()]},ce=B(ae,Ce);var xe=()=>U(X,ce),Kt=xe;export{Kt as a};
