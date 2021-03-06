# Common Acknowledge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

Run `npm install` to install all the dependencies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.



# Running Finloom for development

1. Run `npm run build` or `ng build --watch` to build project and watch changes.
2. Run `npm start` for a server. Navigate to `http://localhost:3200/`.

## Database migration

1. Run `npm install -g sequelize-cli` to use `sequelize` commands
2. Run `sequelize db:migrate` ( Refer to [sequelize-cli doc](https://github.com/sequelize/cli#usage) )
3. Run `sequelize db:seed:all` ( Refer to [sequelize-cli doc](https://github.com/sequelize/cli#usage) )

More information about sequelize model, seed, migration can be found in [http://docs.sequelizejs.com/](http://docs.sequelizejs.com/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
