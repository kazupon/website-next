(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./docs/langs/en-US/getting-started/limitations.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),m=n.n(t),r=n("./node_modules/@mdx-js/tag/dist/index.js");function o(e,a){if(null==e)return{};var n,t,m=function(e,a){if(null==e)return{};var n,t,m={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(m[n]=e[n]);return m}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}a.default=function(e){var a=e.components;o(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:a},m.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"limitations"}},"Limitations"),m.a.createElement(r.MDXTag,{name:"p",components:a},"Compiling untyped JavaScript to WebAssembly doesn't make sense because it would ultimately result in shipping another (slower) JavaScript runtime that runs within a JavaScript runtime."),m.a.createElement(r.MDXTag,{name:"p",components:a},"Instead, AssemblyScript focuses on where WebAssembly excels and does not support falling back to super dynamic features of JavaScript that cannot be efficiently compiled ahead of time:"),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"mandatory-types"}},"Mandatory types"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"No ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"any")," or ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"undefined"),"."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"No union types."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Nullable types must be reference types, annotated as ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"ClassType | null"),".")),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"limited-type-inference"}},"Limited type inference"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"If there is no initializer expression, the type must be annotated.")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"If there is an initializer expression:"),m.a.createElement(r.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"If the initializer is an integer literal, ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"i32")," is assumed when it fits into 32-bits, otherwise ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"i64")," is assumed."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"If the initializer is a float literal, ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"f64")," is assumed."),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},"Otherwise the initializer is evaluated to obtain its type.")))),m.a.createElement(r.MDXTag,{name:"h2",components:a,props:{id:"other"}},"Other"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"Optional function parameters require an initializer")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"const")," globals and locals require a compile-time constant initializer and otherwise fall back to a mutable variable.")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"In JavaScript, static fields on classes are always evaluated when defined, whereas in AssemblyScript, built-in tree shaking lazily compiles static fields when referenced.")),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"When calling an exported variable-length arguments WebAssembly function from JS, e.g."),m.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-ts",metaString:""}},"export function add(a: i32 = 1, b: i32 = 2): i32 {\n  return a + b;\n}\n")),m.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},"the actual number of parameters of the call must be specified explicitly because there is no equivalent to ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"arguments.length")," on the WebAssembly side. Example:"),m.a.createElement(r.MDXTag,{name:"pre",components:a,parentName:"li"},m.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-js",metaString:""}},"exports._setargc(0);\nexports.sum(); // 3\n\nexports._setargc(1);\nexports.sum(2); // 4\n\nexports._setargc(2);\nexports.sum(2, 3); // 5\n")))),m.a.createElement(r.MDXTag,{name:"p",components:a},"See also: ",m.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/AssemblyScript/assemblyscript/wiki/Status-and-Roadmap"}},"Status / Roadmap")))}}}]);