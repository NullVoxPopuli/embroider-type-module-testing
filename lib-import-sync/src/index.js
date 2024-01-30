import {
  importSync,
  macroCondition,
  dependencySatisfies,
} from '@embroider/macros';

let theFn;

if (macroCondition(dependencySatisfies('@embroider/core', '*'))) {
  theFn = importSync('./embroider').theFn;
} else {
  theFn = importSync('./broccoli').theFn;
}

export default theFn;
