# OneFootball

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.4.

1. It makes use of angular forms for searching a player's name. And on submitting the value inside the form, along with this "data API" is invoked and we take the value of  "profile-id" from this API 
2. Additionally, the user is navigated to the "/detail/{player_id}" page only if the "active" field in the data is "true" else it does not navigate and displays an error message.
3. If the "active field" is "true", the code sends "profile-id" into "profile API" to get further information about the searched player.
4. "/details/{player_id}" page has a button for back navigation.
5. Also, this detail page has all the information such as id, age, team, picture, role displayed in tabular format.


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
