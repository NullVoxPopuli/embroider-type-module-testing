import Application from 'app-auto-import-lib-one-template-only-component/app';
import config from 'app-auto-import-lib-one-template-only-component/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
