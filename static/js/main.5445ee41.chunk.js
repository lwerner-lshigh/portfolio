(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{135:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(28),o=a.n(c),s=(a(44),a(29)),l=a.n(s),r=a(38),m=a(30),p=(a(50),a(31)),d=a.n(p),g=a(32),u=a.n(g);var f=function(e){return i.a.createElement(d.a,{className:u.a.textView,source:e.content,escapeHtml:!1})},w=a(33),h=a.n(w),E=a(7),v=a.n(E);var y=function(e){return i.a.createElement("div",{className:v.a.imageView},i.a.createElement("img",{alt:"",src:e.src,className:!0===e.tall?v.a.tall:v.a.wide}),i.a.createElement("p",null,e.desc))};var b=function(e){return console.log(e),i.a.createElement("div",{className:h.a.imageCollection},e.images.map((function(e){return i.a.createElement(y,{src:e.src,desc:e.desc})})))},_=a(34),x=a.n(_);var N=function(e){return i.a.createElement("div",{className:x.a.multimediaView},i.a.createElement(b,{images:e.images}),i.a.createElement(f,{content:e.content}))},V=a(35),F=a.n(V),j=a(36),k=a.n(j),O=i.a.createElement("img",{src:"icons/file.png",alt:"File Icon"}),I=i.a.createElement("img",{src:"icons/code.png",alt:"Code File Icon"}),C=i.a.createElement("img",{src:"icons/drive-file.png",alt:"Google Drive File Icon"}),W=i.a.createElement("img",{src:"icons/pdf.png",alt:"Pdf file icon"}),A=i.a.createElement("img",{src:"icons/zip.png",alt:"Zip file icon"}),M=i.a.createElement("img",{src:"icons/image.png",alt:"Picture file icon"});var D=function(e){var t=O;return"code"===e.type?t=I:"driveFile"===e.type?t=C:"pdf"===e.type?t=W:"zip"===e.type?t=A:"image"===e.type&&(t=M),i.a.createElement("a",{href:e.file,download:!0},i.a.createElement("div",{className:k.a.fileView},i.a.createElement("div",{className:"center"},t),i.a.createElement("p",null,e.file)))};var P=function(e){return i.a.createElement("div",{className:F.a.attachmentsFilesView},e.files.map((function(e){return i.a.createElement(D,{file:e.file,type:e.type})})))};var S=function(e){return i.a.createElement("div",null,i.a.createElement(f,{content:e.content}),i.a.createElement(P,{files:e.files}))};var T=function(e){return"text"===e.type?i.a.createElement(f,{content:e.content}):"multimedia"===e.type?i.a.createElement(N,{images:e.content.images,content:e.content.text}):"photos"===e.type?i.a.createElement(b,{images:e.content}):"attachments"===e.type?i.a.createElement(S,{files:e.content.files,content:e.content.text}):void 0};var z=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),c=a[0],o=a[1],s=Object(m.useMorph)({spring:{restDisplacementThreshold:1e-4,overshootClamping:!0}});return c?i.a.createElement("div",Object.assign({},s,{className:"post-large"}),i.a.createElement("div",Object.assign({},s,{className:"header",onClick:function(){return o(!c)}}),i.a.createElement("div",{className:"center",id:"back"},i.a.createElement("img",{src:e.image,alt:e.title,className:e.imgFit})),i.a.createElement("div",{className:"header-content"},i.a.createElement("h1",null,e.name))),i.a.createElement(T,Object.assign({},s,{content:e.content,type:e.type}))):i.a.createElement("div",Object.assign({},s,{className:"post",onClick:function(){return o(!c)}}),i.a.createElement("div",Object.assign({},s,{className:"center",id:"back"}),i.a.createElement("img",{src:e.image,alt:e.title,className:e.imgFit})),i.a.createElement("div",Object.assign({},s,{className:"post-content"}),i.a.createElement("h1",s,e.name),i.a.createElement("h3",s,e.desc)))},H=a(37);a(135);var J=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:l.a,className:"App-logo",alt:"logo"}),i.a.createElement("h1",null,"Lukas Werner's Portfolio")),i.a.createElement("div",{className:"posts"},H.map((function(e){return i.a.createElement(z,{name:e.name,desc:e.desc,image:e.image,imgFit:e.imgFit,content:e.content,key:e.name,type:e.type})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports=a.p+"static/media/logo.80afbb9a.svg"},32:function(e,t,a){e.exports={textView:"TextView_textView__3kOkw"}},33:function(e,t,a){e.exports={imageCollection:"ImageCollection_imageCollection__6c_-1"}},34:function(e,t,a){e.exports={multimediaView:"MultimediaView_multimediaView__1d6pp"}},35:function(e,t,a){e.exports={attachmentsFilesView:"AttachmentsFilesView_attachmentsFilesView__1liA2"}},36:function(e,t,a){e.exports={fileView:"FileView_fileView__33xON"}},37:function(e){e.exports=JSON.parse('[{"name":"Live Test","desc":"Will this update Live?","image":"barn.jpg","imgFit":"wide","type":"text","content":"Wazzup! Yoooooo!"},{"name":"React.js Portfolio","desc":"Developing a simpler way to make my portfolio!","image":"reactjs.png","imgFit":"wide","type":"text","content":"Hello World! this is a test post of the react portfolio system where this will now become a larger post and this portfolio was made using react which will be available from my github page."},{"name":"MMWD","desc":"Things I made in Multimedia web design","image":"water-tower.jpg","imgFit":"wide","type":"multimedia","content":{"text":"this will be rendered as *markdown*","images":[{"src":"barn.jpg","desc":"A barn in front of some mountains."},{"src":"trees.jpg","desc":"Some sticks everywhere."}]}},{"name":"Photos","desc":"Here are some photos I took!","image":"trees.jpg","imgFit":"wide","type":"photos","content":[{"src":"trees.jpg","desc":"Some comment!"},{"src":"water-tower.jpg","desc":"some park..."}]},{"name":"Yellowstone","desc":"demo deno","image":"barn.jpg","imgFit":"wide","type":"text","content":"# hello this is a demo \\n this is on a new line and is **formated**"},{"name":"Attachments Test","desc":"there should be some attached files now...","image":"basketball.png","imgFit":"wide","type":"attachments","content":{"text":"this is a little song i wrote note for note.","files":[{"file":"robots.txt","type":"code"},{"file":"robots.txt","type":"driveFile"}]}}]')},39:function(e,t,a){e.exports=a(136)},44:function(e,t,a){},50:function(e,t,a){},7:function(e,t,a){e.exports={imageView:"ImageView_imageView__k0Z32",wide:"ImageView_wide__WDQt0",tall:"ImageView_tall__mhgCZ"}}},[[39,1,2]]]);
//# sourceMappingURL=main.5445ee41.chunk.js.map