
export { build, rebuild, runCmds } from './build';
export { bundle } from './bundle';
export { clean } from './clean';
export { cleancss } from './cleancss';
export { copy } from './copy';
export { compress } from './compress';
export { generator } from './generator';
export { ngc } from './ngc';
export { sass } from './sass';
export { transpile } from './transpile';
export { uglifyjs } from './uglifyjs';
export { watch } from './watch';
export { generateContext, Logger } from './util';
export * from './plugins/rollupNG2';


export function run(task: string) {
  try {
    require(`../dist/${task}`)[task]();
  } catch (e) {
    console.error(`Error running ionic app script "${task}": ${e}`);
    process.exit(1);
  }
}
