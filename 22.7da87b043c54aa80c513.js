(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"0O9/":function(t,e,n){"use strict";n.r(e),n.d(e,"SecurityAlertsModule",(function(){return Z}));var a=n("ofXK"),c=n("tyNb"),i=n("fXoL"),b=n("tk/3"),o=function(){function t(t){this.http=t}return t.prototype.getSecurityAlerts=function(){return this.http.get("/assets/server/security-alerts.json")},t.\u0275fac=function(e){return new(e||t)(i.Vb(b.a))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac}),t}(),s=n("M9IT"),l=n("Dh3D"),r=n("+0xr"),u=n("/dVW"),m=n("XWCR"),d=n("wZkO"),p=n("MutI"),R=function(){function t(){this.selectedIndex=0}return t.prototype.ngOnInit=function(){var t=this;setTimeout((function(){t.selectedIndex=0}),0)},t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["app-security-alerts-flypanel"]],decls:93,vars:1,consts:[[3,"selectedIndex"],["label","Summary"],[1,"col-4"],[1,"col-8"]],template:function(t,e){1&t&&(i.Rb(0,"mat-tab-group",0),i.Rb(1,"mat-tab",1),i.Rb(2,"mat-list"),i.Rb(3,"mat-list-item"),i.Rb(4,"span",2),i.Rb(5,"strong"),i.Bc(6,"Event Category:"),i.Qb(),i.Qb(),i.Rb(7,"span",3),i.Bc(8," OAS "),i.Qb(),i.Qb(),i.Rb(9,"mat-list-item"),i.Rb(10,"span",2),i.Rb(11,"strong"),i.Bc(12,"Event Sub Category:"),i.Qb(),i.Qb(),i.Rb(13,"span",3),i.Bc(14," OAS "),i.Qb(),i.Qb(),i.Rb(15,"mat-list-item"),i.Rb(16,"span",2),i.Rb(17,"strong"),i.Bc(18,"Username:"),i.Qb(),i.Qb(),i.Rb(19,"span",3),i.Bc(20," aron.jacob "),i.Qb(),i.Qb(),i.Rb(21,"mat-list-item"),i.Rb(22,"span",2),i.Rb(23,"strong"),i.Bc(24,"Session ID:"),i.Qb(),i.Qb(),i.Rb(25,"span",3),i.Bc(26," BH2323H2 "),i.Qb(),i.Qb(),i.Rb(27,"mat-list-item"),i.Rb(28,"span",2),i.Rb(29,"strong"),i.Bc(30,"Time:"),i.Qb(),i.Qb(),i.Rb(31,"span",3),i.Bc(32," 20/10/2020 "),i.Qb(),i.Qb(),i.Rb(33,"mat-list-item"),i.Rb(34,"span",2),i.Rb(35,"strong"),i.Bc(36,"Severity:"),i.Qb(),i.Qb(),i.Rb(37,"span",3),i.Bc(38," Medium "),i.Qb(),i.Qb(),i.Rb(39,"mat-list-item"),i.Rb(40,"span",2),i.Rb(41,"strong"),i.Bc(42,"Location:"),i.Qb(),i.Qb(),i.Rb(43,"span",3),i.Bc(44," Bangalore, India "),i.Qb(),i.Qb(),i.Rb(45,"mat-list-item"),i.Rb(46,"span",2),i.Rb(47,"strong"),i.Bc(48,"Reputation:"),i.Qb(),i.Qb(),i.Rb(49,"span",3),i.Bc(50," Good "),i.Qb(),i.Qb(),i.Rb(51,"mat-list-item"),i.Rb(52,"span",2),i.Rb(53,"strong"),i.Bc(54,"Device:"),i.Qb(),i.Qb(),i.Rb(55,"span",3),i.Bc(56," Macbook Pro "),i.Qb(),i.Qb(),i.Rb(57,"mat-list-item"),i.Rb(58,"span",2),i.Rb(59,"strong"),i.Bc(60,"User Agent:"),i.Qb(),i.Qb(),i.Rb(61,"span",3),i.Bc(62," Chrome "),i.Qb(),i.Qb(),i.Rb(63,"mat-list-item"),i.Rb(64,"span",2),i.Rb(65,"strong"),i.Bc(66,"Status:"),i.Qb(),i.Qb(),i.Rb(67,"span",3),i.Bc(68," Open "),i.Qb(),i.Qb(),i.Rb(69,"mat-list-item"),i.Rb(70,"span",2),i.Rb(71,"strong"),i.Bc(72,"Resolution:"),i.Qb(),i.Qb(),i.Rb(73,"span",3),i.Bc(74," Pending "),i.Qb(),i.Qb(),i.Rb(75,"mat-list-item"),i.Rb(76,"span",2),i.Rb(77,"strong"),i.Bc(78,"Action:"),i.Qb(),i.Qb(),i.Rb(79,"span",3),i.Bc(80," Allow "),i.Qb(),i.Qb(),i.Rb(81,"mat-list-item"),i.Rb(82,"span",2),i.Rb(83,"strong"),i.Bc(84,"Issue Owner:"),i.Qb(),i.Qb(),i.Rb(85,"span",3),i.Bc(86," SOC1 "),i.Qb(),i.Qb(),i.Rb(87,"mat-list-item"),i.Rb(88,"span",2),i.Rb(89,"strong"),i.Bc(90,"Policy:"),i.Qb(),i.Qb(),i.Rb(91,"span",3),i.Bc(92," None "),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb()),2&t&&i.ic("selectedIndex",e.selectedIndex)},directives:[d.b,d.a,p.a,p.b],styles:[""]}),t}(),f=n("xJkR");function Q(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," Category "),i.Qb())}function h(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Ec(" ",n.event_category," ",n.event_sub_category,"")}}function g(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," User "),i.Qb())}function y(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Dc(" ",n.username,"")}}function B(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," Severity "),i.Qb())}function v(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Dc(" ",n.severity,"")}}function w(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," Location "),i.Qb())}function C(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Ec(" ",n.City," ",n.country,"")}}function A(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," Reputation "),i.Qb())}function D(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Dc(" ",n.reputation,"")}}function z(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," Device "),i.Qb())}function S(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Dc(" ",n.device,"")}}function P(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," User Agent "),i.Qb())}function k(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Dc(" ",n.user_agent,"")}}function O(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," Status "),i.Qb())}function x(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Dc(" ",n.status,"")}}function F(t,e){1&t&&(i.Rb(0,"mat-header-cell",25),i.Bc(1," Resolution "),i.Qb())}function I(t,e){if(1&t&&(i.Rb(0,"mat-cell"),i.Bc(1),i.Qb()),2&t){var n=e.$implicit;i.Ab(1),i.Dc(" ",n.resolution,"")}}function L(t,e){1&t&&i.Mb(0,"mat-header-row",26)}function M(t,e){if(1&t){var n=i.Sb();i.Rb(0,"mat-row",27),i.Yb("click",(function(){i.tc(n);var t=e.$implicit;return i.cc().onRowClicked(t)})),i.Qb()}}function E(t,e){1&t&&i.Mb(0,"ngx-skeleton-loader",28)}var _=[{path:"",component:function(){function t(t,e){this.service=t,this.router=e,this._subscriptions=[],this.displayedColumns=["category","username","severity","location","reputation","device","user_agent","status","resolution"],this.dataSource=new r.k,this.isLoadingResults=!0,this.pageSize=10,this.showFlypanel=!1,this.state=u.b.DEFAULT,this.size=u.a.LARGE,this.showPanelContent=!1,this.selectedIndex=2}return t.prototype.ngOnInit=function(){this.getList()},t.prototype.ngAfterViewInit=function(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort},t.prototype.getList=function(){var t=this;this.isLoadingResults=!0,this._subscriptions.push(this.service.getSecurityAlerts().subscribe((function(e){e.data&&(t.dataSource.data=e.data),t.isLoadingResults=!1})))},t.prototype.onRowClicked=function(t){var e=this;this.showFlypanel=!0,this.selectedAlert=t,setTimeout((function(){e.selectedIndex=0}),0)},t.prototype.handleFlyPanelClose=function(){this.showFlypanel=!1},t.prototype.handleFlyPanelExpand=function(){this.state=u.b.EXPAND},t.prototype.handleFlyPanelOpen=function(){this.showPanelContent=!0},t.prototype.ngOnDestroy=function(){this._subscriptions.forEach((function(t){t&&t.unsubscribe()}))},t.\u0275fac=function(e){return new(e||t)(i.Lb(o),i.Lb(c.d))},t.\u0275cmp=i.Fb({type:t,selectors:[["app-security-alerts"]],viewQuery:function(t,e){var n;1&t&&(i.Fc(s.a,!0),i.Fc(l.a,!0)),2&t&&(i.qc(n=i.Zb())&&(e.paginator=n.first),i.qc(n=i.Zb())&&(e.sort=n.first))},decls:43,vars:10,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-lg-12","col-md-12"],[1,"mat-title"],[1,"card"],[1,"card-body","table-responsive"],["matSort","",1,"table","table-striped",3,"dataSource"],["matColumnDef","category"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","username"],["matColumnDef","severity"],["matColumnDef","location"],["matColumnDef","reputation"],["matColumnDef","device"],["matColumnDef","user_agent"],["matColumnDef","status"],["matColumnDef","resolution"],["class","thead-dark",4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],[3,"pageSize","hidden"],["count","8","class","table-skelton",4,"ngIf"],[3,"state","show","size","title","onClose","onExpand"],["panelContent","",1,"panel-content"],["mat-sort-header",""],[1,"thead-dark"],[3,"click"],["count","8",1,"table-skelton"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Rb(1,"div",1),i.Rb(2,"div",2),i.Rb(3,"div",3),i.Rb(4,"h2",4),i.Bc(5,"Security Alerts"),i.Qb(),i.Rb(6,"div",5),i.Rb(7,"div",6),i.Rb(8,"mat-table",7),i.Pb(9,8),i.zc(10,Q,2,0,"mat-header-cell",9),i.zc(11,h,2,2,"mat-cell",10),i.Ob(),i.Pb(12,11),i.zc(13,g,2,0,"mat-header-cell",9),i.zc(14,y,2,1,"mat-cell",10),i.Ob(),i.Pb(15,12),i.zc(16,B,2,0,"mat-header-cell",9),i.zc(17,v,2,1,"mat-cell",10),i.Ob(),i.Pb(18,13),i.zc(19,w,2,0,"mat-header-cell",9),i.zc(20,C,2,2,"mat-cell",10),i.Ob(),i.Pb(21,14),i.zc(22,A,2,0,"mat-header-cell",9),i.zc(23,D,2,1,"mat-cell",10),i.Ob(),i.Pb(24,15),i.zc(25,z,2,0,"mat-header-cell",9),i.zc(26,S,2,1,"mat-cell",10),i.Ob(),i.Pb(27,16),i.zc(28,P,2,0,"mat-header-cell",9),i.zc(29,k,2,1,"mat-cell",10),i.Ob(),i.Pb(30,17),i.zc(31,O,2,0,"mat-header-cell",9),i.zc(32,x,2,1,"mat-cell",10),i.Ob(),i.Pb(33,18),i.zc(34,F,2,0,"mat-header-cell",9),i.zc(35,I,2,1,"mat-cell",10),i.Ob(),i.zc(36,L,1,0,"mat-header-row",19),i.zc(37,M,1,0,"mat-row",20),i.Qb(),i.Mb(38,"mat-paginator",21),i.zc(39,E,1,0,"ngx-skeleton-loader",22),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Qb(),i.Rb(40,"app-fly-panel",23),i.Yb("onClose",(function(){return e.handleFlyPanelClose()}))("onExpand",(function(){return e.handleFlyPanelExpand()})),i.Rb(41,"div",24),i.Mb(42,"app-security-alerts-flypanel"),i.Qb(),i.Qb()),2&t&&(i.Ab(8),i.ic("dataSource",e.dataSource),i.Ab(28),i.ic("matHeaderRowDef",e.displayedColumns),i.Ab(1),i.ic("matRowDefColumns",e.displayedColumns),i.Ab(1),i.ic("pageSize",e.pageSize)("hidden",e.isLoadingResults),i.Ab(1),i.ic("ngIf",e.isLoadingResults),i.Ab(1),i.ic("state",e.state)("show",e.showFlypanel)("size",e.size)("title",null==e.selectedAlert?null:e.selectedAlert.username))},directives:[r.j,l.a,r.c,r.e,r.b,r.g,r.i,s.a,a.l,m.a,R,r.d,l.b,r.a,r.f,r.h,f.a],styles:[".thead-dark[_ngcontent-%COMP%]{background-color:#29539b;background-image:linear-gradient(315deg,#29539b,#1e3b70 74%);border-top-left-radius:6px;border-top-right-radius:6px}.mat-header-cell[_ngcontent-%COMP%]{font-size:15px;font-weight:700;color:#fff!important}mat-row[_ngcontent-%COMP%]:nth-child(2n){background-color:#f9f9f9}mat-table[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:6px}"]}),t}()}],$=n("3Pt+"),H=n("bTqV"),T=n("kmnG"),U=n("FKr1"),N=n("qFsG"),X=n("d3UM"),j=n("Qu3c"),q=n("FpXt"),G=n("NFeN"),J=n("7EHt"),V=n("TU8p"),Z=function(){function t(){}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},providers:[o],imports:[[a.c,c.h.forChild(_),$.g,q.a,$.o,H.b,U.p,T.e,N.b,X.b,j.b,f.b,r.l,s.b,l.c,G.b,d.c,p.c,J.a,V.a]]}),t}()}}]);