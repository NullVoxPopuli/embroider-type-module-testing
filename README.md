# package.json `"type": "module"` testing for embroider and ember-auto-import

See: https://github.com/embroider-build/embroider/issues/1773

## Creating new scenarios

### New Libraries

In the root of the repo
```bash
NAME=lib-my-scenario-name-here
npx ember-cli@latest addon $NAME \
  --blueprint @embroider/addon-blueprint --addon-only --skip-git --skip-npm
```

And be sure to add `"type": "module"` to the package.json.

### New Example Consuming Apps

In the root of the repo
```bash
NAME=app-embroider-3-my-scenario-name-here
npx ember-cli@latest new $NAME \
  --skip-git --skip-npm
```
