import{S as o,P as n,W as e,G as t,T as i,M as a,a as s,A as r,b as d,B as c,c as w,d as l,e as p}from"./vendor.6f0484ef.js";const m=new o,f=new n(75,window.innerWidth/window.innerHeight,.1,1e3),u=new e({canvas:document.querySelector("#bg")});u.setPixelRatio(window.devicePixelRatio),u.setSize(window.innerWidth,window.innerHeight),f.position.setZ(30),f.position.setX(-3),u.render(m,f);const g=new t,y=new i(10,3,16,100),h=new a({color:16737095}),x=new s(y,h);m.add(x);const z=new r(16777215);m.add(z),g.load("./romaha3d.glb",(function(o){const n=o.scene.children[0];n.scale.set(1,1,1),m.add(n),n.position.set(-10,3,20)}),void 0,(function(o){console.error(o)})),Array(200).fill().forEach((function(){const o=new l(.25,24,24),n=new a({color:16777215}),e=new s(o,n),[t,i,r]=Array(3).fill().map((()=>p.randFloatSpread(100)));e.position.set(t,i,r),m.add(e)}));const b=(new d).load("space.jpg");m.background=b;const j=(new d).load("jeff.png"),v=new s(new c(3,3,3),new w({map:j}));m.add(v);const A=(new d).load("moon.jpg"),S=(new d).load("normal.jpg"),P=new s(new l(3,32,32),new a({map:A,normalMap:S}));function R(){const o=document.body.getBoundingClientRect().top;P.rotation.x+=.05,P.rotation.y+=.075,P.rotation.z+=.05,v.rotation.y+=.01,v.rotation.z+=.01,f.position.z=-.01*o,f.position.x=-2e-4*o,f.rotation.y=-2e-4*o}m.add(P),P.position.z=20,P.position.setX(-10),v.position.z=-5,v.position.x=2,document.body.onscroll=R,R(),function o(){requestAnimationFrame(o),x.rotation.x+=.01,x.rotation.y+=.005,x.rotation.z+=.01,P.rotation.x+=.005,u.render(m,f)}();
