import EmberRouter from '@ember/routing/router';
import config from 'app-embroider-3-lib-one-template-only-component/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
