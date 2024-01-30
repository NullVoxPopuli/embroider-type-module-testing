# package.json `"type": "module"` testing for embroider and ember-auto-import

See: https://github.com/embroider-build/embroider/issues/1773

## Creating new scenarios

```bash
./create-scenario.sh "name-of-thing"
```

This'll create a library, and a few apps with varying configs to test against.

Post script todos:
- add `"type": "module"` to the library's package.json.
- add `--test-port 0` to the apps `test:ember` script

### New Example Consuming Apps

In the root of the repo
```bash
NAME=app-embroider-3-my-scenario-name-here
npx ember-cli@latest new $NAME \
  --skip-git --skip-npm --embroider
```
