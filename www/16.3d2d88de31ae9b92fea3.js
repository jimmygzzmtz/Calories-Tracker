(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{JLuJ:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=function(){return function(){}}(),e=t("pMnS"),i=t("oBZk"),r=t("ZZ/e"),a=t("Ip0R"),s=t("mrSG"),c=function(){function l(l,n,t){var u=this;this.modalController=l,this.storage=n,this.alertController=t,this.foods=[],this.toStr=JSON.stringify,this.storage.get("foodsArr").then(function(l){"[]"!=l?u.foods=JSON.parse(l):u.storage.set("foodsArr",JSON.stringify(u.foods))})}return l.prototype.ngOnInit=function(){},l.prototype.dismiss=function(){this.modalController.dismiss()},l.prototype.save=function(){return s.b(this,void 0,void 0,function(){return s.e(this,function(l){switch(l.label){case 0:return null==this.foodQty||null==this.foodslct?[3,1]:(this.foodslctSend=JSON.parse(this.foodslct),this.foodslctSend.quantity=this.foodQty,this.foodslctSend.calories=+this.foodslctSend.calories*+this.foodQty,this.foodslctSend.date=this.currentDate,this.modalController.dismiss(this.foodslctSend),[3,4]);case 1:return[4,this.alertController.create({header:"Please fill in all the inputs",buttons:[{text:"OK"}]})];case 2:return[4,l.sent().present()];case 3:l.sent(),l.label=4;case 4:return[2]}})})},l}(),b=function(){function l(l,n,t){var u=this;this.navCtrl=l,this.modalController=n,this.storage=t,this.profile={},this.logs=[],this.sum=0,this.currentDate=new Date,this.storage.get("logsArr").then(function(l){"[]"!=l?u.logs=JSON.parse(l):u.storage.set("logsArr",JSON.stringify(u.logs))})}return l.prototype.total=function(){if(this.sum=0,null!=this.logs)var l=this.logs.filter(function(l){var n=new Date(l.date);return n.getDate()==this.currentDate.getDate()&&n.getMonth()==this.currentDate.getMonth()&&n.getFullYear()==this.currentDate.getFullYear()},this);if(null!=l)for(var n=0;n<l.length;n++)this.sum=this.sum+l[n].calories;return this.sum},l.prototype.ionViewWillEnter=function(){var l=this;this.storage.get("userProfile").then(function(n){null!=n?l.profile=JSON.parse(n):l.storage.set("userProfile",JSON.stringify(l.profile))})},l.prototype.getRemaining=function(){return null==this.profile.tdee?"-":+this.profile.tdee-+this.sum},l.prototype.logFood=function(){return s.b(this,void 0,void 0,function(){var l,n=this;return s.e(this,function(t){switch(t.label){case 0:return[4,this.modalController.create({component:c,componentProps:{currentDate:this.currentDate}})];case 1:return(l=t.sent()).onDidDismiss().then(function(l){null!=l.data&&(null==n.logs?(n.logs=[],n.logs.push({name:l.data.name,calories:l.data.calories,quantity:l.data.quantity,date:n.currentDate})):n.logs.push(l.data),n.storage.set("logsArr",JSON.stringify(n.logs)))}),[4,l.present()];case 2:return t.sent(),[2]}})})},l.prototype.deleteLog=function(l){var n=this.logs.indexOf(l);n>-1&&(this.logs.splice(n,1),this.storage.set("logsArr",JSON.stringify(this.logs)))},l.prototype.previousDay=function(){var l=new Date(this.currentDate.valueOf());l.setDate(l.getDate()-1),this.currentDate=l},l.prototype.nextDay=function(){var l=new Date(this.currentDate.valueOf());l.setDate(l.getDate()+1),this.currentDate=l},l.prototype.getLogs=function(){if(null!=this.logs)return this.logs.filter(function(l){var n=new Date(l.date);return n.getDate()==this.currentDate.getDate()&&n.getMonth()==this.currentDate.getMonth()&&n.getFullYear()==this.currentDate.getFullYear()},this)},l.prototype.editLog=function(l){return s.b(this,void 0,void 0,function(){var n,t,u=this;return s.e(this,function(o){switch(o.label){case 0:return n={name:l.name,calories:(+l.calories/+l.quantity).toString()},[4,this.modalController.create({component:c,componentProps:{foodslct:JSON.stringify(n),foodQty:l.quantity,currentDate:this.currentDate}})];case 1:return(t=o.sent()).onDidDismiss().then(function(n){if(null!=n.data){var t=u.logs.indexOf(l);t>-1&&(u.logs[t]=n.data,u.storage.set("logsArr",JSON.stringify(u.logs)))}}),[4,t.present()];case 2:return o.sent(),[2]}})})},l}(),h=t("iw74"),d=u.mb({encapsulation:0,styles:[[".welcome-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{max-height:35vh;overflow:hidden}"]],data:{}});function g(l){return u.Gb(0,[(l()(),u.ob(0,0,null,null,20,"ion-item-sliding",[],null,null,null,i.K,i.n)),u.nb(1,49152,null,0,r.K,[u.h,u.k],null,null),(l()(),u.ob(2,0,null,0,10,"ion-item",[],null,null,null,i.L,i.k)),u.nb(3,49152,null,0,r.F,[u.h,u.k],null,null),(l()(),u.ob(4,0,null,0,2,"ion-label",[],null,null,null,i.M,i.o)),u.nb(5,49152,null,0,r.L,[u.h,u.k],null,null),(l()(),u.Eb(6,0,["",""])),(l()(),u.ob(7,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,i.M,i.o)),u.nb(8,49152,null,0,r.L,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Eb(9,0,["x",""])),(l()(),u.ob(10,0,null,0,2,"ion-label",[["color","medium"]],null,null,null,i.M,i.o)),u.nb(11,49152,null,0,r.L,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Eb(12,0,[""," cal"])),(l()(),u.ob(13,0,null,0,7,"ion-item-options",[["side","end"]],null,null,null,i.J,i.m)),u.nb(14,49152,null,0,r.J,[u.h,u.k],{side:[0,"side"]},null),(l()(),u.ob(15,0,null,0,2,"ion-item-option",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.editLog(l.context.$implicit)&&u),u},i.I,i.l)),u.nb(16,49152,null,0,r.I,[u.h,u.k],null,null),(l()(),u.Eb(-1,0,["Edit"])),(l()(),u.ob(18,0,null,0,2,"ion-item-option",[["color","danger"]],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.deleteLog(l.context.$implicit)&&u),u},i.I,i.l)),u.nb(19,49152,null,0,r.I,[u.h,u.k],{color:[0,"color"]},null),(l()(),u.Eb(-1,0,["Delete"]))],function(l,n){l(n,8,0,"medium"),l(n,11,0,"medium"),l(n,14,0,"end"),l(n,19,0,"danger")},function(l,n){l(n,6,0,n.context.$implicit.name),l(n,9,0,n.context.$implicit.quantity),l(n,12,0,n.context.$implicit.calories)})}function f(l){return u.Gb(0,[u.zb(0,a.d,[u.u]),(l()(),u.ob(1,0,null,null,7,"ion-header",[],null,null,null,i.F,i.h)),u.nb(2,49152,null,0,r.z,[u.h,u.k],null,null),(l()(),u.ob(3,0,null,0,5,"ion-toolbar",[],null,null,null,i.V,i.x)),u.nb(4,49152,null,0,r.zb,[u.h,u.k],null,null),(l()(),u.ob(5,0,null,0,3,"ion-title",[],null,null,null,i.U,i.w)),u.nb(6,49152,null,0,r.xb,[u.h,u.k],null,null),(l()(),u.Eb(7,0,[" My Day: "," "])),u.Ab(8,1),(l()(),u.ob(9,0,null,null,17,"ion-content",[],null,null,null,i.C,i.e)),u.nb(10,49152,null,0,r.s,[u.h,u.k],null,null),(l()(),u.ob(11,0,null,0,3,"ion-list",[],null,null,null,i.N,i.p)),u.nb(12,49152,null,0,r.M,[u.h,u.k],null,null),(l()(),u.fb(16777216,null,0,1,null,g)),u.nb(14,278528,null,0,a.i,[u.N,u.K,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.ob(15,0,null,0,5,"ion-card",[],null,null,null,i.B,i.c)),u.nb(16,49152,null,0,r.k,[u.h,u.k],null,null),(l()(),u.ob(17,0,null,0,3,"ion-card-content",[],null,null,null,i.A,i.d)),u.nb(18,49152,null,0,r.l,[u.h,u.k],null,null),(l()(),u.ob(19,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Eb(20,null,["Day's Total: "," calories"])),(l()(),u.ob(21,0,null,0,5,"ion-card",[],null,null,null,i.B,i.c)),u.nb(22,49152,null,0,r.k,[u.h,u.k],null,null),(l()(),u.ob(23,0,null,0,3,"ion-card-content",[],null,null,null,i.A,i.d)),u.nb(24,49152,null,0,r.l,[u.h,u.k],null,null),(l()(),u.ob(25,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Eb(26,null,["Remaining in Day: "," calories"])),(l()(),u.ob(27,0,null,null,7,"ion-row",[],null,null,null,i.O,i.q)),u.nb(28,49152,null,0,r.gb,[u.h,u.k],null,null),(l()(),u.ob(29,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.previousDay()&&u),u},i.z,i.b)),u.nb(30,49152,null,0,r.i,[u.h,u.k],null,null),(l()(),u.Eb(-1,0,["Previous Day"])),(l()(),u.ob(32,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.nextDay()&&u),u},i.z,i.b)),u.nb(33,49152,null,0,r.i,[u.h,u.k],null,null),(l()(),u.Eb(-1,0,["Next Day"])),(l()(),u.ob(35,0,null,null,5,"ion-fab",[["horizontal","end"],["slot","fixed"],["vertical","bottom"]],null,null,null,i.E,i.f)),u.nb(36,49152,null,0,r.u,[u.h,u.k],{horizontal:[0,"horizontal"],vertical:[1,"vertical"]},null),(l()(),u.ob(37,0,null,0,3,"ion-fab-button",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.logFood()&&u),u},i.D,i.g)),u.nb(38,49152,null,0,r.v,[u.h,u.k],null,null),(l()(),u.ob(39,0,null,0,1,"ion-icon",[["name","add"]],null,null,null,i.G,i.i)),u.nb(40,49152,null,0,r.A,[u.h,u.k],{name:[0,"name"]},null)],function(l,n){l(n,14,0,n.component.getLogs()),l(n,36,0,"end","bottom"),l(n,40,0,"add")},function(l,n){var t=n.component,o=u.Fb(n,7,0,l(n,8,0,u.yb(n,0),t.currentDate));l(n,7,0,o),l(n,20,0,t.total()),l(n,26,0,t.getRemaining())})}function p(l){return u.Gb(0,[(l()(),u.ob(0,0,null,null,1,"app-tab1",[],null,null,null,f,d)),u.nb(1,49152,null,0,b,[r.Eb,r.Db,h.b],null,null)],null,null)}var m=u.kb("app-tab1",b,p,{},{},[]),y=t("gIcY"),k=u.mb({encapsulation:0,styles:[[""]],data:{}});function v(l){return u.Gb(0,[(l()(),u.ob(0,0,null,null,2,"ion-select-option",[],null,null,null,i.P,i.s)),u.nb(1,49152,null,0,r.lb,[u.h,u.k],{value:[0,"value"]},null),(l()(),u.Eb(2,0,["",": "," cal"]))],function(l,n){l(n,1,0,n.component.toStr(n.context.$implicit))},function(l,n){l(n,2,0,n.context.$implicit.name,n.context.$implicit.calories)})}function D(l){return u.Gb(0,[(l()(),u.ob(0,0,null,null,6,"ion-header",[],null,null,null,i.F,i.h)),u.nb(1,49152,null,0,r.z,[u.h,u.k],null,null),(l()(),u.ob(2,0,null,0,4,"ion-toolbar",[],null,null,null,i.V,i.x)),u.nb(3,49152,null,0,r.zb,[u.h,u.k],null,null),(l()(),u.ob(4,0,null,0,2,"ion-title",[],null,null,null,i.U,i.w)),u.nb(5,49152,null,0,r.xb,[u.h,u.k],null,null),(l()(),u.Eb(-1,0,["Log Food"])),(l()(),u.ob(7,0,null,null,35,"ion-content",[["padding",""]],null,null,null,i.C,i.e)),u.nb(8,49152,null,0,r.s,[u.h,u.k],null,null),(l()(),u.ob(9,0,null,0,13,"ion-item",[],null,null,null,i.L,i.k)),u.nb(10,49152,null,0,r.F,[u.h,u.k],null,null),(l()(),u.ob(11,0,null,0,2,"ion-label",[],null,null,null,i.M,i.o)),u.nb(12,49152,null,0,r.L,[u.h,u.k],null,null),(l()(),u.Eb(-1,0,["Food"])),(l()(),u.ob(14,0,null,0,8,"ion-select",[["placeholder","List from database"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==u.yb(l,16)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==u.yb(l,16)._handleChangeEvent(t.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.foodslct=t)&&o),o},i.Q,i.r)),u.nb(15,49152,null,0,r.kb,[u.h,u.k],{placeholder:[0,"placeholder"]},null),u.nb(16,16384,null,0,r.Hb,[u.k],null,null),u.Bb(1024,null,y.b,function(l){return[l]},[r.Hb]),u.nb(18,671744,null,0,y.e,[[8,null],[8,null],[8,null],[6,y.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Bb(2048,null,y.c,null,[y.e]),u.nb(20,16384,null,0,y.d,[[4,y.c]],null,null),(l()(),u.fb(16777216,null,0,1,null,v)),u.nb(22,278528,null,0,a.i,[u.N,u.K,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.ob(23,0,null,0,11,"ion-item",[],null,null,null,i.L,i.k)),u.nb(24,49152,null,0,r.F,[u.h,u.k],null,null),(l()(),u.ob(25,0,null,0,2,"ion-label",[],null,null,null,i.M,i.o)),u.nb(26,49152,null,0,r.L,[u.h,u.k],null,null),(l()(),u.Eb(-1,0,["Quantity"])),(l()(),u.ob(28,0,null,0,6,"ion-input",[["placeholder","1"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,t){var o=!0,e=l.component;return"ionBlur"===n&&(o=!1!==u.yb(l,30)._handleBlurEvent()&&o),"ionChange"===n&&(o=!1!==u.yb(l,30)._handleInputEvent(t.target.value)&&o),"ngModelChange"===n&&(o=!1!==(e.foodQty=t)&&o),o},i.H,i.j)),u.nb(29,49152,null,0,r.E,[u.h,u.k],{placeholder:[0,"placeholder"]},null),u.nb(30,16384,null,0,r.Ib,[u.k],null,null),u.Bb(1024,null,y.b,function(l){return[l]},[r.Ib]),u.nb(32,671744,null,0,y.e,[[8,null],[8,null],[8,null],[6,y.b]],{model:[0,"model"]},{update:"ngModelChange"}),u.Bb(2048,null,y.c,null,[y.e]),u.nb(34,16384,null,0,y.d,[[4,y.c]],null,null),(l()(),u.ob(35,0,null,0,7,"ion-row",[],null,null,null,i.O,i.q)),u.nb(36,49152,null,0,r.gb,[u.h,u.k],null,null),(l()(),u.ob(37,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.dismiss()&&u),u},i.z,i.b)),u.nb(38,49152,null,0,r.i,[u.h,u.k],null,null),(l()(),u.Eb(-1,0,["Cancel"])),(l()(),u.ob(40,0,null,0,2,"ion-button",[],null,[[null,"click"]],function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.save()&&u),u},i.z,i.b)),u.nb(41,49152,null,0,r.i,[u.h,u.k],null,null),(l()(),u.Eb(-1,0,["Save"]))],function(l,n){var t=n.component;l(n,15,0,"List from database"),l(n,18,0,t.foodslct),l(n,22,0,t.foods),l(n,29,0,"1"),l(n,32,0,t.foodQty)},function(l,n){l(n,14,0,u.yb(n,20).ngClassUntouched,u.yb(n,20).ngClassTouched,u.yb(n,20).ngClassPristine,u.yb(n,20).ngClassDirty,u.yb(n,20).ngClassValid,u.yb(n,20).ngClassInvalid,u.yb(n,20).ngClassPending),l(n,28,0,u.yb(n,34).ngClassUntouched,u.yb(n,34).ngClassTouched,u.yb(n,34).ngClassPristine,u.yb(n,34).ngClassDirty,u.yb(n,34).ngClassValid,u.yb(n,34).ngClassInvalid,u.yb(n,34).ngClassPending)})}function C(l){return u.Gb(0,[(l()(),u.ob(0,0,null,null,1,"app-log-modal",[],null,null,null,D,k)),u.nb(1,114688,null,0,c,[r.Db,h.b,r.a],null,null)],function(l,n){l(n,1,0)},null)}var w=u.kb("app-log-modal",c,C,{},{},[]),O=t("ZYCi");t.d(n,"Tab1PageModuleNgFactory",function(){return E});var E=u.lb(o,[],function(l){return u.vb([u.wb(512,u.j,u.ab,[[8,[e.a,m,w]],[3,u.j],u.x]),u.wb(4608,a.k,a.j,[u.u,[2,a.r]]),u.wb(4608,r.b,r.b,[u.z,u.g]),u.wb(4608,r.Db,r.Db,[r.b,u.j,u.q]),u.wb(4608,r.Gb,r.Gb,[r.b,u.j,u.q]),u.wb(4608,y.g,y.g,[]),u.wb(5120,h.b,h.d,[h.c]),u.wb(1073742336,a.b,a.b,[]),u.wb(1073742336,r.Bb,r.Bb,[]),u.wb(1073742336,y.f,y.f,[]),u.wb(1073742336,y.a,y.a,[]),u.wb(1073742336,O.n,O.n,[[2,O.t],[2,O.m]]),u.wb(1073742336,h.a,h.a,[]),u.wb(1073742336,o,o,[]),u.wb(1024,O.k,function(){return[[{path:"",component:b}]]},[]),u.wb(256,h.c,null,[])])})}}]);