# address-book

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
#### Frontend
```
npm run serve
```
#### Backend
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Directory Structure
### Routing
Put all pages inside the directory views, with the same structure listed in router/index.js; use the _ char to denote a route param.

### User Interface
Put all graphical components inside the directory ui; this components possibly have to be stateless (no internal data, only props, computed and emits).

### Features
Put all components and js files inside the directory features, organized by domains; this components have to be dumb, let the pages choose what to do.

### Technical Files
Put all base classes for technical esigencies inside the directory lib; this is the part of the codebase where technical tricks are allowed.

## Main Rules
1. Be explicit: code is for humans, readability is more important than maintainability.
2. DRY: use components for template, standard js approaches for logic; try to avoid mixins.
3. SoC: HTML tags only in ui (don't use them) inside views and features, routing only in views (don't connect a feature directly to the router), use features for all other businesses.
4. Think reactive: data change always, prepare your code to work in this way (more computed, less data and methods).
5. Think declarative: let names say what to do, not how.