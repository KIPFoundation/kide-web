// import * as gulp from "gulp";
// import { Service, project } from "@wasm/studio-utils";

// gulp.task("build", async () => {
//   const data = await Service.compileFile(project.getFile("src/main.nim"), "c", "wasm", "-g -O3");
//   const outWasm = project.newFile("out/main.wasm", "wasm", true);
//   outWasm.setData(data);
// });

// gulp.task("default", ["build"], async () => {});

import * as gulp from "gulp";
import { Service, project } from "@wasm/studio-utils";

gulp.task("build", async () => {
  // Optimize for small builds for now
  const options = { lto: true, opt_level: 's', debug: true };
  const libSrc = project.getFile("src/main.nim");
  const data = await Service.compileFileWithBindings(libSrc, "nim", "wasm", options);

  const outWasm = project.newFile("out/main.wasm", "wasm", true);
  outWasm.setData(data.wasm);
  const outJs = project.newFile("out/main.js", "javascript", true);
  outJs.setData(data.wasmBindgenJs);
});

gulp.task("default", ["build"], async () => {});
