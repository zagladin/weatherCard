(this.webpackJsonpweather_forecast=this.webpackJsonpweather_forecast||[]).push([[0],{1:function(e,t,a){e.exports={wrapper:"styles_wrapper__3h_Vp",content:"styles_content__2SmwK",temperature:"styles_temperature__1FURS",tempValue:"styles_tempValue__VjEx5",tempText:"styles_tempText__jZpZU",city:"styles_city__3F--z",sun:"styles_sun__1G1OS",iconAndState:"styles_iconAndState__1m2nj",pops:"styles_pops__3O6mJ",icon:"styles_icon__1niIR",optional:"styles_optional__YtqOg",value:"styles_value__1jidG",hourlyForecast:"styles_hourlyForecast__3S-X7",imageWeather:"styles_imageWeather__1NOQf",rain:"styles_rain__2q71I",mist:"styles_mist__36mk1",clouds:"styles_clouds__7BliN",clear:"styles_clear__jp5-U"}},10:function(e,t,a){e.exports={wrapper:"styles_wrapper__1FJBo",selectors:"styles_selectors__1_GFH",links:"styles_links__1YH7g",refreshButton:"styles_refreshButton__-T3DC",newsList:"styles_newsList__160yV",copyright:"styles_copyright__2jBBR",newsLink:"styles_newsLink__1qhO1"}},13:function(e,t,a){e.exports={selector:"styles_selector__3PsOo",active:"styles_active__2NvZ9"}},24:function(e,t,a){e.exports={background:"Wrapper_background__2NZfL"}},25:function(e,t,a){e.exports={spinner:"styles_spinner__1daT-"}},26:function(e,t,a){e.exports=a.p+"static/media/Bars.2fc9d01e.svg"},28:function(e,t,a){e.exports=a(52)},33:function(e,t,a){},5:function(e,t,a){e.exports={wrapper:"styles_wrapper__l59jG",article:"styles_article__2gJql",content:"styles_content__38NpD",description:"styles_description__1LqAR",image:"styles_image__35s37",title:"styles_title__mnylx",link:"styles_link__1iaZy"}},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(23),l=a.n(c),i=(a(33),a(3)),s=a(24),o=a.n(s),u=a(9),m=a(8),p=a.n(m),d=a(11),h=a(12),f=a.n(h),v="23cea5f070c059e9dfe4160788742b59",g=function(){var e=Object(d.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.openweathermap.org/data/2.5/onecall",n="".concat("https://api.openweathermap.org/data/2.5/onecall","?lat=").concat(t,"&lon=").concat(a,"&exclude=minutely,daily,alerts&units=metric&appid=").concat(v),e.prev=2,e.next=5,f.a.get(n);case 5:if(!(r=e.sent)){e.next=8;break}return e.abrupt("return",r.data);case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.warn("Erro while getting weahter data ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}(),w=function(){var e=Object(d.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.openweathermap.org/geo/1.0/reverse",n="".concat("https://api.openweathermap.org/geo/1.0/reverse","?lat=").concat(t,"&lon=").concat(a,"&limit=1&appId=").concat(v),e.prev=2,e.next=5,f.a.get(n);case 5:if(!(r=e.sent)){e.next=8;break}return e.abrupt("return",r.data);case 8:e.next=13;break;case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,a){return e.apply(this,arguments)}}(),_=function(){var e=Object(d.a)(p.a.mark((function e(t){var a,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://newsapi.org/v2/top-headlines","01676b1d03984b97a1fe8635b7c59cd0",a="".concat("https://newsapi.org/v2/top-headlines","?sources=").concat(t,"&apiKey=").concat("01676b1d03984b97a1fe8635b7c59cd0"),e.prev=3,e.next=6,f.a.get(a);case 6:if(!(n=e.sent)){e.next=9;break}return e.abrupt("return",n.data);case 9:e.next=14;break;case 11:return e.prev=11,e.t0=e.catch(3),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),E=a(10),y=a.n(E),b=a(25),C=a.n(b),N=a(26),x=a.n(N),k=function(){return r.a.createElement("img",{src:x.a,className:C.a.spinner,alt:"loader"})},j=a(13),O=a.n(j),A=function(e){var t=e.id,a=e.selected,n=e.title,c=e.selectResource;return r.a.createElement("div",{className:a?"".concat(O.a.selector," ").concat(O.a.active):"".concat(O.a.selector),onClick:function(){return c(t)}},n)},F=a(5),L=a.n(F),z=function(e){var t=e.news;return r.a.createElement("div",{className:L.a.wrapper},t.map((function(e,t){return r.a.createElement("div",{className:L.a.article,key:t},r.a.createElement("div",{className:L.a.content},r.a.createElement("img",{className:L.a.image,src:e.urlToImage,alt:"news"}),r.a.createElement("div",{className:L.a.description},r.a.createElement("div",{className:L.a.title},e.title),r.a.createElement("div",{className:L.a.link},r.a.createElement("a",{className:L.a.newsLink,href:e.url,target:"_blank",rel:"noopener noreferrer"},e.description)))))})))},B=(r.a.memo((function(){var e=Object(n.useState)({titles:"",descriptions:"",articles:[],resource:"google-News-ru",totalResults:""}),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){b(a.resource)}),[a.resource]);var l=Object(n.useState)(!1),s=Object(i.a)(l,2),o=s[0],m=s[1],p=Object(n.useState)(!1),d=Object(i.a)(p,2),h=d[0],f=d[1],v=Object(n.useState)(!1),g=Object(i.a)(v,2),w=g[0],E=g[1],b=function(e,t){switch(m(!0),t){case"google":f(!0),E(!1);break;case"lenta":E(!0),f(!1);break;default:f(!0)}_(e).then((function(e){m(!1),c((function(t){return Object(u.a)({},t,{articles:e.articles,totalResults:e.totalResults})}))})).catch((function(e){return console.log(e)}))};return r.a.createElement("div",{className:y.a.wrapper},r.a.createElement("div",{className:y.a.selectors},r.a.createElement("div",{className:y.a.links},r.a.createElement(A,{title:"Google",id:"google",selected:h,selectResource:function(e){return b("google-News-ru",e)}}),r.a.createElement(A,{title:"Lenta",id:"lenta",selected:w,selectResource:function(e){return b("lenta",e)}})),r.a.createElement("div",{className:y.a.copyright},"powered by NewsAPI.org")),o?r.a.createElement(k,null):r.a.createElement(z,{news:a.articles}))})),a(7)),M=a.n(B),S=function(e){return new Date(1e3*e).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function D(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),l=Object(i.a)(c,2),s=l[0],o=l[1],m=Object(n.useState)({temperature:"",humidity:"",pressure:"",pops:"",accuracy:"",icon:"",UVI:"",wind:"",windAngle:"",feelsLike:"",sunrise:"",sunset:""}),p=Object(i.a)(m,2),d=p[0],h=p[1],f=Object(n.useState)([]),v=Object(i.a)(f,2),_=v[0],E=v[1],y=function(e,t,a){h((function(e){return Object(u.a)({},e,{accuracy:a.toFixed(2)})})),r(!0),w(e,t).then((function(e){return o(e[0].name)})).catch((function(e){return console.warn("Cannot get location info! ",e)})),g(e,t).then((function(e){var t=e.current,a=t.weather[0].icon,n="http://openweathermap.org/img/wn/".concat(a,".png"),r=.75*t.pressure,c=t.weather[0].main,l=S(t.sunrise),i=S(t.sunset);h((function(e){return Object(u.a)({},e,{temperature:t.temp.toFixed(1),UVI:t.uvi,feelsLike:t.feels_like.toFixed(1),humidity:t.humidity,pressure:r,pops:c,wind:t.wind_speed,windAngle:t.wind_deg,icon:n,sunrise:l,sunset:i})})),E(e.hourly.slice(0,12))})).catch((function(e){return console.error(e)})).finally((function(){return r(!1)}))};return{currentWeather:d,hourlyWeather:_,loading:a,cityName:s,getLocation:function(){if(navigator.geolocation){navigator.geolocation.getCurrentPosition((function(e){var t=e.coords.latitude,a=e.coords.longitude,n=e.coords.accuracy;y(t,a,n)}),(function(e){1===e.code?alert("Error: Access to geolocation is denied!"):2===e.code&&alert("Error: Position is unavailable!")}),{maximumAge:6e5,enableHighAccuracy:!0})}else alert("Geolocation is not supported by this browser.")}}}var W=function(e){var t=e.changeColor,a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],s=c[1],o=["#000000","#ff0000","#001f3f","#0074D9","#3D9970","#2ECC40","#FF4136","#85144b","#F012BE","#E27D60","#85DCB","#E8A87C","#C38D9E","#41B3A3","#242582","#553D67","#F64C72","#99738E","#2F2FA2","#8D8741","#659DBD","#DAAD86","#BC986A","#FBEEC1","#379683","#5CDB95","#3FEEE6","#97CAEF","#5CDB95","5D5C61","#557A95","#501B1D","#64485C","#ADADAD","#190061","#3500D3","#282828","#950740","#C3073F","#AFD275","7E685A","#80777d","#66FCF1","#1F2833","#e36a6a","#AC3B61","#123C69","#2C3531","#116466"],u=D().getLocation;return r.a.createElement("div",{className:M.a.colorChanger},r.a.createElement("span",{role:"img","aria-label":"palette",title:"Change color",onClick:function(){return s((function(e){return!e}))}},"\ud83c\udfa8"),r.a.createElement("span",{role:"img","aria-label":"fullscreen",title:"Fullscreen",onClick:u},"\ud83d\udd04"),r.a.createElement("div",{className:l?"".concat(M.a.palette," ").concat(M.a.visible):"".concat(M.a.palette),id:"palette"},r.a.createElement("div",{className:M.a.wrapper},o.map((function(e){return r.a.createElement("div",{key:e,className:M.a.colorBlock,style:{background:e},onClick:function(){return t(e)}})}))),r.a.createElement("div",{className:M.a.pointer})))},P=a(1),R=a.n(P),T=a(27),V=a.n(T),q=a(2),U=function(e){var t=e.width,a=e.height,n=e.fill,c=Object(q.a)(e,["width","height","fill"]);return r.a.createElement("svg",Object.assign({"data-qa":"icon","data-role":"icon-humidity",width:t,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:n},c),r.a.createElement("path",{d:"M480 64A416.32 416.32 0 0 0 64 480C64 709.504 250.496 896 480 896c2.24 0 4.48-0.256 6.72-0.768 19.52-0.256 39.04-1.984 57.792-4.992a252.288 252.288 0 0 1-24-60.8c-13.248 1.536-26.752 2.56-40.512 2.56A351.552 351.552 0 0 1 128 480C128 285.248 285.248 128 480 128a352.256 352.256 0 0 1 340.992 264c-0.256 0-0.256 0 0 0 1.984 7.744 3.008 15.744 4.48 23.744l14.72 17.28c12.288 13.696 32.576 37.952 54.784 66.944 0.256-6.464 1.024-13.248 1.024-19.968 0-33.472-4.224-67.2-12.224-99.52a83.84 83.84 0 0 0-0.768-4.48A416.768 416.768 0 0 0 480 64z m0 128C321.28 192 192 321.28 192 480a32 32 0 1 0 64 0 223.616 223.616 0 0 1 299.008-211.008l48.96-48.512a287.744 287.744 0 0 0-119.68-28.224C482.688 192 481.408 192 480 192z m191.232 63.744a32.448 32.448 0 0 0-21.952 9.728l-191.808 192a31.872 31.872 0 1 0 45.056 45.056l192.192-192a32.192 32.192 0 0 0 7.04-35.264 32.64 32.64 0 0 0-30.528-19.52zM768 447.232l-24 27.776s-40.96 46.976-81.984 105.472c-20.736 29.248-41.536 61.504-57.536 93.248C588.48 705.472 576 736.256 576 768c0 105.728 86.272 192 192 192s192-86.272 192-192c0-31.744-12.48-62.528-28.48-94.272-16-31.744-36.8-64-57.536-93.248-40.96-58.496-81.984-105.472-81.984-105.472z m0 100.736c14.016 17.024 27.008 31.04 54.016 69.312 19.2 27.712 38.464 57.984 52.48 85.44 14.016 27.264 21.504 52.8 21.504 65.28 0 71.04-56.96 128-128 128-71.04 0-128-56.96-128-128 0-12.48 7.488-38.016 21.504-65.28 14.016-27.52 33.28-57.728 52.48-85.44 27.008-38.272 40-52.288 54.016-69.248z"}))};U.defaultProps={width:24,height:24,fill:"#fff"};var I=r.a.memo(U),H=function(e){var t=e.width,a=e.height,n=e.fill,c=Object(q.a)(e,["width","height","fill"]);return r.a.createElement("svg",Object.assign({"data-qa":"icon","data-role":"icon-Wind",width:t,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:n},c),r.a.createElement("path",{d:"M128 128v768h64V128z m160 0c-17.728 0-32 14.272-32 32v320c0 8.96 3.776 17.728 10.496 23.744 6.784 6.016 15.744 8.96 24.512 8.256l640-64A32.256 32.256 0 0 0 960 416v-192a32.256 32.256 0 0 0-28.992-32l-640-64H288zM320 195.52l64 6.208v236.544l-64 6.208z m128 12.48l64 6.528v210.944L448 432z m128 12.992l64 6.528v184.96l-64 6.528z m128 12.8l64 6.208v160l-64 6.272z m128 12.736l64 6.464v134.016l-64 6.464z"}))};H.defaultProps={width:24,height:24,fill:"#fff"};var Z=r.a.memo(H),G=function(e){var t=e.width,a=e.height,n=e.fill,c=Object(q.a)(e,["width","height","fill"]);return r.a.createElement("svg",Object.assign({"data-qa":"icon","data-role":"icon-Pressure",width:t,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:n},c),r.a.createElement("path",{d:"M480 64A416.32 416.32 0 0 0 64 480a416.192 416.192 0 0 0 186.24 346.752l8 5.248h443.52l8-5.248A416.192 416.192 0 0 0 896 480C896 250.496 709.504 64 480 64z m0 64C674.752 128 832 285.248 832 480c0 120-60.992 224.512-152.768 288h-398.72C188.992 704.512 128 600 128 480 128 285.248 285.248 128 480 128z m0 64c-17.728 0-32 14.272-32 32s14.272 32 32 32 32-14.272 32-32-14.272-32-32-32z m191.232 63.744a32.448 32.448 0 0 0-21.952 9.728l-191.808 192a31.872 31.872 0 1 0 45.056 45.056l192.192-192a32.192 32.192 0 0 0 7.04-35.264 32.64 32.64 0 0 0-30.528-19.52zM288 256c-17.728 0-32 14.272-32 32s14.272 32 32 32 32-14.272 32-32-14.272-32-32-32z m-64 192c-17.728 0-32 14.272-32 32s14.272 32 32 32 32-14.272 32-32-14.272-32-32-32z m512 0c-17.728 0-32 14.272-32 32s14.272 32 32 32 32-14.272 32-32-14.272-32-32-32z m-448 192c-17.728 0-32 14.272-32 32s14.272 32 32 32 32-14.272 32-32-14.272-32-32-32z m384 0c-17.728 0-32 14.272-32 32s14.272 32 32 32 32-14.272 32-32-14.272-32-32-32z"}))};G.defaultProps={width:24,height:24,fill:"#fff"};var J=r.a.memo(G),K=function(e){var t=e.width,a=e.height,n=e.fill,c=Object(q.a)(e,["width","height","fill"]);return r.a.createElement("svg",Object.assign({"data-qa":"icon","data-role":"icon-GeoPoint",width:t,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 12 16",fill:n},c),r.a.createElement("path",{d:"M6.00163 0C2.80647 0 0.207031 2.59944 0.207031 5.79456C0.207031 9.75981 5.39262 15.581 5.61341 15.8269C5.82078 16.0579 6.18284 16.0575 6.38984 15.8269C6.61063 15.581 11.7962 9.75981 11.7962 5.79456C11.7962 2.59944 9.19675 0 6.00163 0ZM6.00163 8.70997C4.39406 8.70997 3.08625 7.40212 3.08625 5.79456C3.08625 4.187 4.39409 2.87919 6.00163 2.87919C7.60916 2.87919 8.91697 4.18703 8.91697 5.79459C8.91697 7.40216 7.60916 8.70997 6.00163 8.70997Z",fill:n}))};K.defaultProps={width:24,height:24,fill:"#fff"};var Y=K,Q=function(e){var t=e.width,a=e.height,n=e.fill,c=Object(q.a)(e,["width","height","fill"]);return r.a.createElement("svg",Object.assign({"data-qa":"icon","data-role":"icon-Sunrise",width:t,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:n},c),r.a.createElement("path",{d:"M128 512h170.666667a213.333333 213.333333 0 0 1 213.333333-213.333333 213.333333 213.333333 0 0 1 213.333333 213.333333h170.666667a42.666667 42.666667 0 0 1 42.666667 42.666667 42.666667 42.666667 0 0 1-42.666667 42.666666H128a42.666667 42.666667 0 0 1-42.666667-42.666666 42.666667 42.666667 0 0 1 42.666667-42.666667m512 0a128 128 0 0 0-128-128 128 128 0 0 0-128 128h256M512 85.333333l101.973333 145.92C582.4 219.733333 547.84 213.333333 512 213.333333c-35.84 0-70.4 6.4-101.973333 17.92L512 85.333333M142.506667 298.666667l177.493333-14.933334A307.2 307.2 0 0 0 253.44 362.666667c-18.773333 31.573333-29.44 64-35.413333 97.706666L142.506667 298.666667m738.56 0l-75.52 161.706666a299.648 299.648 0 0 0-101.546667-177.066666l177.066667 15.36m-338.773334 396.8l132.693334 132.693333a42.496 42.496 0 1 1-60.16 60.16L512 785.493333l-102.826667 102.826667a42.496 42.496 0 1 1-60.16-60.16l132.693334-132.693333c8.96-8.533333 19.2-12.8 30.293333-12.8 11.093333 0 21.333333 4.266667 30.293333 12.8z",fill:n}))};Q.defaultProps={width:30,height:30,fill:"#fff"};var X=Q,$=function(e){var t=e.width,a=e.height,n=e.fill,c=Object(q.a)(e,["width","height","fill"]);return r.a.createElement("svg",Object.assign({"data-qa":"icon","data-role":"icon-Sunset",width:t,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1024 1024",fill:n},c),r.a.createElement("path",{d:"M128 512 298.666667 512C298.666667 394.24 394.24 298.666667 512 298.666667 629.76 298.666667 725.333333 394.24 725.333333 512L896 512C919.466667 512 938.666667 531.2 938.666667 554.666667 938.666667 578.133333 919.466667 597.333333 896 597.333333L128 597.333333C104.533333 597.333333 85.333333 578.133333 85.333333 554.666667 85.333333 531.2 104.533333 512 128 512M640 512C640 441.173333 582.826667 384 512 384 441.173333 384 384 441.173333 384 512L640 512M512 85.333333 613.973333 231.253333C582.4 219.733333 547.84 213.333333 512 213.333333 476.16 213.333333 441.6 219.733333 410.026667 231.253333L512 85.333333M142.506667 298.666667 320 283.733333C294.4 305.493333 271.36 331.946667 253.44 362.666667 234.666667 394.24 224 426.666667 218.026667 460.373333L142.506667 298.666667M881.066667 298.666667 805.546667 460.373333C799.573333 426.666667 788.053333 393.813333 770.133333 362.666667 752.213333 331.946667 729.6 305.066667 704 283.306667L881.066667 298.666667M542.293333 883.626667 674.986667 750.933333C691.626667 734.293333 691.626667 706.986667 674.986667 690.346667 658.346667 673.706667 631.466667 673.706667 614.826667 690.346667L512 793.173333 409.173333 690.346667C392.533333 673.706667 365.653333 673.706667 349.013333 690.346667 332.373333 706.986667 332.373333 734.293333 349.013333 750.933333L481.706667 883.626667C490.666667 891.733333 500.906667 896 512 896 523.093333 896 533.333333 891.733333 542.293333 883.626667Z"}))};$.defaultProps={width:30,height:30,fill:"#fff"};var ee=$,te=function(e){var t=e.width,a=e.height,n=e.fill,c=Object(q.a)(e,["width","height","fill"]);return r.a.createElement("svg",Object.assign({"data-qa":"icon","data-role":"icon-GeoPoint",width:t,height:a,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1025 1024",fill:n},c),r.a.createElement("path",{d:"M315.507 561.634c5.726-6.222 5.344-15.91-0.864-21.661-6.222-5.765-15.938-5.393-21.703 0.827-2.514 2.714-61.293 67.65-36.072 170.727 16.963 69.328 85.197 105.097 88.093 106.585a15.266 15.266 0 0 0 6.999 1.7c5.56 0 10.921-3.034 13.65-8.316 3.888-7.524 0.935-16.782-6.58-20.686-0.586-0.304-58.744-31.066-72.328-86.584-8.865-36.23-6.78-71.14 6.2-103.76 9.725-24.44 22.3-38.494 22.605-38.832zM355.575 138.883h165.964c14.136 0 25.594-11.46 25.594-25.595s-11.458-25.594-25.594-25.594H355.575c-14.136 0-25.595 11.459-25.595 25.594s11.46 25.595 25.595 25.595zM355.575 238.383h165.964c14.136 0 25.594-11.46 25.594-25.595s-11.458-25.595-25.594-25.595H355.575c-14.136 0-25.595 11.46-25.595 25.595s11.46 25.595 25.595 25.595z",fill:n}),r.a.createElement("path",{d:"M661.818 786.048c-11.317-8.473-27.358-6.166-35.829 5.149-56.752 75.8-170.456 126.624-296.556 69.29-44.805-20.37-80.644-56.498-100.913-101.727-29.01-64.727-31.59-133.825-7.265-194.565 23.47-58.607 70.46-105.91 128.924-129.782 12.11-4.945 19.934-16.57 19.934-29.617v-55.775c0-6.602 5.579-12.18 12.181-12.18h112.529c6.602 0 12.18 5.578 12.18 12.18v55.78c0 13.045 7.824 24.668 19.931 29.611 13.085 5.342 28.026-0.933 33.371-14.02 3.262-7.99 2.193-16.67-2.112-23.435v-47.936c0-34.943-28.428-63.37-63.37-63.37H382.296c-34.942 0-63.37 28.427-63.37 63.37v43.188c-65.693 30.439-118.201 85.564-145.19 152.956-14.313 35.745-21.134 73.574-20.27 112.438 0.916 41.092 10.45 82.17 28.344 122.093 25.374 56.614 70.278 101.856 126.439 127.392 42.71 19.418 86.795 29.22 130.317 29.218 24.943 0 49.709-3.221 73.905-9.698 61.364-16.425 116.231-53.619 154.499-104.73 8.47-11.316 6.165-27.357-5.151-35.83z",fill:n}),r.a.createElement("path",{d:"M679.33 454.293c-8.283 0-14.998 6.716-14.998 14.999v170.515c0 24.239-6.433 47.84-17.65 64.754-10.126 15.266-22.892 23.673-35.947 23.673-13.056 0-25.823-8.407-35.947-23.673-11.218-16.914-17.651-40.515-17.651-64.754V469.292c0-8.284-6.716-14.999-14.999-14.999s-14.998 6.716-14.998 14.999v170.515c0 30.427 8.043 59.314 22.649 81.334 15.864 23.918 37.51 37.091 60.947 37.091s45.083-13.172 60.946-37.09c14.606-22.023 22.65-50.909 22.65-81.335V469.292c-0.002-8.283-6.718-14.999-15.001-14.999zM859.688 454.743c-8.036-2.011-16.18 2.871-18.193 10.906l-54.047 215.837L733.4 465.649c-2.014-8.037-10.16-12.916-18.194-10.906-8.035 2.012-12.918 10.158-10.906 18.193l68.325 272.86c1.713 6.827 7.808 11.594 14.822 11.594 7.015 0 13.11-4.767 14.823-11.6l68.325-272.854c2.012-8.035-2.871-16.18-10.907-18.193z",fill:n}))};te.defaultProps={width:40,height:40,fill:"#fff"};var ae=r.a.memo(te),ne=a(6),re=a.n(ne),ce=r.a.memo((function(e){var t=e.dateTime,a=e.temperature,n=e.feelsTemp,c=e.icon,l=e.pops,i=e.uvindex,s=e.wind;return r.a.createElement("div",{className:re.a.hourlyWeatherWrapper},r.a.createElement("div",{className:re.a.temps},r.a.createElement("div",{className:re.a.temperature},a),r.a.createElement("div",{className:re.a.temperature},n)),r.a.createElement("div",{className:re.a.uvindex},"UV ",i),r.a.createElement("div",{className:re.a.pops},r.a.createElement("img",{src:c,alt:"{weather icon}"}),l),r.a.createElement("div",{className:re.a.wind},r.a.createElement(Z,{width:24,height:24}),s," m/s"),r.a.createElement("div",{className:re.a.dateTime},S(t)))})),le=r.a.memo((function(e){var t=e.forecast;return null===t||void 0===t?void 0:t.map((function(e){var t="http://openweathermap.org/img/wn/".concat(e.weather[0].icon,".png");return r.a.createElement("div",{key:e.dt},r.a.createElement(ce,{dateTime:e.dt,temperature:e.temp.toFixed(1),feelsTemp:e.feels_like.toFixed(1),pops:e.weather[0].main,wind:e.wind_speed,icon:t,uvindex:e.uvi}))}))})),ie=r.a.memo((function(){var e=D(),t=e.loading,a=e.cityName,c=e.getLocation,l=e.hourlyWeather,i=e.currentWeather,s=i.accuracy,o=i.feelsLike,u=i.icon,m=i.temperature,p=i.pops,d=i.humidity,h=i.pressure,f=i.wind,v=i.sunrise,g=i.sunset,w=i.UVI;Object(n.useEffect)((function(){return c()}),[]);var _=V.a.bind(R.a)({imageWeather:!0,rain:"Rain"===p,clear:"Clear"===p,clouds:"Clouds"===p,mist:"Mist"===p});return r.a.createElement("div",{className:R.a.wrapper},r.a.createElement("div",{className:_},r.a.createElement("div",{className:R.a.content},r.a.createElement("div",{className:R.a.temperature},r.a.createElement("span",{className:R.a.tempValue},m),r.a.createElement("span",{className:R.a.tempText},"feels like"),r.a.createElement("span",{className:R.a.tempValue},o)),r.a.createElement("div",{className:R.a.city},r.a.createElement(Y,null),r.a.createElement("span",null,a)," (~",s," m.)"),r.a.createElement("div",{className:R.a.optional},r.a.createElement("div",{className:R.a.value},r.a.createElement(X,null)," ",r.a.createElement("span",null,v)),r.a.createElement("div",{className:R.a.value},r.a.createElement(ee,null)," ",r.a.createElement("span",null,g))),r.a.createElement("div",{className:R.a.iconAndState},r.a.createElement("div",{className:R.a.icon},u?r.a.createElement("img",{src:u,alt:"weather icon"}):"\ud83d\ude44"),r.a.createElement("div",{className:R.a.pops},p),r.a.createElement(ae,null),r.a.createElement("div",{className:R.a.pops},w)),t?r.a.createElement(k,null):r.a.createElement("div",{className:R.a.optional},r.a.createElement("div",{className:R.a.value},r.a.createElement(I,null)," ",r.a.createElement("span",null,d),"%"),r.a.createElement("div",{className:R.a.value},r.a.createElement(J,null),r.a.createElement("span",null,h)),r.a.createElement("div",{className:R.a.value},r.a.createElement(Z,null),r.a.createElement("span",null,f),"m/s")),r.a.createElement("div",{className:R.a.hourlyForecast},r.a.createElement(le,{forecast:l})))))})),se=function(){var e=Object(n.useState)("#FFF"),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(n.useEffect)((function(){var e=window.localStorage.getItem("color");c(e||"#FFF")}),[]);return r.a.createElement("div",{className:o.a.background,style:{backgroundColor:a}},r.a.createElement(ie,null),r.a.createElement(W,{changeColor:function(e){window.localStorage.setItem("color",e),c(e)}}))},oe=function(){return r.a.createElement(se,null)},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(oe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weatherCard",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/weatherCard","/service-worker.js");ue?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web App is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")}))):me(t,e)}))}}()},6:function(e,t,a){e.exports={hourlyWeatherWrapper:"styles_hourlyWeatherWrapper__RklJ3",temps:"styles_temps__3MANQ",temperature:"styles_temperature__1x7P_",uvindex:"styles_uvindex__3J3Rp",pops:"styles_pops__1ismH",wind:"styles_wind__rVO-N",dateTime:"styles_dateTime__3e2mq"}},7:function(e,t,a){e.exports={colorChanger:"styles_colorChanger__jpZgR",palette:"styles_palette__2tMW8",pointer:"styles_pointer__1U38Y",wrapper:"styles_wrapper__26MUs",colorBlock:"styles_colorBlock__2IMSU",visible:"styles_visible__2omKP"}}},[[28,1,2]]]);
//# sourceMappingURL=main.b9ccf99c.chunk.js.map