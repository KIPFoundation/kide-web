# KIDE-WEB

Official repository for the web front-end of Krama Intelligent Developer Environment(KIDE).

## Running a local copy of KIDE

To run a local copy, you will need to install node.js and webpack on your computer, then run the following commands:

``` sh
npm install
```

To build WebAssembly Studio whenever a file changes run:

``` sh
npm run build-watch
```

To start a dev web server run:

``` sh
npm run dev-server
```

Before submitting a pull request run:

``` sh
npm test
```

## Credits

This IDE is built based on [WebAssembly Studio](https://github.com/wasdk/WebAssemblyStudio).

This project also depends on several excellent libraries and tools:

* [Monaco Editor](https://github.com/Microsoft/monaco-editor) is used for rich text editing, tree views and context menus.

* [WebAssembly Binary Toolkit](https://github.com/WebAssembly/wabt) is used to assemble and disassemble `.wasm` files.

* [Binaryen](https://github.com/WebAssembly/binaryen/) is used to validate and optimize `.wasm` files.

* [Clang Format](https://github.com/tbfleming/cib) is used to format C/C++ files.

* [Cassowary.js](https://github.com/slightlyoff/cassowary.js/) is used to make split panes work.

* [Showdown](https://github.com/showdownjs/showdown) is used to automatically preview `.md` files.

* [Capstone.js](https://alexaltea.github.io/capstone.js/) is used to disassemble `x86` code.

* LLVM, Rust, Emscripten, Wasmception running on the server side.

* And of course: React, WebPack, TypeScript and TSLint.