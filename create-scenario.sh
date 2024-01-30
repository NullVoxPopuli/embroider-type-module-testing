#!/bin/bash

set -e


scenario_name=$1


library_name="lib-$scenario_name"
app_auto_import="app-auto-import-$library_name"
app_embroider3="app-embroider-3-$library_name"

if [ -d "$PWD/$library_name" ]; then 
  echo "$library_name already exists"
else
  echo "Creating $library_name"

  npx ember-cli@latest addon $library_name \
      --blueprint @embroider/addon-blueprint --addon-only --skip-git --skip-npm

  manifest_path="$PWD/$library_name/package.json"
  echo $(jq '.type = "module"' $manifest_path) > $manifest_path
fi

if [ -d "$PWD/$app_auto_import" ]; then 
  echo "$app_auto_import already exists"
else
  echo "Creating $app_auto_import"

  npx ember-cli@latest new $app_auto_import \
    --skip-git --skip-npm --embroider

  manifest_path="$PWD/$app_auto_import/package.json"
  echo $(jq '.scripts["test:ember"] = "ember test --test-port 0"' $manifest_path) > $manifest_path

  ( cd $app_auto_import && pnpm add $library_name )
fi

if [ -d "$PWD/$app_embroider3" ]; then 
  echo "$app_embroider3 already exists"
else
  echo "Creating $app_embroider3"

  npx ember-cli@latest new $app_embroider3 \
    --skip-git --skip-npm --embroider

  manifest_path="$PWD/$app_embroider3/package.json"
  echo $(jq '.scripts["test:ember"] = "ember test --test-port 0"' $manifest_path) > $manifest_path

  ( cd $app_embroider3 && pnpm add $library_name )
fi


pnpm install
pnpm lint:fix
pnpm prettier . --write
