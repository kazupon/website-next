(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/langs/en-US/documentation/built-in-functions.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"built-in-functions"}},"Built-in Functions"),m.a.createElement(o.MDXTag,{name:"p",components:n},"To provide direct (compile to opcode) access to native WebAssembly operations, the following functions plus a few TS/JS-like constants are provided in the global scope:"),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"context-sensitive-constants"}},"Context-sensitive constants"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"NaN"),": ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"f32 | f64"),m.a.createElement("br",null),"\nNaN (not a number) as a 32-bit or 64-bit float depending on context. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Infinity"),": ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"f32 | f64"),m.a.createElement("br",null),"\nPositive infinity as a 32-bit or 64-bit float depending on context. Compiles to a constant."))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"compile-time-type-checks"}},"Compile-time type checks"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isInteger"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(value?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if the specified type ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"or")," expression is of an integer type and not a reference. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isFloat"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(value?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if the specified type ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"or")," expression is of a float type. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isSigned"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(value?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if the specified type ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"or")," expression can represent negative numbers. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isReference"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(value?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if the specified type ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"or")," expression is of a reference type. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isString"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(value?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if the specified type ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"or")," expression can be used as a string. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isArray"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(value?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if the specified type ",m.a.createElement(o.MDXTag,{name:"em",components:n,parentName:"p"},"or")," expression can be used as an array. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isDefined"),"(expression: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if the specified expression resolves to a defined element. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isConstant"),"(expression: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if the specified expression evaluates to a constant value. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"sizeof"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usize"),m.a.createElement("br",null),"\nDetermines the byte size of the specified core or class type. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"offsetof"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(fieldName?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usize"),m.a.createElement("br",null),"\nDetermines the offset of the specified field within the given class type. Returns the class type's end offset if field name has been omitted. Compiles to a constant.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"alignof"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usize"),m.a.createElement("br",null),"\nDetermines the alignment (log2) of the specified underlying core type. Compiles to a constant."))),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Note")," that ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"constantOffset")," arguments must be compile-time constants (",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"const")," global or local). Similarly, ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fieldName")," arguments must be string literals."),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Note")," that whenever the compiler spots a constant condition, it will automatically eliminate untaken branches and not attempt to compile them. For example, if a generic function is intended to work with both integers and strings with just a few statements differing, a compile-time type check with a constant condition on an if-then-else statement can be utilized to make it behave differently in parts depending on the actual type argument:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-ts",metaString:""}},"function doSomething<T>(a: T): T {\n  if (isString<T>()) {\n    ... // eliminated if T is not a string\n  } else {\n    ... // eliminated if T is a string\n  }\n}\n")),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"math"}},"Math"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isNaN"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if a 32-bit or 64-bit float is ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NaN"),".")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"isFinite"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),m.a.createElement("br",null),"\nTests if a 32-bit or 64-bit float is finite, that is not ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NaN")," or +/-",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Infinity"),".")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"clz"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nPerforms the sign-agnostic count leading zero bits operation on a 32-bit or 64-bit integer. All zero bits are considered leading if the value is zero.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"ctz"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nPerforms the sign-agnostic count tailing zero bits operation on a 32-bit or 64-bit integer. All zero bits are considered trailing if the value is zero.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"popcnt"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nPerforms the sign-agnostic count number of one bits operation on a 32-bit or 64-bit integer.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"rotl"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),", shift: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nPerforms the sign-agnostic rotate left operation on a 32-bit or 64-bit integer.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"rotr"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),", shift: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nPerforms the sign-agnostic rotate right operation on a 32-bit or 64-bit integer.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"abs"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64 | f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nComputes the absolute value of an integer or float.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"max"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64 | f32 | f64"),">(left: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),", right: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nDetermines the maximum of two integers or floats. If either operand is ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NaN"),", returns ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NaN"),".")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"min"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64 | f32 | f64"),">(left: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),", right: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nDetermines the minimum of two integers or floats. If either operand is ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NaN"),", returns ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NaN"),".")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"ceil"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nPerforms the ceiling operation on a 32-bit or 64-bit float.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"floor"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nPerforms the floor operation on a 32-bit or 64-bit float.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"copysign"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = f32 | f64"),">(x: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T")," , y: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nComposes a 32-bit or 64-bit float from the magnitude of ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"x")," and the sign of ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"y"),".")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"nearest"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nRounds to the nearest integer tied to even of a 32-bit or 64-bit float.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"reinterpret"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = i32 | i64 | f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nReinterprets the bits of the specified value as type ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),". Valid reinterpretations are u32/i32 to/from f32 and u64/i64 to/from f64.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"sqrt"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nCalculates the square root of a 32-bit or 64-bit float.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"trunc"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T = f32 | f64"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nRounds to the nearest integer towards zero of a 32-bit or 64-bit float."))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"memory-access"}},"Memory access"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"load"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(ptr: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usize"),", constantOffset?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usize"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nLoads a value of the specified type from memory. Equivalent to dereferncing a pointer in other languages.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"store"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(ptr: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usize"),", value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),", constantOffset?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"usize"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"void"),m.a.createElement("br",null),"\nStores a value of the specified type to memory. Equivalent to dereferencing a pointer in other languages when assigning a value."))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"control-flow"}},"Control flow"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"select"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(ifTrue: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),", ifFalse: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),", condition: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bool"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nSelects one of two pre-evaluated values depending on the condition.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"unreachable"),"(): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*"),m.a.createElement("br",null),"\nEmits an unreachable operation that results in a runtime error when executed. Both a statement and an expression of any type."))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"host-operations"}},"Host operations"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"memory.size"),"(): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"i32"),m.a.createElement("br",null),"\nReturns the current size of the memory in units of pages. One page is 64kb.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"memory.grow"),"(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"i32"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"i32"),m.a.createElement("br",null),"\nGrows linear memory by a given unsigned delta of pages. One page is 64kb. Returns the previous size of the memory in units of pages or ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"-1")," on failure. ",m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"Note")," that calling ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"memory.grow")," where a memory manager is present might break it."))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"other"}},"Other"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"parseInt"),"(str: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),", radix?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"i32"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"i64"),m.a.createElement("br",null),"\nParses a string to a 64-bit integer. Returns ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"0")," on invalid inputs unlike ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NaN")," in JS.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"parseFloat"),"(str: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"f64"),m.a.createElement("br",null),"\nParses a string to a 64-bit float. Returns ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"NaN")," on invalid inputs.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"changetype"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(value: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nChanges the type of a value to another one. Useful for casting class instances to their pointer values and vice-versa.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"assert"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(isTrueish: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),", message?: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nTraps if the specified value is not true-ish, otherwise returns the non-nullable value.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"unchecked"),"(expr: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*"),m.a.createElement("br",null),"\nExplicitly requests no bounds checks on the provided expression. Useful for array accesses.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"call_indirect"),"<",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),">(target: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"u32"),", ...args: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"*[]"),"): ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"T"),m.a.createElement("br",null),"\nEmits a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"call_indirect")," instruction, calling the specified function in the function table by index with the specified arguments. Does result in a runtime error if the arguments do not match the called function."))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"decorators"}},"Decorators"),m.a.createElement(o.MDXTag,{name:"p",components:n},"The following WebAssembly-specific operators can be used to annotate non-TS behavior:"),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"@global"),m.a.createElement("br",null),"\nAdds an element to the global scope.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"@inline"),m.a.createElement("br",null),"\nForces inlining of a function.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"@external"),"(","[moduleName: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),",]"," elementName: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),")",m.a.createElement("br",null),"\nChanges the external name of a declared global or function.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"@operator"),"(token: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),")",m.a.createElement("br",null),"\nAnnotates a binary operator overload."),m.a.createElement(o.MDXTag,{name:"ul",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"@operator.binary"),"(token: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),")",m.a.createElement("br",null),"\nSame as ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"@operator"),".")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"@operator.prefix"),"(token: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),")",m.a.createElement("br",null),"\nAnnotates a unary prefix operator overload.")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"li"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"p"},"@operator.postfix"),"(token: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"string"),")",m.a.createElement("br",null),"\nAnnotates a unary postfix operator overload."))))))}}}]);