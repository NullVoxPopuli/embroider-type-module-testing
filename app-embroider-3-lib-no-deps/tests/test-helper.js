import Application from 'app-embroider-3-lib-no-deps/app';
import config from 'app-embroider-3-lib-no-deps/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
