(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{gO2l:function(t,e,b){"use strict";b.r(e),b.d(e,"APIsModule",(function(){return V}));var a=b("ofXK"),i=b("tyNb"),n=b("fXoL"),s=b("tk/3"),c=function(){function t(t){this.http=t}return t.prototype.getAPIs=function(){return this.http.get("/assets/server/apis.json")},t.\u0275fac=function(e){return new(e||t)(n.Vb(s.a))},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac}),t}(),o=b("M9IT"),l=b("Dh3D"),r=b("+0xr"),m=b("/dVW"),p=b("XWCR"),R=b("wZkO"),d=b("MutI"),Q=b("f0Cb"),u=function(){function t(){this.selectedIndex=0}return t.prototype.ngOnInit=function(){var t=this;setTimeout((function(){t.selectedIndex=0}),0)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Fb({type:t,selectors:[["app-apis-flypanel"]],decls:193,vars:1,consts:[[3,"selectedIndex"],["label","Insights"],[1,"col-4"],[1,"col-8"],["label","Security"],["label","Notifications"]],template:function(t,e){1&t&&(n.Rb(0,"mat-tab-group",0),n.Rb(1,"mat-tab",1),n.Rb(2,"mat-list"),n.Rb(3,"mat-list-item"),n.Rb(4,"span",2),n.Rb(5,"strong"),n.Bc(6,"Path:"),n.Qb(),n.Qb(),n.Rb(7,"span",3),n.Bc(8," /account/account-id/transaction/transaction-id "),n.Qb(),n.Qb(),n.Rb(9,"mat-list-item"),n.Rb(10,"span",2),n.Rb(11,"strong"),n.Bc(12,"Service:"),n.Qb(),n.Qb(),n.Rb(13,"span",3),n.Bc(14," Application Name "),n.Qb(),n.Qb(),n.Rb(15,"mat-list-item"),n.Rb(16,"span",2),n.Rb(17,"strong"),n.Bc(18,"Type:"),n.Qb(),n.Qb(),n.Rb(19,"span",3),n.Bc(20," REST "),n.Qb(),n.Qb(),n.Rb(21,"mat-list-item"),n.Rb(22,"span",2),n.Rb(23,"strong"),n.Bc(24,"Method:"),n.Qb(),n.Qb(),n.Rb(25,"span",3),n.Bc(26," GET "),n.Qb(),n.Qb(),n.Rb(27,"mat-list-item"),n.Rb(28,"span",2),n.Rb(29,"strong"),n.Bc(30,"First Discovered:"),n.Qb(),n.Qb(),n.Rb(31,"span",3),n.Bc(32," 20/10/2020 "),n.Qb(),n.Qb(),n.Rb(33,"mat-list-item"),n.Rb(34,"span",2),n.Rb(35,"strong"),n.Bc(36,"Shadow API:"),n.Qb(),n.Qb(),n.Rb(37,"span",3),n.Bc(38," Yes "),n.Qb(),n.Qb(),n.Rb(39,"mat-list-item"),n.Rb(40,"span",2),n.Rb(41,"strong"),n.Bc(42,"Direction:"),n.Qb(),n.Qb(),n.Rb(43,"span",3),n.Bc(44," NS "),n.Qb(),n.Qb(),n.Rb(45,"mat-list-item"),n.Rb(46,"span",2),n.Rb(47,"strong"),n.Bc(48,"Secure:"),n.Qb(),n.Qb(),n.Rb(49,"span",3),n.Bc(50," Yes "),n.Qb(),n.Qb(),n.Rb(51,"mat-list-item"),n.Rb(52,"span",2),n.Rb(53,"strong"),n.Bc(54,"Privilege:"),n.Qb(),n.Qb(),n.Rb(55,"span",3),n.Bc(56," Yes "),n.Qb(),n.Qb(),n.Rb(57,"mat-list-item"),n.Rb(58,"span",2),n.Rb(59,"strong"),n.Bc(60,"Handle PII:"),n.Qb(),n.Qb(),n.Rb(61,"span",3),n.Bc(62," Yes "),n.Qb(),n.Qb(),n.Rb(63,"mat-list-item"),n.Rb(64,"span",2),n.Rb(65,"strong"),n.Bc(66,"Risk Score:"),n.Qb(),n.Qb(),n.Rb(67,"span",3),n.Bc(68," 0 "),n.Qb(),n.Qb(),n.Qb(),n.Mb(69,"mat-divider"),n.Rb(70,"h6"),n.Bc(71,"Usage & Health"),n.Qb(),n.Rb(72,"mat-list"),n.Rb(73,"mat-list-item"),n.Rb(74,"span",2),n.Rb(75,"strong"),n.Bc(76,"API Calls:"),n.Qb(),n.Qb(),n.Rb(77,"span",3),n.Bc(78," 1982 "),n.Qb(),n.Qb(),n.Rb(79,"mat-list-item"),n.Rb(80,"span",2),n.Rb(81,"strong"),n.Bc(82,"Data transfer:"),n.Qb(),n.Qb(),n.Rb(83,"span",3),n.Bc(84," 123B "),n.Qb(),n.Qb(),n.Rb(85,"mat-list-item"),n.Rb(86,"span",2),n.Rb(87,"strong"),n.Bc(88,"API Calls blocked:"),n.Qb(),n.Qb(),n.Rb(89,"span",3),n.Bc(90," 0 "),n.Qb(),n.Qb(),n.Rb(91,"mat-list-item"),n.Rb(92,"span",2),n.Rb(93,"strong"),n.Bc(94,"Errors:"),n.Qb(),n.Qb(),n.Rb(95,"span",3),n.Bc(96," 0 "),n.Qb(),n.Qb(),n.Rb(97,"mat-list-item"),n.Rb(98,"span",2),n.Rb(99,"strong"),n.Bc(100,"Response Time:"),n.Qb(),n.Qb(),n.Rb(101,"span",3),n.Bc(102," 12ms "),n.Qb(),n.Qb(),n.Rb(103,"mat-list-item"),n.Rb(104,"span",2),n.Rb(105,"strong"),n.Bc(106,"Last invoked time:"),n.Qb(),n.Qb(),n.Rb(107,"span",3),n.Bc(108," 20/12/2020 "),n.Qb(),n.Qb(),n.Rb(109,"mat-list-item"),n.Rb(110,"span",2),n.Rb(111,"strong"),n.Bc(112,"Top-N source geo's:"),n.Qb(),n.Qb(),n.Rb(113,"span",3),n.Bc(114," NA "),n.Qb(),n.Qb(),n.Rb(115,"mat-list-item"),n.Rb(116,"span",2),n.Rb(117,"strong"),n.Bc(118,"Usage Trend Graph:"),n.Qb(),n.Qb(),n.Rb(119,"span",3),n.Bc(120," NA "),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(121,"mat-tab",4),n.Rb(122,"mat-list"),n.Rb(123,"mat-list-item"),n.Rb(124,"span",2),n.Rb(125,"strong"),n.Bc(126,"Usage Anomalies:"),n.Qb(),n.Qb(),n.Rb(127,"span",3),n.Bc(128," None "),n.Qb(),n.Qb(),n.Rb(129,"mat-list-item"),n.Rb(130,"span",2),n.Rb(131,"strong"),n.Bc(132,"Malicious activities (CRS):"),n.Qb(),n.Qb(),n.Rb(133,"span",3),n.Bc(134," None "),n.Qb(),n.Qb(),n.Rb(135,"mat-list-item"),n.Rb(136,"span",2),n.Rb(137,"strong"),n.Bc(138,"OAS schema deviations:"),n.Qb(),n.Qb(),n.Rb(139,"span",3),n.Bc(140," 34 "),n.Qb(),n.Qb(),n.Rb(141,"mat-list-item"),n.Rb(142,"span",2),n.Rb(143,"strong"),n.Bc(144,"Reputation related events:"),n.Qb(),n.Qb(),n.Rb(145,"span",3),n.Bc(146," 123 "),n.Qb(),n.Qb(),n.Rb(147,"mat-list-item"),n.Rb(148,"span",2),n.Rb(149,"strong"),n.Bc(150,"ML based anomalies:"),n.Qb(),n.Qb(),n.Rb(151,"span",3),n.Bc(152," None "),n.Qb(),n.Qb(),n.Rb(153,"mat-list-item"),n.Rb(154,"span",2),n.Rb(155,"strong"),n.Bc(156,"False positives %:"),n.Qb(),n.Qb(),n.Rb(157,"span",3),n.Bc(158," 12% "),n.Qb(),n.Qb(),n.Qb(),n.Mb(159,"mat-divider"),n.Rb(160,"h6"),n.Bc(161,"Policy"),n.Qb(),n.Rb(162,"mat-list"),n.Rb(163,"mat-list-item"),n.Rb(164,"span",2),n.Rb(165,"strong"),n.Bc(166,"Policy Enabled:"),n.Qb(),n.Qb(),n.Rb(167,"span",3),n.Bc(168," Yes "),n.Qb(),n.Qb(),n.Rb(169,"mat-list-item"),n.Rb(170,"span",2),n.Rb(171,"strong"),n.Bc(172,"Policy Actions:"),n.Qb(),n.Qb(),n.Rb(173,"span",3),n.Bc(174," None "),n.Qb(),n.Qb(),n.Rb(175,"mat-list-item"),n.Rb(176,"span",2),n.Rb(177,"strong"),n.Bc(178,"Exclude rules/API\u2019s:"),n.Qb(),n.Qb(),n.Rb(179,"span",3),n.Bc(180," None "),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(181,"mat-tab",5),n.Rb(182,"mat-list"),n.Rb(183,"mat-list-item"),n.Bc(184,"This is Notification 1."),n.Qb(),n.Rb(185,"mat-list-item"),n.Bc(186,"This is Notification 2"),n.Qb(),n.Rb(187,"mat-list-item"),n.Bc(188,"This is Notification 3"),n.Qb(),n.Rb(189,"mat-list-item"),n.Bc(190,"This is Notification 4"),n.Qb(),n.Rb(191,"mat-list-item"),n.Bc(192,"This is Notification 5"),n.Qb(),n.Qb(),n.Qb(),n.Qb()),2&t&&n.ic("selectedIndex",e.selectedIndex)},directives:[R.b,R.a,d.a,d.b,Q.a],styles:[""]}),t}(),f=b("xJkR");function h(t,e){1&t&&(n.Rb(0,"mat-header-cell",24),n.Bc(1," Path "),n.Qb())}function g(t,e){if(1&t&&(n.Rb(0,"mat-cell"),n.Bc(1),n.Qb()),2&t){var b=e.$implicit;n.Ab(1),n.Dc(" ",b.path,"")}}function B(t,e){1&t&&(n.Rb(0,"mat-header-cell",24),n.Bc(1," Service "),n.Qb())}function v(t,e){if(1&t&&(n.Rb(0,"mat-cell"),n.Bc(1),n.Qb()),2&t){var b=e.$implicit;n.Ab(1),n.Dc(" ",b.service,"")}}function y(t,e){1&t&&(n.Rb(0,"mat-header-cell",24),n.Bc(1," Type "),n.Qb())}function P(t,e){if(1&t&&(n.Rb(0,"mat-cell"),n.Bc(1),n.Qb()),2&t){var b=e.$implicit;n.Ab(1),n.Dc(" ",b.type,"")}}function w(t,e){1&t&&(n.Rb(0,"mat-header-cell",24),n.Bc(1," Method "),n.Qb())}function A(t,e){if(1&t&&(n.Rb(0,"mat-cell"),n.Bc(1),n.Qb()),2&t){var b=e.$implicit;n.Ab(1),n.Dc(" ",b.method," ")}}function C(t,e){1&t&&(n.Rb(0,"mat-header-cell",24),n.Bc(1," First Discovered "),n.Qb())}function D(t,e){if(1&t&&(n.Rb(0,"mat-cell"),n.Bc(1),n.Qb()),2&t){var b=e.$implicit;n.Ab(1),n.Dc(" ",b.first_discovered,"")}}function k(t,e){1&t&&(n.Rb(0,"mat-header-cell",24),n.Bc(1," Secure "),n.Qb())}function I(t,e){if(1&t&&(n.Rb(0,"mat-cell"),n.Bc(1),n.Qb()),2&t){var b=e.$implicit;n.Ab(1),n.Dc(" ",b.secure,"")}}function z(t,e){1&t&&(n.Rb(0,"mat-header-cell",24),n.Bc(1," Privilege "),n.Qb())}function S(t,e){if(1&t&&(n.Rb(0,"mat-cell"),n.Bc(1),n.Qb()),2&t){var b=e.$implicit;n.Ab(1),n.Dc(" ",b.privilege,"")}}function x(t,e){1&t&&(n.Rb(0,"mat-header-cell",24),n.Bc(1," Risk Score "),n.Qb())}function F(t,e){if(1&t&&(n.Rb(0,"mat-cell"),n.Bc(1),n.Qb()),2&t){var b=e.$implicit;n.Ab(1),n.Dc(" ",b.risk_score,"")}}function N(t,e){1&t&&n.Mb(0,"mat-header-row",25)}function O(t,e){if(1&t){var b=n.Sb();n.Rb(0,"mat-row",26),n.Yb("click",(function(){n.tc(b);var t=e.$implicit;return n.cc().onRowClicked(t)})),n.Qb()}}function M(t,e){1&t&&n.Mb(0,"ngx-skeleton-loader",27)}var T=[{path:"",component:function(){function t(t,e){this.service=t,this.router=e,this._subscriptions=[],this.displayedColumns=["path","service","type","method","first_discovered","secure","privilege","risk_score"],this.dataSource=new r.k,this.isLoadingResults=!0,this.pageSize=10,this.showFlypanel=!1,this.state=m.b.DEFAULT,this.size=m.a.LARGE,this.showPanelContent=!1,this.selectedIndex=2}return t.prototype.ngOnInit=function(){this.getList()},t.prototype.ngAfterViewInit=function(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort},t.prototype.getList=function(){var t=this;this.isLoadingResults=!0,this._subscriptions.push(this.service.getAPIs().subscribe((function(e){e.data&&(t.dataSource.data=e.data),t.isLoadingResults=!1})))},t.prototype.onRowClicked=function(t){var e=this;this.showFlypanel=!0,this.selectedAPI=t,setTimeout((function(){e.selectedIndex=0}),0)},t.prototype.handleFlyPanelClose=function(){this.showFlypanel=!1},t.prototype.handleFlyPanelExpand=function(){this.state=m.b.EXPAND},t.prototype.handleFlyPanelOpen=function(){this.showPanelContent=!0},t.prototype.ngOnDestroy=function(){this._subscriptions.forEach((function(t){t&&t.unsubscribe()}))},t.\u0275fac=function(e){return new(e||t)(n.Lb(c),n.Lb(i.d))},t.\u0275cmp=n.Fb({type:t,selectors:[["app-apis"]],viewQuery:function(t,e){var b;1&t&&(n.Fc(o.a,!0),n.Fc(l.a,!0)),2&t&&(n.qc(b=n.Zb())&&(e.paginator=b.first),n.qc(b=n.Zb())&&(e.sort=b.first))},decls:40,vars:10,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12","col-md-12"],[1,"mat-title"],[1,"card"],[1,"card-body","table-responsive"],["matSort","",1,"table","table-striped",3,"dataSource"],["matColumnDef","path"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","service"],["matColumnDef","type"],["matColumnDef","method"],["matColumnDef","first_discovered"],["matColumnDef","secure"],["matColumnDef","privilege"],["matColumnDef","risk_score"],["class","thead-dark",4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"pageSize","hidden"],["count","8","class","table-skelton",4,"ngIf"],[3,"state","show","size","title","onClose","onExpand"],["panelContent","",1,"panel-content"],["mat-sort-header",""],[1,"thead-dark"],[3,"click"],["count","8",1,"table-skelton"]],template:function(t,e){1&t&&(n.Rb(0,"div",0),n.Rb(1,"div",1),n.Rb(2,"div",2),n.Rb(3,"div",3),n.Rb(4,"h2",4),n.Bc(5,"APIs"),n.Qb(),n.Rb(6,"div",5),n.Rb(7,"div",6),n.Rb(8,"mat-table",7),n.Pb(9,8),n.zc(10,h,2,0,"mat-header-cell",9),n.zc(11,g,2,1,"mat-cell",10),n.Ob(),n.Pb(12,11),n.zc(13,B,2,0,"mat-header-cell",9),n.zc(14,v,2,1,"mat-cell",10),n.Ob(),n.Pb(15,12),n.zc(16,y,2,0,"mat-header-cell",9),n.zc(17,P,2,1,"mat-cell",10),n.Ob(),n.Pb(18,13),n.zc(19,w,2,0,"mat-header-cell",9),n.zc(20,A,2,1,"mat-cell",10),n.Ob(),n.Pb(21,14),n.zc(22,C,2,0,"mat-header-cell",9),n.zc(23,D,2,1,"mat-cell",10),n.Ob(),n.Pb(24,15),n.zc(25,k,2,0,"mat-header-cell",9),n.zc(26,I,2,1,"mat-cell",10),n.Ob(),n.Pb(27,16),n.zc(28,z,2,0,"mat-header-cell",9),n.zc(29,S,2,1,"mat-cell",10),n.Ob(),n.Pb(30,17),n.zc(31,x,2,0,"mat-header-cell",9),n.zc(32,F,2,1,"mat-cell",10),n.Ob(),n.zc(33,N,1,0,"mat-header-row",18),n.zc(34,O,1,0,"mat-row",19),n.Qb(),n.Mb(35,"mat-paginator",20),n.zc(36,M,1,0,"ngx-skeleton-loader",21),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Qb(),n.Rb(37,"app-fly-panel",22),n.Yb("onClose",(function(){return e.handleFlyPanelClose()}))("onExpand",(function(){return e.handleFlyPanelExpand()})),n.Rb(38,"div",23),n.Mb(39,"app-apis-flypanel"),n.Qb(),n.Qb()),2&t&&(n.Ab(8),n.ic("dataSource",e.dataSource),n.Ab(25),n.ic("matHeaderRowDef",e.displayedColumns),n.Ab(1),n.ic("matRowDefColumns",e.displayedColumns),n.Ab(1),n.ic("pageSize",e.pageSize)("hidden",e.isLoadingResults),n.Ab(1),n.ic("ngIf",e.isLoadingResults),n.Ab(1),n.ic("state",e.state)("show",e.showFlypanel)("size",e.size)("title",null==e.selectedAPI?null:e.selectedAPI.title))},directives:[r.j,l.a,r.c,r.e,r.b,r.g,r.i,o.a,a.l,p.a,u,r.d,l.b,r.a,r.f,r.h,f.a],styles:[".thead-dark[_ngcontent-%COMP%]{background-color:#29539b;background-image:linear-gradient(315deg,#29539b,#1e3b70 74%);border-top-left-radius:6px;border-top-right-radius:6px}.mat-header-cell[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#fff!important}mat-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f9f9f9}mat-table[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:6px}"]}),t}()}],E=b("3Pt+"),L=b("bTqV"),_=b("kmnG"),$=b("FKr1"),H=b("qFsG"),Y=b("d3UM"),U=b("Qu3c"),G=b("FpXt"),X=b("NFeN"),q=b("7EHt"),J=b("TU8p"),V=function(){function t(){}return t.\u0275mod=n.Jb({type:t}),t.\u0275inj=n.Ib({factory:function(e){return new(e||t)},providers:[c],imports:[[a.c,i.h.forChild(T),E.g,G.a,E.o,L.b,$.p,_.e,H.b,Y.b,U.b,f.b,r.l,o.b,l.c,X.b,R.c,d.c,q.a,J.a]]}),t}()}}]);