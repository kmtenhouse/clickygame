(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Amisia",image:"/images/amisia.png",bgColor:"blue",isClicked:!1},{id:2,name:"Ardata",image:"/images/ardata.png",bgColor:"cerulean",isClicked:!1},{id:3,name:"Azdaja",image:"/images/azdaja.png",bgColor:"yellow",isClicked:!1},{id:4,name:"Barzum",image:"/images/barzum.png",bgColor:"purple",isClicked:!1},{id:5,name:"Baizli",image:"/images/baizli.png",bgColor:"purple",isClicked:!1},{id:6,name:"Boldir",image:"/images/boldir.png",bgColor:"olive",isClicked:!1},{id:7,name:"Bronya",image:"/images/bronya.png",bgColor:"jade",isClicked:!1},{id:8,name:"Chahut",image:"/images/chahut.png",bgColor:"purple",isClicked:!1},{id:9,name:"Charun",image:"/images/charun.png",bgColor:"olive",isClicked:!1},{id:10,name:"Chixie",image:"/images/chixie.png",bgColor:"brown",isClicked:!1},{id:11,name:"Cirava",image:"/images/cirava.png",bgColor:"yellow",isClicked:!1},{id:12,name:"Daraya",image:"/images/daraya.png",bgColor:"jade",isClicked:!1},{id:13,name:"Diemen",image:"/images/diemen.png",bgColor:"red",isClicked:!1},{id:14,name:"Elwurd",image:"/images/elwurd.png",bgColor:"cerulean",isClicked:!1},{id:15,name:"Fozzer",image:"/images/fozzer.png",bgColor:"red",isClicked:!1},{id:16,name:"Galekh",image:"/images/galekh.png",bgColor:"blue",isClicked:!1},{id:17,name:"Karako",image:"/images/karako.png",bgColor:"purple",isClicked:!1},{id:18,name:"Konyyl",image:"/images/konyyl.png",bgColor:"olive",isClicked:!1},{id:19,name:"Kuprum and Folykl",image:"/images/kuprumandfol.png",bgColor:"yellow",isClicked:!1},{id:20,name:"Lanque",image:"/images/lanque.png",bgColor:"jade",isClicked:!1},{id:21,name:"Lynera",image:"/images/lynera.png",bgColor:"jade",isClicked:!1},{id:22,name:"Mallek",image:"/images/mallek.png",bgColor:"cerulean",isClicked:!1},{id:23,name:"Marsti",image:"/images/marsti.png",bgColor:"red",isClicked:!1},{id:24,name:"Marvus",image:"/images/marvus.png",bgColor:"purple",isClicked:!1},{id:25,name:"Nihkee",image:"/images/nihkee.png",bgColor:"blue",isClicked:!1},{id:26,name:"Polypa",image:"/images/polypa.png",bgColor:"olive",isClicked:!1},{id:27,name:"Remele",image:"/images/remele.png",bgColor:"cerulean",isClicked:!1},{id:28,name:"Skylla",image:"/images/skylla.png",bgColor:"brown",isClicked:!1},{id:29,name:"Stelza",image:"/images/stelza.png",bgColor:"teal",isClicked:!1},{id:30,name:"Tagora",image:"/images/tagora.png",bgColor:"teal",isClicked:!1},{id:31,name:"Tegiri",image:"/images/tegiri.png",bgColor:"teal",isClicked:!1},{id:32,name:"Tirona",image:"/images/tirona.png",bgColor:"teal",isClicked:!1},{id:33,name:"Tyzias",image:"/images/tyzias.png",bgColor:"teal",isClicked:!1},{id:34,name:"Vikare",image:"/images/vikare.png",bgColor:"brown",isClicked:!1},{id:35,name:"Wanshi",image:"/images/wanshi.png",bgColor:"olive",isClicked:!1},{id:36,name:"Zebede",image:"/images/zebede.png",bgColor:"yellow",isClicked:!1},{id:37,name:"Zebruh",image:"/images/zebruh.png",bgColor:"blue",isClicked:!1}]},,,,,,,,function(e,a,i){e.exports=i(23)},,,,,,function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){},,function(e,a,i){"use strict";i.r(a);var n=i(0),r=i.n(n),l=i(3),t=i.n(l),o=(i(15),i(4)),m=i(5),s=i(7),g=i(6),c=i(8);i(17);var d=function(e){return r.a.createElement("div",{className:"score-banner container-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row d-flex justify-content-start py-2"},r.a.createElement("h5",{className:"px-2 text-warning"},"Current Score: ",e.currentScore),r.a.createElement("h5",{className:"px-2"}," | "),r.a.createElement("h5",{className:"px-2"},"Best Score: ",e.bestScore))))};i(19);function u(){return r.a.createElement("header",{className:"text-white"},r.a.createElement("div",{className:"container py-3"},r.a.createElement("h1",{className:"display-4"},"Till It 'Clicks'!"),r.a.createElement("h5",null,"Click on every image once (and only once!) to win. The images will shift and swirl, testing your memory might."),r.a.createElement("h5",null,"Be careful though - if you forget and select the same pic twice, the game starts over. ")))}i(21);var C=function(e){var a="mx-2 my-2 game-item";e.friend.bgColor&&(a+=" "+e.friend.bgColor+"-bg");var i="/clickygame"+e.friend.image;return r.a.createElement("div",{className:a,id:e.friend.id,onClick:function(){e.guess(e.friend.id)}},r.a.createElement("img",{className:"game-image",src:i,alt:e.friend.name}))};function p(){return r.a.createElement("footer",{className:"page-footer font-small blue pt-4"},r.a.createElement("div",{className:"footer-copyright text-center py-3"},r.a.createElement("p",null,"Images credit to What Pumpkin / Hiveswap"),r.a.createElement("p",null,"Background courtesy of SVGBackgrounds.com.")))}function b(e){return r.a.createElement("div",{className:"container my-3"},r.a.createElement("div",{className:"row"},e.children))}function k(e){for(var a,i,n=e.length;0!==n;)i=Math.floor(Math.random()*n),a=e[n-=1],e[n]=e[i],e[i]=a;return e}var f=i(1);function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:8;return k(f),f.slice(0,e)}var y=function(e){function a(e){var i;return Object(o.a)(this,a),(i=Object(s.a)(this,Object(g.a)(a).call(this,e))).guess=function(e){var a=i.state.friends.findIndex(function(a){return a.id===e}),n=i.state.friends[a];if(n.isClicked){var r=i.state.currentScore>i.state.bestScore?i.state.currentScore:i.state.bestScore;i.state.friends.forEach(function(e){e.isClicked=!1}),i.setState({currentScore:0,bestScore:r,friends:k(i.state.friends.slice(0))})}else{n.isClicked=!0;var l=i.state.currentScore+1;i.setState({currentScore:l,friends:k(i.state.friends.slice(0))})}},i.state={friends:v(10),currentScore:0,bestScore:0},i}return Object(c.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(d,{currentScore:this.state.currentScore,bestScore:this.state.bestScore}),r.a.createElement(b,null,this.state.friends.map(function(a){return r.a.createElement(C,{key:a.id,friend:a,guess:e.guess})})),r.a.createElement(p,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.09903d93.chunk.js.map