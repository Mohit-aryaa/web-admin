"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[219],{4219:(q,c,i)=>{i.r(c),i.d(c,{InterestedCategoriesModule:()=>D});var p=i(8583),l=i(3679),n=i(2789),t=i(7716),C=i(1841),d=i(9517),f=i(8951),u=i(1095),g=i(6627);const h=["content"];function Z(o,a){1&o&&(t.TgZ(0,"th",13),t._uU(1," Name "),t.qZA())}function _(o,a){if(1&o&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&o){const e=a.$implicit;t.xp6(1),t.hij(" ",e.name,"")}}function b(o,a){1&o&&(t.TgZ(0,"th",15),t._uU(1," Action "),t.qZA())}function T(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"td",16),t.TgZ(1,"button",17),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA(),t.qZA(),t.TgZ(4,"button",18),t.NdJ("click",function(){const s=t.CHM(e),m=s.$implicit,N=s.index;return t.oxw().deleteCategory(m,N)}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA(),t.qZA(),t.qZA()}}function x(o,a){1&o&&t._UZ(0,"tr",19)}function v(o,a){1&o&&t._UZ(0,"tr",20)}function y(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",21),t.TgZ(1,"h4",22),t._uU(2,"Category update"),t.qZA(),t.TgZ(3,"button",23),t.NdJ("click",function(){return t.CHM(e).$implicit.dismiss("Cross click")}),t.TgZ(4,"span",24),t._uU(5,"\xd7"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(6,"div",25),t.TgZ(7,"form",26),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().postData()}),t.TgZ(8,"div",27),t.TgZ(9,"label",28),t._uU(10," Name"),t.qZA(),t._UZ(11,"input",29),t.qZA(),t.TgZ(12,"div",27),t.TgZ(13,"button",30),t._uU(14,"save"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(15,"div",31),t.TgZ(16,"button",32),t.NdJ("click",function(){return t.CHM(e).$implicit.close("Save click")}),t._uU(17,"Close"),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(7),t.Q6J("formGroup",e.addCategoryForm),t.xp6(4),t.Q6J("formControlName","name"),t.xp6(2),t.Q6J("disabled",!e.addCategoryForm.valid)}}let A=(()=>{class o{constructor(e,r,s,m){this.http=e,this.modalService=r,this._formBuilder=s,this._authService=m,this.dataSource=new n.by,this.displayedColumns=["name","action"]}ngAfterViewInit(){this.compileTable(),this.getData()}getData(){this.http.get("http://18.221.25.167:3000/admin/interest").subscribe(e=>{this.compileTable(e)})}ngOnInit(){this.addCategoryForm=this._formBuilder.group({name:["",[l.kI.required]]})}postData(){console.log(this.addCategoryForm.value),this._authService.addNewCategory(this.addCategoryForm.value).subscribe(e=>{this.addCategoryForm.patchValue({name:""}),this.modalService.dismissAll(),this.getData()},e=>{console.log(e)})}deleteCategory(e,r){console.log(e),this._authService.deleteCategory(e).subscribe(s=>{this.getData()})}compileTable(e=[]){this.dataSource=new n.by(e)}openModal(){this.modalService.open(this.content,{ariaLabelledBy:"modal-basic-title"}).result.then(e=>{},e=>{})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.eN),t.Y36(d.FF),t.Y36(l.qu),t.Y36(f.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-interested-categories"]],viewQuery:function(e,r){if(1&e&&t.Gf(h,5),2&e){let s;t.iGM(s=t.CRH())&&(r.content=s.first)}},decls:16,vars:3,consts:[[1,"flex","flex-col","flex-auto","min-w-0"],[1,"flex-auto","p-6","sm:p-10"],["mat-flat-button","","color","primary",1,"mb-3",3,"click"],["mat-table","",2,"width","100%",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","action"],["mat-header-cell","","class","text-right",4,"matHeaderCellDef"],["mat-cell","","class","text-right",4,"matCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["content",""],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"text-right"],["mat-cell","",1,"text-right"],["mat-icon-button",""],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""],[1,"modal-header"],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"px-4",3,"formGroup","ngSubmit"],[1,"form-group","mb-3"],["for","",1,"mb-1"],["type","text","id","name","name","name",1,"form-control",3,"formControlName"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"modal-footer"],["type","button",1,"btn","btn-outline-dark",3,"click"]],template:function(e,r){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div"),t.TgZ(3,"button",2),t.NdJ("click",function(){return r.openModal()}),t._uU(4,"Add"),t.qZA(),t.qZA(),t.TgZ(5,"table",3),t.ynx(6,4),t.YNc(7,Z,2,0,"th",5),t.YNc(8,_,2,1,"td",6),t.BQk(),t.ynx(9,7),t.YNc(10,b,2,0,"th",8),t.YNc(11,T,7,0,"td",9),t.BQk(),t.YNc(12,x,1,0,"tr",10),t.YNc(13,v,1,0,"tr",11),t.qZA(),t.qZA(),t.YNc(14,y,18,3,"ng-template",null,12,t.W1O),t.qZA()),2&e&&(t.xp6(5),t.Q6J("dataSource",r.dataSource),t.xp6(7),t.Q6J("matHeaderRowDef",r.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",r.displayedColumns))},directives:[u.lW,n.BZ,n.w1,n.fO,n.Dz,n.as,n.nj,n.ge,n.ev,g.Hw,n.XQ,n.Gk,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u],styles:[""]}),o})();var I=i(3423);let D=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.ez,I.Bz.forChild([{path:"",component:A}]),n.p0,u.ot,g.Ps,d.bz,l.UX,l.u5]]}),o})()}}]);