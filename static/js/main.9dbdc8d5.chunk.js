(this.webpackJsonpnwitter=this.webpackJsonpnwitter||[]).push([[0],{43:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(2),a=n.n(c),i=n(27),s=n.n(i),u=n(7),o=n(18),j=n(5),l=n(8),b=n.n(l),d=n(14),p=n(19);n(36),n(44),n(45);p.a.initializeApp({apiKey:"AIzaSyCEh3LkiE60vqeo-28nwgk2pHgZu9lOr9k",authDomain:"nwitter-f5987.firebaseapp.com",projectId:"nwitter-f5987",storageBucket:"nwitter-f5987.appspot.com",messagingSenderId:"87359723399",appId:"1:87359723399:web:5793cca5b2e5b56f396522"});var O=p.a,f=p.a.auth(),h=p.a.firestore(),x=p.a.storage(),m=function(e){var t=e.userObj,n=e.refreshUser,a=Object(c.useState)(t.displayName),i=Object(u.a)(a,2),s=i[0],o=i[1],l=Object(j.g)(),p=function(){var e=Object(d.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.collection("nweets").where("creatorId","==",t.uid).orderBy("createdAt").get();case 2:n=e.sent,console.log(n.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){p()}),[]);var O=function(){var e=Object(d.a)(b.a.mark((function e(r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),t.displayName===s){e.next=5;break}return e.next=4,t.updateProfile({displayName:s});case 4:n();case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:O,children:[Object(r.jsx)("input",{type:"text",placeholder:"Display Name",value:s,onChange:function(e){var t=e.target,n=(t.name,t.value);o(n)}}),Object(r.jsx)("input",{type:"submit",value:"Update Profile"})]}),Object(r.jsx)("button",{onClick:function(){f.signOut(),l.push("/")},children:"Log out"})]})},v=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),s=Object(u.a)(i,2),o=s[0],j=s[1],l=Object(c.useState)(!0),p=Object(u.a)(l,2),O=p[0],h=p[1],x=Object(c.useState)(""),m=Object(u.a)(x,2),v=m[0],g=m[1],w=function(e){var t=e.target,n=t.name,r=t.value;"email"===n?a(r):"password"===n&&j(r)},y=function(){var e=Object(d.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),e.prev=1,!O){e.next=8;break}return e.next=5,f.createUserWithEmailAndPassword(n,o);case 5:r=e.sent,e.next=11;break;case 8:return e.next=10,f.signInWithEmailAndPassword(n,o);case 10:r=e.sent;case 11:console.log(r),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0.message),g(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:y,children:[Object(r.jsx)("input",{name:"email",type:"text",placeholder:"Email",required:!0,value:n,onChange:w}),Object(r.jsx)("input",{name:"password",type:"password",placeholder:"Password",required:!0,value:o,onChange:w}),Object(r.jsx)("input",{type:"submit",value:O?"Create Account":"Sign In"}),v]}),Object(r.jsx)("span",{onClick:function(){return h((function(e){return!e}))},children:O?"Sign In":"Create Account"})]})},g=function(){var e=function(){var e=Object(d.a)(b.a.mark((function e(t){var n,r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,r=n.name,n.value,e.prev=1,"google"===r?c=new O.auth.GoogleAuthProvider:"github"===r&&(c=new O.auth.GithubAuthProvider),e.next=5,f.signInWithPopup(c);case 5:a=e.sent,console.log(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{name:"google",onClick:e,children:"Continue with Goolge"}),Object(r.jsx)("button",{name:"github",onClick:e,children:"Continue with Github"})]})]})},w=n(29),y=function(e){var t=e.nweetObj,n=e.isOwner,a=Object(c.useState)(!1),i=Object(u.a)(a,2),s=i[0],o=i[1],j=Object(c.useState)(t.text),l=Object(u.a)(j,2),p=l[0],O=l[1],f=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm("\uc9c4\uc9dc \uc9c0\uc6b8\uac70\uc784?")){e.next=8;break}return e.next=4,h.doc("nweets/".concat(t.id)).delete();case 4:return e.next=6,x.refFromURL(t.attachmentUrl).delete();case 6:e.next=8;break;case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m=function(){return o((function(e){return!e}))},v=function(){var e=Object(d.a)(b.a.mark((function e(n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,h.doc("nweets/".concat(t.id)).update({text:p});case 3:o(!1);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{children:n&&s?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{onSubmit:v,children:[Object(r.jsx)("input",{value:p,placeholder:"\uc218\uc815\ud558\uae30",required:!0,onChange:function(e){var t=e.target.value;O(t),console.log("onChange",t)}}),Object(r.jsx)("input",{type:"submit",value:"Update Nweet"})]}),Object(r.jsx)("button",{onClick:m,children:"Cancel"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:t.text}),t.attachmentUrl&&Object(r.jsx)("img",{src:t.attachmentUrl,width:"50px",height:"50px"}),n&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{onClick:f,children:"Delete Nweet"}),Object(r.jsx)("button",{onClick:m,children:"Edit Nweet"})]})]})})},k=n(47),S=function(e){var t=e.userObj,n=Object(c.useState)(""),a=Object(u.a)(n,2),i=a[0],s=a[1],o=Object(c.useState)(""),j=Object(u.a)(o,2),l=j[0],p=j[1],O=function(){var e=Object(d.a)(b.a.mark((function e(n){var r,c,a,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r="",""==l){e.next=10;break}return c=x.ref().child("".concat(t.uid,"/").concat(Object(k.a)())),e.next=6,c.putString(l,"data_url");case 6:return a=e.sent,e.next=9,a.ref.getDownloadURL();case 9:r=e.sent;case 10:return u={text:i,createdAt:Date.now(),creatorId:t.uid,attachmentUrl:r},e.next=13,h.collection("nweets").add(u);case 13:s(""),p("");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsxs)("form",{onSubmit:O,children:[Object(r.jsx)("input",{value:i,onChange:function(e){var t=e.target,n=(t.name,t.value);s(n)},type:"text",placeholder:"What's on your mind?",maxLength:120}),Object(r.jsx)("input",{type:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(e){console.log(e);var t=e.currentTarget.result;p(t)},n.readAsDataURL(t)}}),Object(r.jsx)("input",{type:"submit",value:"Nweet"}),l&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:l,width:"50px",height:"50px"}),Object(r.jsx)("button",{onClick:function(){p(null)},children:"Clear"})]})]})},C=function(e){var t=e.userObj,n=Object(c.useState)([]),a=Object(u.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){h.collection("nweets").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(w.a)({id:e.id},e.data())}));s(t)}))}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)(S,{userObj:t}),Object(r.jsx)("div",{children:i.map((function(e){return Object(r.jsx)(y,{nweetObj:e,isOwner:e.creatorId===t.uid},e.id)}))})]})},U=function(e){var t=e.userObj;return Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(o.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsxs)(o.b,{to:"/profile",children:[t.displayName,"\uc758 Profile"]})})]})})},I=function(e){var t=e.isLoggedIn,n=e.userObj,c=e.refreshUser;return Object(r.jsxs)(o.a,{children:[t&&Object(r.jsx)(U,{userObj:n}),Object(r.jsx)(j.d,{children:t?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j.b,{exact:!0,path:"/",children:Object(r.jsx)(C,{userObj:n})}),Object(r.jsx)(j.b,{exact:!0,path:"/profile",children:Object(r.jsx)(m,{userObj:n,refreshUser:c})}),Object(r.jsx)(j.a,{from:"*",to:"/"})]}):Object(r.jsx)(j.b,{exact:!0,path:"/",children:Object(r.jsx)(g,{})})})]})};var N=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(!1),s=Object(u.a)(i,2),o=s[0],j=s[1],l=Object(c.useState)(null),b=Object(u.a)(l,2),d=b[0],p=b[1];return Object(c.useEffect)((function(){f.onAuthStateChanged((function(e){e?(j(!0),p({displayName:e.displayName,uid:e.uid,updateProfile:function(t){return e.updateProfile(t)}})):(j(!1),p(null)),a(!0)}))}),[]),Object(r.jsx)(r.Fragment,{children:n?Object(r.jsx)(I,{refreshUser:function(){var e=f.currentUser;p({displayName:e.displayName,uid:e.uid,updateProfile:e.updateProfile})},isLoggedIn:o,userObj:d}):"Loading..."})};s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.9dbdc8d5.chunk.js.map