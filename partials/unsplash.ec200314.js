!function(){function e(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function t(e,t){return t.get?t.get.call(e):t.value}function r(r,a){return t(r,e(r,a,"get"))}function a(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function n(e,t,r){a(e,t),t.set(e,r)}function i(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function s(t,r,a){return i(t,e(t,r,"set"),a),a}function o(e,t){if(t.set){if(!t.get)throw new TypeError("attempted to read set only private field");return"__destrWrapper"in t||(t.__destrWrapper={set value(r){t.set.call(e,r)},get value(){return t.get.call(e)}}),t.__destrWrapper}if(!t.writable)throw new TypeError("attempted to set read only private field");return t}function l(t,r){return o(t,e(t,r,"update"))}var c=new WeakMap,u=new WeakMap,p=new WeakMap,h=new WeakMap,d=new WeakMap;function g({results:e}){return e.map((({urls:e,alt_description:t})=>`<li class="gallery__item">\n        <img src="${e.small}" alt="${t}" class="gallery-img">\n    </li>`)).join("")}function f(e,t,r){w.gallery.insertAdjacentHTML("beforeend",r),t>e?w.loadMoreBtn.classList.add("is-hidden"):w.loadMoreBtn.classList.remove("is-hidden")}const w={form:document.querySelector(".js-search-form"),loadMoreBtn:document.querySelector(".js-load-more"),gallery:document.querySelector(".js-gallery")},y=new class{async getData(){Object.assign(r(this,d),{page:r(this,p),query:r(this,h)});const e=await fetch(r(this,c)+new URLSearchParams(r(this,d)));if(!e.ok)throw new Error(error);return this.updatePage(),await e.json()}get page(){return r(this,p)}set page(e){s(this,p,e)}updatePage(){l(this,p).value++}resetPage(){s(this,p,1)}get query(){return r(this,h)}set query(e){s(this,h,e)}constructor(){n(this,c,{writable:!0,value:"https://api.unsplash.com/search/photos/?"}),n(this,u,{writable:!0,value:"dLJeZqeou3_BYhf5-_GYI9_T-1QpbbZYg0-MlkmGVyg"}),n(this,p,{writable:!0,value:void 0}),n(this,h,{writable:!0,value:void 0}),n(this,d,{writable:!0,value:{client_id:r(this,u),query:r(this,h),per_page:20,page:r(this,p),color:"black",orientation:"portrait"}}),s(this,p,1),s(this,h,"")}};w.form.addEventListener("submit",(async function(e){e.preventDefault();const{query:t}=e.currentTarget.elements;if(""!==t.value)try{y.query=t.value.trim(),y.resetPage(),w.gallery.innerHTML="";const e=await y.getData(),{total_pages:r}=e,a=g(e);f(r,y.page,a)}catch(e){console.log(e)}finally{w.form.reset()}})),w.loadMoreBtn.addEventListener("click",(async function(){try{const e=await y.getData(),{total_pages:t}=e,r=g(e);f(t,y.page,r)}catch(e){console.log(e)}}))}();
//# sourceMappingURL=unsplash.ec200314.js.map
