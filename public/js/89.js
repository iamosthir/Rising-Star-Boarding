(self.webpackChunk=self.webpackChunk||[]).push([[89],{3089:(t,s,i)=>{"use strict";i.r(s),i.d(s,{default:()=>n});const a={data:function(){return{is_loading:!0,pricings:[]}},methods:{getPricing:function(){var t=this;axios.get(api+"get-pricings").then((function(t){return t.data})).then((function(s){t.pricings=s,t.is_loading=!1})).catch((function(t){console.error(t.response.data)}))}},created:function(){this.getPricing()}};const n=(0,i(1900).Z)(a,(function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("section",{attrs:{id:"pricing"}},[t._m(0),t._v(" "),i("div",{staticClass:"container section-content pb-5"},[t.is_loading?i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-md-8"},[i("skeleton",{attrs:{width:"100%",height:"365px"}})],1)]):t._e(),t._v(" "),t.is_loading?t._e():t._l(t.pricings,(function(s,a){return i("div",{key:a,staticClass:"package"},[i("div",{staticClass:"package-content"},[i("div",{staticClass:"package-border"}),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-6"},[i("div",{staticClass:"package-info"},[i("h2",[t._v(t._s(s.name))]),t._v(" "),i("p",[t._v(t._s(s.bio))])])]),t._v(" "),i("div",{staticClass:"col-lg-4 col-md-6"},[i("div",{staticClass:"package-card"},[i("div",{staticClass:"package-card-body",domProps:{innerHTML:t._s(s.desc)}}),t._v(" "),t._m(1,!0)])])])])])}))],2)])}),[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"section-title"},[i("h2",[t._v("Pricing")])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"package-card-footer"},[i("a",{staticClass:"rising-btn rising-btn-pink",attrs:{href:"/home/reservation"}},[t._v("Make reservation now")])])}],!1,null,null,null).exports}}]);