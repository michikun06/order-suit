(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"8Nc2":function(e,t,i){e.exports=i.p+"static/orderStep2-41243593b394ecb0ba25d169a23b258f.png"},Krov:function(e,t,i){e.exports=i.p+"static/orderStep3-314c48ec5846039955f953b5f030e621.png"},PGlZ:function(e,t,i){"use strict";i.d(t,"a",(function(){return u}));var n=i("q1tI");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e}).apply(this,arguments)}var o=new Map,s=new Map,c=0;function a(e){return Object.keys(e).filter(Boolean).sort().map((function(t){return t+"_"+("root"===t?(i=e.root)?(s.has(i)||(c+=1,s.set(i,c.toString())),s.get(i)):"0":e[t]);var i})).toString()}function l(e,t,i){if(void 0===i&&(i={}),!e)return function(){};var n=function(e){var t=a(e),i=o.get(t);if(!i){var n=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var i,o=t.isIntersecting&&r.thresholds.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=o),null==(i=n.get(t.target))||i.forEach((function(e){e(o,t)}))}))}),e);i={id:t,observer:r,elements:n},o.set(t,i)}return i}(i),r=n.id,s=n.observer,c=n.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),s.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(c.delete(e),s.unobserve(e)),0===c.size&&(s.disconnect(),o.delete(r))}}function p(e){return"function"!=typeof e.children}var d=function(e){var t,i;function o(t){var i;return(i=e.call(this,t)||this).node=null,i._unobserveCb=null,i.handleNode=function(e){i.node&&(i.unobserve(),e||i.props.triggerOnce||i.props.skip||i.setState({inView:!!i.props.initialInView,entry:void 0})),i.node=e||null,i.observeNode()},i.handleChange=function(e,t){e&&i.props.triggerOnce&&i.unobserve(),p(i.props)||i.setState({inView:e,entry:t}),i.props.onChange&&i.props.onChange(e,t)},i.state={inView:!!t.initialInView,entry:void 0},i}i=e,(t=o).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i;var s=o.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,i=e.root,n=e.rootMargin,r=e.trackVisibility,o=e.delay;this._unobserveCb=l(this.node,this.handleChange,{threshold:t,root:i,rootMargin:n,trackVisibility:r,delay:o})}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!p(this.props)){var e=this.state,t=e.inView,i=e.entry;return this.props.children({inView:t,entry:i,ref:this.handleNode})}var o=this.props,s=o.children,c=o.as,a=o.tag,l=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(o,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(n.createElement)(c||a||"div",r({ref:this.handleNode},l),s)},o}(n.Component);function u(e){var t=void 0===e?{}:e,i=t.threshold,r=t.delay,o=t.trackVisibility,s=t.rootMargin,c=t.root,a=t.triggerOnce,p=t.skip,d=t.initialInView,u=Object(n.useRef)(),h=Object(n.useState)({inView:!!d}),b=h[0],f=h[1],g=Object(n.useCallback)((function(e){void 0!==u.current&&(u.current(),u.current=void 0),p||e&&(u.current=l(e,(function(e,t){f({inView:e,entry:t}),t.isIntersecting&&a&&u.current&&(u.current(),u.current=void 0)}),{root:c,rootMargin:s,threshold:i,trackVisibility:o,delay:r}))}),[i,c,s,a,p,o,r]);Object(n.useEffect)((function(){u.current||!b.entry||a||p||f({inView:!!d})}));var m=[g,b.inView,b.entry];return m.ref=m[0],m.inView=m[1],m.entry=m[2],m}d.displayName="InView",d.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},bCO5:function(e,t,i){e.exports=i.p+"static/予約1-3cd261017f861f1c259feb651b59ec08.png"},pi3A:function(e,t,i){"use strict";i.r(t);var n=i("nKUr"),r=i("q1tI"),o=i("Bl7J"),s=i("vOnD"),c=i("PGlZ"),a=i("ZMKu"),l=i("Wbzz"),p=i("1eu9"),d=i.n(p),u=s.a.section.withConfig({displayName:"orderTop__OrderTopWrapper",componentId:"sc-94566h-0"})(["padding:60px 20px;color:#fff;text-align:center;.title{font-size:1.7em;font-weight:bolder;letter-spacing:0.15em;}.subTitle{font-size:0.4em;line-height:1.4em;font-weight:lighter;letter-spacing:0.15em;}@media (min-width:768px){padding:80px 30px;.title{font-size:2.5em;font-weight:bolder;letter-spacing:0.15em;}.subTitle{font-size:0.8em;}}"]),h=function(e){var t=e.title,i=e.paragraph,o=e.id,s=Object(l.c)("3733463018"),p=Object(a.b)(),h=Object(c.a)({threshold:.25}),b=h[0],f=h[1];return Object(r.useEffect)((function(){f&&p.start("visible")}),[p,f]),Object(n.jsx)(d.a,{id:"perks",Tag:"section",fluid:s.file.childImageSharp.fluid,children:Object(n.jsx)(u,{id:o,children:Object(n.jsx)("div",{className:"content-container",children:Object(n.jsxs)(a.a.div,{ref:b,animate:p,initial:"hidden",variants:{visible:{opacity:1,y:0},hidden:{opacity:0,y:25}},transition:{ease:"easeOut",duration:1.25,delay:.35},children:[Object(n.jsx)("h2",{className:"title",children:t}),Object(n.jsx)("p",{className:"subTitle",children:i})]})})})})},b=s.a.section.withConfig({displayName:"orderContent__OrderTopWrapper",componentId:"sc-1i8muxr-0"})(["padding:15px 20px;color:black;text-align:center;background-color:#fff;.title{font-size:1.1em;font-weight:bolder;letter-spacing:0.15em;border-bottom:solid 1px #191970;}.subTitle{font-size:0.5em;line-height:1.5rem;font-weight:lighter;letter-spacing:0.15em;padding:1rem;margin-bottom:0;}.subTitle2{padding:0 0 1rem;font-size:0.6em;margin-top:0;}.image{text-align:left;}@media (min-width:768px){padding:30px 30px;.title{font-size:1.7em;font-weight:bolder;letter-spacing:0.15em;}.subTitle{font-size:0.8em;}}"]),f=function(e){var t=e.title,i=e.description,r=e.description2,o=e.image;return Object(n.jsx)(b,{children:Object(n.jsxs)("div",{className:"content-container",children:[Object(n.jsx)("h2",{className:"title",children:t}),Object(n.jsx)("p",{className:"subTitle",children:i}),Object(n.jsx)("p",{className:"subTitle2",children:r}),Object(n.jsx)("img",{className:"image",src:o,width:"80%",alt:"予約の画像"})]})})},g=i("bCO5"),m=i.n(g),v=i("8Nc2"),j=i.n(v),O=i("Krov"),y=i.n(O);t.default=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(o.a,{children:[Object(n.jsx)(h,{id:"Top",title:"How to order",paragraph:"納品までの流れ・出張採寸"}),Object(n.jsxs)("div",{style:{padding:"40px 0 40px",backgroundColor:"#fff"},children:[Object(n.jsx)(f,{title:"Step①　ご予約",description:"当サイトのトップページ（左画像）の「訪問採寸を予約」より、予約ページへ移動してください。その後　予約ページにて必須項目を記入してから「送信」ボタンを入力してください。",image:m.a}),Object(n.jsx)(f,{title:"Step②　出張訪問",description:"お客様の入力先した日時、住所にスタッフが訪問いたします。主な流れは、カウンセリング　→　生地、デザイン選び　→　採寸　→　お支払いとなっております。当店はハイブリッド製法を用いており、カウンセリング時にお客様の身長と体重をお伺いすることがございますので、正確な値をご準備ください。",description2:"※ お支払いは現金、または振り込みとなっております。",image:j.a}),Object(n.jsx)(f,{title:"Step③　納品",description:"約１ヶ月半後に納品となります。代表の水谷より、大切に手渡しをさせていただきます。",image:y.a})]})]})})}}}]);
//# sourceMappingURL=component---src-pages-order-js-a24d9fdfacca7a208b64.js.map