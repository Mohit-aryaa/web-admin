"use strict";(self.webpackChunk_fuse_starter=self.webpackChunk_fuse_starter||[]).push([[448],{2448:(V,c,r)=>{r.r(c),r.d(c,{AuthSignUpModule:()=>H});var p=r(3423),d=r(1095),f=r(7539),g=r(8295),h=r(6627),Z=r(9983),A=r(4885),_=r(2255),v=r(588),x=r(4466),a=r(3679),T=r(8288),t=r(7716),b=r(8951),C=r(8583),u=r(5939),U=r(4897),I=r(3994);const q=["signUpNgForm"],w=["signInOtpNgForm"];function J(e,i){if(1&e&&(t.TgZ(0,"fuse-alert",55),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.Q6J("appearance","outline")("showIcon",!1)("type",o.alert.type)("@shake","error"===o.alert.type),t.xp6(1),t.hij(" ",o.alert.message," ")}}function S(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Full name is required "),t.qZA())}function F(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Email address is required "),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid email address "),t.qZA())}function Q(e,i){1&e&&t._UZ(0,"mat-icon",36),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function O(e,i){1&e&&t._UZ(0,"mat-icon",36),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function k(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1," Create your free account "),t.qZA())}function M(e,i){1&e&&t._UZ(0,"mat-progress-spinner",56),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}function Y(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Phone number is required "),t.qZA())}function j(e,i){1&e&&(t.TgZ(0,"mat-error"),t._uU(1," Please enter a valid phone number "),t.qZA())}function P(e,i){1&e&&t._UZ(0,"mat-icon",36),2&e&&t.Q6J("svgIcon","heroicons_solid:eye")}function B(e,i){1&e&&t._UZ(0,"mat-icon",36),2&e&&t.Q6J("svgIcon","heroicons_solid:eye-off")}function E(e,i){1&e&&(t.TgZ(0,"span"),t._uU(1," Sign in "),t.qZA())}function R(e,i){1&e&&t._UZ(0,"mat-progress-spinner",56),2&e&&t.Q6J("diameter",24)("mode","indeterminate")}const z=function(){return["/sign-in"]},y=function(){return["./"]},G=function(){return{initialCountry:"in"}},L=[{path:"",component:(()=>{class e{constructor(o,n,s,m){this._authService=o,this._activatedRoute=n,this._formBuilder=s,this._router=m,this.alert={type:"success",message:""},this.showAlert=!1,this.countryCode=91}ngOnInit(){this.signUpForm=this._formBuilder.group({name:["",a.kI.required],email:["",[a.kI.required,a.kI.email]],password:["",a.kI.required],company:[""],agreements:["",a.kI.requiredTrue]}),this.signInOtpForm=this._formBuilder.group({dialCode:["91",[a.kI.required]],number:["",[a.kI.required]],otp:["",[a.kI.required]]})}signUp(){this.signUpForm.invalid||(this.signUpForm.disable(),this.showAlert=!1,this._authService.signUp(this.signUpForm.value).subscribe(o=>{this._router.navigateByUrl("/confirmation-required")},o=>{this.signUpForm.enable(),this.signUpNgForm.resetForm(),this.alert={type:"error",message:"Something went wrong, please try again."},this.showAlert=!0}))}onCountryChange(o){console.log("dial",o.dialCode),this.countryCode=o.dialCode}getOtp(){const o={type:"phone",countryPhoneCode:"+"+this.countryCode,phone:this.signInOtpForm.value.number};console.log(o),this._authService.getOtp(o).subscribe(n=>{console.log(n)},n=>{console.log(n)})}signInOtp(){this.signInOtpForm.invalid||(this.signInOtpForm.disable(),this.showAlert=!1,this.signInOtpValues={type:"phone",countryPhoneCode:"+"+this.countryCode,phone:this.signInOtpForm.value.number,otp:this.signInOtpForm.value.otp},this._authService.signInOtp(this.signInOtpValues).subscribe(()=>{const o=this._activatedRoute.snapshot.queryParamMap.get("redirectURL")||"/signed-in-redirect";this._router.navigateByUrl(o)},o=>{var n;this.signInOtpForm.enable(),this.signInOtpForm.patchValue({otp:""}),n="string"!=typeof o.error.errors[0]?o.error.message+": "+o.error.errors[0].msg:o.error.message+": "+o.error.errors[0],console.log(o),this.alert={type:"error",message:n},this.showAlert=!0}))}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(b.e),t.Y36(p.gz),t.Y36(a.qu),t.Y36(p.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["auth-sign-up"]],viewQuery:function(o,n){if(1&o&&(t.Gf(q,5),t.Gf(w,5)),2&o){let s;t.iGM(s=t.CRH())&&(n.signUpNgForm=s.first),t.iGM(s=t.CRH())&&(n.signInOtpNgForm=s.first)}},decls:117,vars:42,consts:[[1,"flex","flex-col","sm:flex-row","items-center","md:items-start","sm:justify-center","md:justify-start","flex-auto","min-w-0"],[1,"md:flex","md:items-center","md:justify-end","w-full","sm:w-auto","md:h-full","md:w-1/2","py-8","px-4","sm:p-12","md:p-16","sm:rounded-2xl","md:rounded-none","sm:shadow","md:shadow-none","sm:bg-card"],[1,"w-full","max-w-80","sm:w-80","mx-auto","sm:mx-0"],[1,"w-12"],["src","assets/images/logo/logo.svg"],[1,"mt-8","text-4xl","font-extrabold","tracking-tight","leading-tight"],[1,"flex","items-baseline","mt-0.5","font-medium"],[1,"ml-1","text-primary-500","hover:underline",3,"routerLink"],["class","mt-8 -mb-4",3,"appearance","showIcon","type",4,"ngIf"],["label","Signup"],[1,"mt-8",3,"formGroup"],[1,"w-full"],["id","name","matInput","",3,"formControlName"],[4,"ngIf"],["id","email","matInput","",3,"formControlName"],["id","password","matInput","","type","password",3,"formControlName"],["passwordField",""],["mat-icon-button","","type","button","matSuffix","",3,"click"],["class","icon-size-5",3,"svgIcon",4,"ngIf"],["id","company-confirm","matInput","",3,"formControlName"],[1,"inline-flex","items-end","w-full","mt-1.5"],[3,"color","formControlName"],["mat-flat-button","",1,"fuse-mat-button-large","w-full","mt-6",3,"color","disabled","click"],[3,"diameter","mode",4,"ngIf"],["label","Phone"],["signInOtpNgForm","ngForm"],["type","text","matInput","","formControlName","dialCode",2,"border","1px solid black","display","none",3,"value"],["id","number","matInput","","type","number","ng2TelInput","",3,"ng2TelInputOptions","formControlName","countryChange"],["type","button","mat-flat-button","",1,"fuse-mat-button","otp-btn",3,"color","disabled","click"],["id","","matInput","","type","password",3,"formControlName"],["otpField",""],[1,"flex","items-center","mt-8"],[1,"flex-auto","mt-px","border-t"],[1,"mx-2","text-secondary"],[1,"flex","items-center","mt-8","space-x-4"],["type","button","mat-stroked-button","",1,"flex-auto"],[1,"icon-size-5",3,"svgIcon"],[1,"relative","hidden","md:flex","flex-auto","items-center","justify-center","w-1/2","h-full","p-16","lg:px-28","overflow-hidden","bg-gray-800","dark:border-l"],["viewBox","0 0 960 540","width","100%","height","100%","preserveAspectRatio","xMidYMax slice","xmlns","http://www.w3.org/2000/svg",1,"absolute","inset-0","pointer-events-none"],["fill","none","stroke","currentColor","stroke-width","100",1,"text-gray-700","opacity-25"],["r","234","cx","196","cy","23"],["r","234","cx","790","cy","491"],["viewBox","0 0 220 192","width","220","height","192","fill","none",1,"absolute","-top-16","-right-16","text-gray-700"],["id","837c3e70-6c3a-44e6-8854-cc48c737b659","x","0","y","0","width","20","height","20","patternUnits","userSpaceOnUse"],["x","0","y","0","width","4","height","4","fill","currentColor"],["width","220","height","192","fill","url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"],[1,"z-10","relative","w-full","max-w-2xl"],[1,"text-7xl","font-bold","leading-none","text-gray-100"],[1,"mt-6","text-lg","tracking-tight","leading-6","text-gray-400"],[1,"flex","flex-0","items-center","-space-x-1.5"],["src","assets/images/avatars/female-18.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/female-11.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-09.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],["src","assets/images/avatars/male-16.jpg",1,"flex-0","w-10","h-10","rounded-full","ring-4","ring-offset-1","ring-gray-800","ring-offset-gray-800","object-cover"],[1,"ml-4","font-medium","tracking-tight","text-gray-400"],[1,"mt-8","-mb-4",3,"appearance","showIcon","type"],[3,"diameter","mode"]],template:function(o,n){if(1&o){const s=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t._uU(6,"Sign up"),t.qZA(),t.TgZ(7,"div",6),t.TgZ(8,"div"),t._uU(9,"Already have an account?"),t.qZA(),t.TgZ(10,"a",7),t._uU(11,"Sign in "),t.qZA(),t.qZA(),t.YNc(12,J,2,5,"fuse-alert",8),t.TgZ(13,"mat-tab-group"),t.TgZ(14,"mat-tab",9),t.TgZ(15,"form",10),t.TgZ(16,"mat-form-field",11),t.TgZ(17,"mat-label"),t._uU(18,"Full name"),t.qZA(),t._UZ(19,"input",12),t.YNc(20,S,2,0,"mat-error",13),t.qZA(),t.TgZ(21,"mat-form-field",11),t.TgZ(22,"mat-label"),t._uU(23,"Email address"),t.qZA(),t._UZ(24,"input",14),t.YNc(25,F,2,0,"mat-error",13),t.YNc(26,N,2,0,"mat-error",13),t.qZA(),t.TgZ(27,"mat-form-field",11),t.TgZ(28,"mat-label"),t._uU(29,"Password"),t.qZA(),t._UZ(30,"input",15,16),t.TgZ(32,"button",17),t.NdJ("click",function(){t.CHM(s);const l=t.MAs(31);return l.type="password"===l.type?"text":"password"}),t.YNc(33,Q,1,1,"mat-icon",18),t.YNc(34,O,1,1,"mat-icon",18),t.qZA(),t.TgZ(35,"mat-error"),t._uU(36," Password is required "),t.qZA(),t.qZA(),t.TgZ(37,"mat-form-field",11),t.TgZ(38,"mat-label"),t._uU(39,"Company"),t.qZA(),t._UZ(40,"input",19),t.qZA(),t.TgZ(41,"div",20),t.TgZ(42,"mat-checkbox",21),t.TgZ(43,"span"),t._uU(44,"I agree to the"),t.qZA(),t.TgZ(45,"a",7),t._uU(46,"Terms of Service "),t.qZA(),t.TgZ(47,"span"),t._uU(48,"and"),t.qZA(),t.TgZ(49,"a",7),t._uU(50,"Privacy Policy "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(51,"button",22),t.NdJ("click",function(){return n.signUp()}),t.YNc(52,k,2,0,"span",13),t.YNc(53,M,1,2,"mat-progress-spinner",23),t.qZA(),t.qZA(),t.qZA(),t.TgZ(54,"mat-tab",24),t.TgZ(55,"form",10,25),t._UZ(57,"input",26),t.TgZ(58,"mat-form-field",11),t.TgZ(59,"mat-label"),t._uU(60,"Phone number"),t.qZA(),t.TgZ(61,"input",27),t.NdJ("countryChange",function(l){return n.onCountryChange(l)}),t.qZA(),t.TgZ(62,"button",28),t.NdJ("click",function(){return n.getOtp()}),t._uU(63," Send otp "),t.qZA(),t.YNc(64,Y,2,0,"mat-error",13),t.YNc(65,j,2,0,"mat-error",13),t.qZA(),t.TgZ(66,"mat-form-field",11),t.TgZ(67,"mat-label"),t._uU(68,"Otp"),t.qZA(),t._UZ(69,"input",29,30),t.TgZ(71,"button",17),t.NdJ("click",function(){t.CHM(s);const l=t.MAs(70);return l.type="password"===l.type?"text":"password"}),t.YNc(72,P,1,1,"mat-icon",18),t.YNc(73,B,1,1,"mat-icon",18),t.qZA(),t.TgZ(74,"mat-error"),t._uU(75," Otp is required "),t.qZA(),t.qZA(),t.TgZ(76,"button",22),t.NdJ("click",function(){return n.signInOtp()}),t.YNc(77,E,2,0,"span",13),t.YNc(78,R,1,2,"mat-progress-spinner",23),t.qZA(),t.TgZ(79,"div",31),t._UZ(80,"div",32),t.TgZ(81,"div",33),t._uU(82,"Or continue with"),t.qZA(),t._UZ(83,"div",32),t.qZA(),t.TgZ(84,"div",34),t.TgZ(85,"button",35),t._UZ(86,"mat-icon",36),t.qZA(),t.TgZ(87,"button",35),t._UZ(88,"mat-icon",36),t.qZA(),t.TgZ(89,"button",35),t._UZ(90,"mat-icon",36),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(91,"div",37),t.O4$(),t.TgZ(92,"svg",38),t.TgZ(93,"g",39),t._UZ(94,"circle",40),t._UZ(95,"circle",41),t.qZA(),t.qZA(),t.TgZ(96,"svg",42),t.TgZ(97,"defs"),t.TgZ(98,"pattern",43),t._UZ(99,"rect",44),t.qZA(),t.qZA(),t._UZ(100,"rect",45),t.qZA(),t.kcU(),t.TgZ(101,"div",46),t.TgZ(102,"div",47),t.TgZ(103,"div"),t._uU(104,"Welcome to"),t.qZA(),t.TgZ(105,"div"),t._uU(106,"our community"),t.qZA(),t.qZA(),t.TgZ(107,"div",48),t._uU(108," Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. "),t.qZA(),t.TgZ(109,"div",31),t.TgZ(110,"div",49),t._UZ(111,"img",50),t._UZ(112,"img",51),t._UZ(113,"img",52),t._UZ(114,"img",53),t.qZA(),t.TgZ(115,"div",54),t._uU(116,"More than 17k people joined us, it's your turn"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const s=t.MAs(31),m=t.MAs(70);t.xp6(10),t.Q6J("routerLink",t.DdM(38,z)),t.xp6(2),t.Q6J("ngIf",n.showAlert),t.xp6(3),t.Q6J("formGroup",n.signUpForm),t.xp6(4),t.Q6J("formControlName","name"),t.xp6(1),t.Q6J("ngIf",n.signUpForm.get("name").hasError("required")),t.xp6(4),t.Q6J("formControlName","email"),t.xp6(1),t.Q6J("ngIf",n.signUpForm.get("email").hasError("required")),t.xp6(1),t.Q6J("ngIf",n.signUpForm.get("email").hasError("email")),t.xp6(4),t.Q6J("formControlName","password"),t.xp6(3),t.Q6J("ngIf","password"===s.type),t.xp6(1),t.Q6J("ngIf","text"===s.type),t.xp6(6),t.Q6J("formControlName","company"),t.xp6(2),t.Q6J("color","primary")("formControlName","agreements"),t.xp6(3),t.Q6J("routerLink",t.DdM(39,y)),t.xp6(4),t.Q6J("routerLink",t.DdM(40,y)),t.xp6(2),t.Q6J("color","primary")("disabled",n.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",!n.signUpForm.disabled),t.xp6(1),t.Q6J("ngIf",n.signUpForm.disabled),t.xp6(2),t.Q6J("formGroup",n.signInOtpForm),t.xp6(2),t.s9C("value",n.countryCode),t.xp6(4),t.Q6J("ng2TelInputOptions",t.DdM(41,G))("formControlName","number"),t.xp6(1),t.Q6J("color","primary")("disabled",!n.signInOtpForm.value.number),t.xp6(2),t.Q6J("ngIf",n.signInOtpForm.get("number").hasError("required")),t.xp6(1),t.Q6J("ngIf",n.signInOtpForm.get("number").hasError("number")),t.xp6(4),t.Q6J("formControlName","otp"),t.xp6(3),t.Q6J("ngIf","password"===m.type),t.xp6(1),t.Q6J("ngIf","text"===m.type),t.xp6(3),t.Q6J("color","primary")("disabled",n.signInOtpForm.disabled),t.xp6(1),t.Q6J("ngIf",!n.signInOtpForm.disabled),t.xp6(1),t.Q6J("ngIf",n.signInOtpForm.disabled),t.xp6(8),t.Q6J("svgIcon","feather:facebook"),t.xp6(2),t.Q6J("svgIcon","feather:twitter"),t.xp6(2),t.Q6J("svgIcon","feather:github")}},directives:[p.yS,C.O5,u.SP,u.uX,a._Y,a.JL,a.sg,g.KE,g.hX,Z.Nt,a.Fj,a.JJ,a.u,d.lW,g.R9,g.TO,f.oG,a.wV,U._,h.Hw,I.W,A.Ou],styles:[".iti__flag-container{left:-15px!important}#number{padding-left:2rem}.otp-btn{font-size:12px;margin-right:-12px}.iti__country-list{background-color:#fff;z-index:9}mat-tab-group{margin-top:1.5rem}\n"],encapsulation:2,data:{animation:T.L}}),e})()}];let H=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[p.Bz.forChild(L),d.ot,f.p9,g.lN,h.Ps,Z.c,A.Cq,_.J,v.fC,x.m,u.Nh,U.g]]}),e})()}}]);