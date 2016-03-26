export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia KendoUI-core';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',                              nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',                                nav: true, title: 'Github Users' },
      { route: 'child-router',  name: 'child-router', moduleId: 'child-router',                         nav: true, title: 'Child Router' },
      { route: 'autocomplete',  name: 'autocomplete', moduleId: 'kendoui/autocomplete/autocomplete',    nav: true, title: 'KendoUI autocomplete' },
      { route: 'button',        name: 'button',       moduleId: 'kendoui/button/button',                nav: true, title: 'KendoUI button' }
    ]);

    this.router = router;
  }
}
