(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(t,e,n){t.exports=n(50)},29:function(t,e,n){},43:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},50:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),r=n(20),c=n.n(r),o=(n(29),n(6)),s=n(7),u=n(9),l=n(8),f=n(10),h=n(52),d=n(54),m=n(53),p=n(11),v=n.n(p),k=n(12),j=n(51),b=n(21),g=n.n(b),O=(n(43),0),w=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).handleInfiniteLoad=function(){O+=10,n.setState({isInfiniteLoading:!0});var t=n.state.attractions;fetch("https://travel-server-api.davidc.ai/attractions?token=10ktfn&limit=20&skip=".concat(O)).then(function(t){return t.json()}).then(function(e){n.setState({attractions:t.concat(e)}),n.setState({isInfiniteLoading:!1})})},n.state={attractions:[],isInfiniteLoading:!1},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Object(k.a)(v.a.mark(function t(){var e=this;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:fetch("https://travel-server-api.davidc.ai/attractions?token=10ktfn&limit=20&skip=0").then(function(t){return t.json()}).then(function(t){return e.setState({attractions:t})});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"elementInfiniteLoad",value:function(){return i.a.createElement("div",{className:"infinite-list-loading"},"\u6b63\u5728\u52a0\u8f7d....")}},{key:"render",value:function(){var t=this.state.attractions.map(function(t,e){return i.a.createElement("div",{className:"attraction-item",key:e},i.a.createElement(j.a,{to:"/attraction/".concat(t._id)},t.name))});return i.a.createElement(g.a,{containerHeight:600,elementHeight:40,infiniteLoadBeginEdgeOffset:580,onInfiniteLoad:this.handleInfiniteLoad,loadingSpinnerDelegate:this.elementInfiniteLoad(),isInfiniteLoading:this.state.isInfiniteLoading},t)}}]),e}(a.Component),E=(n(45),function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={attraction:{}},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=Object(k.a)(v.a.mark(function t(){var e,n=this;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=this.props.match.params.id,fetch("https://travel-server-api.davidc.ai/attractions/".concat(e,"?token=10ktfn")).then(function(t){return t.json()}).then(function(t){document.title=t.name,n.setState({attraction:t})});case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.attraction;return i.a.createElement("div",{className:"attraction-detail"},i.a.createElement("div",{className:"name"},t.name),i.a.createElement("div",{className:"detail",dangerouslySetInnerHTML:{__html:t.detail}}))}}]),e}(a.Component)),y=(n(47),function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this,t))).state={attractions:[]},n}return Object(f.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state.attractions;return console.log("attractions::",t),i.a.createElement(h.a,null,i.a.createElement(d.a,null,i.a.createElement(m.a,{exact:!0,path:"/",component:w}),i.a.createElement(m.a,{exact:!0,path:"/attractions",component:w}),i.a.createElement(m.a,{exact:!0,path:"/attraction/:id",component:E})))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[24,2,1]]]);
//# sourceMappingURL=main.5d2a2504.chunk.js.map