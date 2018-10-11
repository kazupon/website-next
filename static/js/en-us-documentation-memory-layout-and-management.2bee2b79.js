(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"./docs/langs/en-US/documentation/memory-layout-and-management.mdx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/react/index.js"),o=t.n(n),r=t("./node_modules/@mdx-js/tag/dist/index.js");function m(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}a.default=function(e){var a=e.components;m(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:a},o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"memory-layout--management"}},"Memory Layout & Management"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Similar to other languages that use linear memory, all data in AssemblyScript is located at a specific memory offset. There are two parts of memory that the compiler is aware of:"),o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"static-memory"}},"Static memory"),o.a.createElement(r.MDXTag,{name:"p",components:a},"The compiler will leave some initial space to take care of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"null")," pointer, followed by static memory, if any static data segments are present."),o.a.createElement(r.MDXTag,{name:"p",components:a},"For example, whenever a constant string or array literal is encountered while compiling a source, the compiler creates a static memory segment from it."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"strings"}},"Strings"),o.a.createElement(r.MDXTag,{name:"p",components:a},"For example"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-ts",metaString:""}},'const str = "Hello";\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"will be compiled to an immutable global variable named ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"str")," that is initialized with the offset of the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'"Hello"')," string in memory. Strings are encoded as UTF-16LE in AssemblyScript, and are prefixed with their length (in character codes) as a 32-bit integer."),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"\u2552\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 String layout (32-bit) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2555\n   3                   2                   1\n 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0  bits\n\u251c\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2524\n\u2502   .length       number of UTF-16LE character codes            \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u2500\u2510\n\u2502         .charCodeAt(0)        \u2502        .charCodeAt(1)         \u2502 N=.length 16-bit\n\u251c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u253c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2524 character codes\n\u2502         .charCodeAt(2)        \u2502        .charCodeAt(3) ...     \u2502\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"Note that the length uses little endian byte order as well. Hence, the string ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},'"Hello"')," would look like this:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"05 00 00 00   .length\n48 00         H\n65 00         e\n6C 00         l\n6C 00         l\n6F 00         o\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"In this case, ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"str")," points right at the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"05")," byte. When calling a JavaScript import like"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-ts",metaString:""}},"declare function log(str: string): void;\n\nlog(str);\n")),o.a.createElement(r.MDXTag,{name:"p",components:a},"the JavaScript side receives the pointer to the string that is stored in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"str")," global."),o.a.createElement(r.MDXTag,{name:"h3",components:a,props:{id:"arrays"}},"Arrays"),o.a.createElement(r.MDXTag,{name:"p",components:a},"In AssemblyScript, all arrays store their contents in an ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"ArrayBuffer")," behind the scenes. These can be accessed naturally on typed arrays, but are private on normal arrays. For example in 32-bit WebAssembly:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"\u2552\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 Array<T> layout (32-bit) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2555\n   3                   2                   1\n 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0  bits\n\u251c\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2524\n\u2502   .buffer       points at the backing ArrayBuffer (private)   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502   .length       number of array elements of size sizeof<T>()  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"\u2552\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 TypedArray layout (32-bit) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2555\n   3                   2                   1\n 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0  bits\n\u251c\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2524\n\u2502   .buffer       points at the backing ArrayBuffer             \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502   .byteOffset   offset in bytes from the start of .buffer     \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502   .byteLength   length in bytes from the start of .buffer     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{metaString:null}},"\u2552\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 ArrayBuffer layout (32-bit) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2555\n   3                   2                   1\n 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0  bits\n\u251c\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2534\u2500\u2524\n\u2502   .byteLength   number of bytes                               \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502        0        free space due to alignment                   \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524 \u2500\u2510\n\u2502       [0]     \u2502      [1]      \u2502      [2]      \u2502      [3]      \u2502 N=.byteLength\n\u251c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u253c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u253c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u253c \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2524 8-bit bytes\n\u2502       [4]     \u2502      [5]      \u2502      [6]      \u2502      [7] ...  \u2502\n")),o.a.createElement(r.MDXTag,{name:"h1",components:a,props:{id:"heap"}},"Heap"),o.a.createElement(r.MDXTag,{name:"p",components:a},"Dynamically allocated memory goes to the heap that begins right after static memory. The heap can be partitioned in various ways, depending on the memory allocator you have chosen. You can implement one yourself (the built-in ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"HEAP_BASE")," global points at the first 8 byte aligned offset after static memory) or use one of the following allocators provided by the standard library:"),o.a.createElement(r.MDXTag,{name:"ul",components:a},o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"allocator/arena"),o.a.createElement("br",null),"\nA simple arena-allocator that accumulates memory with no mechanism to free specific segments. Instead, it provides a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"memory.reset")," function that resets the counting memory offset to its initial value and starts all over again. Because of its simple design, it's both the smallest and fastest dynamic allocator.")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"allocator/tlsf"),o.a.createElement("br",null),"\nAn implementation of the ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"http://www.gii.upv.es/tlsf/"}},"TLSF")," (Two Level Segregate Fit) memory allocator, a general purpose dynamic allocator specifically designed to meet real-time requirements. Compiles to about 1KB of WASM.")),o.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"p",components:a,parentName:"li"},o.a.createElement(r.MDXTag,{name:"strong",components:a,parentName:"p"},"allocator/buddy"),o.a.createElement("br",null),"\nA port of evanw's ",o.a.createElement(r.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://github.com/evanw/buddy-malloc"}},"Buddy Memory Allocator"),", an experimental allocator that spans the address range with a binary tree. Compiles to about 1KB of WASM."))),o.a.createElement(r.MDXTag,{name:"p",components:a},"A memory allocator from the standard library can be included in your project through importing it, like so:"),o.a.createElement(r.MDXTag,{name:"pre",components:a},o.a.createElement(r.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-ts",metaString:""}},'import "allocator/tlsf";\n\nvar ptr = memory.allocate(64);\n// do something with ptr ...\n\n// ... and free it again\nmemory.free(ptr);\n')),o.a.createElement(r.MDXTag,{name:"p",components:a},"Standard library allocators will automatically grow the module's memory when required and always align to 8 bytes. Maximum allocation size is 1GB. If memory is exceeded, a trap (exception on the JavaScript side) will occur."),o.a.createElement(r.MDXTag,{name:"p",components:a},o.a.createElement(r.MDXTag,{name:"em",components:a,parentName:"p"},"To be continued...")))}}}]);