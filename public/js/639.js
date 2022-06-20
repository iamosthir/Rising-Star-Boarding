(self.webpackChunk=self.webpackChunk||[]).push([[639],{1639:(t,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const n={data:function(){return{is_loading:!0,groomings:[],paginateData:{}}},methods:{getGroomingHistory:function(){var t=this,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;axios.get(api2+"grooming-history?page="+s).then((function(t){return t.data})).then((function(s){t.groomings=s.groomings,t.paginateData=s.paginateData,t.is_loading=!1})).catch((function(t){console.error(t.response.data)}))},cancelOrder:function(t,s){var a=this;swal.fire({title:"Alert!",text:"Are you sure you want to cancel your booking?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes"}).then((function(n){n.isConfirmed&&axios.post(api2+"cancel-grooming",{groomingId:t}).then((function(t){return t.data})).then((function(t){"ok"==t.status?(swal.fire("Booking Canceled",t.msg,"success"),a.groomings[s].status="canceled",a.groomings[s].statusText="Canceled"):swal.fire("Failed",t.msg,"error")})).catch((function(t){console.error(t.response.data)}))}))}},created:function(){this.getGroomingHistory()}};const e=(0,a(1900).Z)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row"},[t.is_loading?a("div",{staticClass:"col-12"},[a("h3",{staticClass:"p-2"},[t._v("Recent Grooming History")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"row"},t._l(10,(function(t){return a("div",{key:t,staticClass:"col-12"},[a("skeleton",{attrs:{width:"100%",height:"30px"}})],1)})),0)]):t._e(),t._v(" "),t.is_loading?t._e():a("div",{staticClass:"col-md-12 mt-4"},[a("h3",{staticClass:"p-2"},[t._v("Recent Grooming History")]),t._v(" "),a("hr"),t._v(" "),a("div",{staticClass:"p-2"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",{staticClass:"table-body-c"},[t.groomings.length>0?t._l(t.groomings,(function(s,n){return a("tr",{key:n},[a("td",[t._v("#"+t._s(s.id))]),t._v(" "),a("td",[t._v(t._s(s.time))]),t._v(" "),a("td",[t._v(t._s(s.end||"-"))]),t._v(" "),a("td",["pending"==s.status?a("span",{staticClass:"badge bg-warning"},[t._v(t._s(s.statusText))]):"ongoing"==s.status?a("span",{staticClass:"badge bg-info"},[t._v(t._s(s.statusText))]):"canceled"==s.status?a("span",{staticClass:"badge bg-danger"},[t._v(t._s(s.statusText))]):"completed"==s.status?a("span",{staticClass:"badge bg-success"},[t._v(t._s(s.statusText))]):t._e()]),t._v(" "),a("td",[a("div",{staticClass:"dropdown"},[a("button",{staticClass:"btn btn-outline-success dropdown-toggle",attrs:{type:"button",id:"dropdownMenu2","data-bs-toggle":"dropdown","aria-expanded":"false"}}),t._v(" "),a("ul",{staticClass:"dropdown-menu",attrs:{"aria-labelledby":"dropdownMenu2"}},[a("li",[a("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"grooming-details",params:{id:s.id}},type:"button"}},[t._v("See Details")])],1),t._v(" "),"pending"==s.status?a("li",[a("button",{staticClass:"dropdown-item text-danger",attrs:{type:"button"},on:{click:function(a){return t.cancelOrder(s.id,n)}}},[t._v("Cancel Booking")])]):t._e()])])])])})):[t._m(1)]],2)])]),t._v(" "),a("div",{staticClass:"d-flex justify-content-center"},[a("pagination",{attrs:{data:t.paginateData},on:{"pagination-change-page":t.getGroomingHistory}})],1)])])}),[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",[a("tr",{staticClass:"table-active table-head"},[a("th",[t._v("Appointment ID")]),t._v(" "),a("th",[t._v("Appointment Date and Time")]),t._v(" "),a("th",[t._v("Ends at")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Action")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("tr",[a("td",{staticClass:"text-danger",attrs:{colspan:"6"}},[t._v("No booking records")])])}],!1,null,null,null).exports}}]);