(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{529:function(t,n,s){t.exports=s.p+"assets/img/6.09271059.png"},530:function(t,n,s){t.exports=s.p+"assets/img/5.de1dc9d6.png"},574:function(t,n,s){"use strict";s.r(n);var a=s(11),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/42634822/what-is-angulars-unidirectional-data-flow-rule",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow"),a("OutboundLink")],1),t._v("中看到个提问")]),t._v(" "),a("blockquote",[a("p",[t._v("Angular's unidirectional data flow rule forbids updates to the view after it has been composed."),a("br"),t._v("\nAngular 的单向数据流规则禁止在视图组合后对其进行更新。")])]),t._v(" "),a("blockquote",[a("p",[t._v("网友 ：I had to read this sentence about 8 times very slowly and I still don't get it")])]),t._v(" "),a("p",[t._v("首先需要重申一下Angular中视图的概念，视图（View）是构建 UI 的最小单元，视图（View）分为 宿主视图（Component）、模板视图（Template）")]),t._v(" "),a("p",[a("img",{attrs:{src:s(529),alt:"alt"}})]),t._v(" "),a("p",[t._v("单向数据流是指 视图树从上往下将数据转换为视图的过程中，不会进一步修改数据。")]),t._v(" "),a("p",[t._v("比如从上到下的变化检测流中，一旦变化检测已经完成了，任何更低层级的 component 都不允许去改变父级的属性。")]),t._v(" "),a("p",[t._v("在实际开发中，有些钩子函数通过"),a("code",[t._v("@Output")]),t._v("去改变 父级 component 的数据值，是允许的，而有些又不允许。")]),t._v(" "),a("p",[t._v("Angular 组件树渲染过程与生命周期的关系:")]),t._v(" "),a("p",[a("img",{attrs:{src:s(530),alt:"alt"}})]),t._v(" "),a("p",[t._v("更新 input bindings，然后会触发 child component 中 OnInit、DoCheck、OnChanges 函数，如果页面有 ng-content，相应也会触发 ngAfterContentInit 和 ngAfterContentChecked。")]),t._v(" "),a("p",[a("code",[t._v("AfterViewChecked")]),t._v("和"),a("code",[t._v("AfterViewInit")]),t._v("是在变更检测（change detetion）之后执行的，这时候数据正在渲染为视图，你又去改变数据，被认为是违反 Angular 的单向数据流。")]),t._v(" "),a("p",[t._v("OnInit、DoCheck、OnChanges 函数是在变更检测之前执行的，这个时候还没有通知组件树去渲染DOM，所以可以对数据进行更改的。")]),t._v(" "),a("p",[t._v("示例：\n定义一个父级组件 ComponentA，在这里会显示从 ChildComponent 发过来的 message，代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<h1>this is child A page</h1>\n            <h4>{ { msgFromChild } } </h4>\n            <app-child (sendMsgToParent)="getMsgFromChild($event)">\n              this is child\n            </app-child>')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ComponentA")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    msgFromChild"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMsgFromChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" any")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msgFromChild "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),a("p",[t._v("定义一个 ChildComponent，通过 @Output 向 ComponentA 发送 message，代码如下：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app-child"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('<h5 style="color: crimson">this is grand child</h5>\n                <ng-content></ng-content>')]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ChildComponent")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OnInit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Output")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" sendMsgToParent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" EventEmitter"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EventEmitter")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("any"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello, change this to parent component"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ngOnInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sendMsgToParent"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("emit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("把 ngOnInit 换成 ngDoCheck、ngAfterContentInit、ngAfterContentChecked、ngOnChanges，效果是一样的，在 ComponentA 中 message 都能正常显示也不会报错。"),a("br"),t._v("\n把 ngOnInit 换成 ngAfterViewInit 或 ngAfterViewChecked 就会报错。")])])])}),[],!1,null,null,null);n.default=e.exports}}]);