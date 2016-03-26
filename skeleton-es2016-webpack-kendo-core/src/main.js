import {bootstrap} from 'aurelia-bootstrapper-webpack';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-kendoui-bridge', (kendo) => kendo.kendoAutoComplete().kendoButton);

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
