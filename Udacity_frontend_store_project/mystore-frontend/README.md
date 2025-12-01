# MyStore Frontend (Angular E-commerce App)

A single-page e-commerce application built with **Angular** that allows users to browse products, view details, add items to cart, and complete checkout.

---

## 🧰 Technologies Used

- Angular CLI
- TypeScript
- Angular Routing
- Angular Forms (`ngModel`, `ngForm`)
- Angular Services & Dependency Injection
- CSS3 (component-level and global styles)
- HttpClient (for API integration)

---

## 🚀 Features

-  Product list page
-  Product detail page with image, price, and description
-  Add products to cart
-  Cart page with total price and remove option
-  Checkout form with validation
-  Order confirmation page
-  Cart badge in header (shows number of items)
-  Responsive and clean UI

---

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- Angular CLI:
```bash
npm install -g @angular/cli

# MystoreFrontend

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.0.1.

## Development server

To start a local development server, run:

```bash
npm start
```
# IMPORTANT NOTE: Run the front-end and back-end to start:
1- in the back-end folder 
      -> cd Udacity_backend_store_project 
           -> npm install 
              -> npm start 
(it should print : Server running on http://localhost:3000)

2- with another termenal: in the front-end folder 
       -> cd Udacity_frontend_store_project
          -> cd mystore-frontend
             -> npm start 
(it will run on http://localhost:4200 and proxy API calls to backend via proxy.conf.json)


Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# Clone and Run
git clone <repo-url>
cd mystore-frontend
npm install
ng serve

# Open your browser at:
http://localhost:4200

# Project Structure
src/
├── app/
│   ├── components/
│   │   ├── product-list/
│   │   ├── product-detail/
│   │   ├── cart/
│   │   ├── checkout/
|   |   ├── auth/
|   |   ├── contact
│   │   └── confirmation/
│   ├── services/
│   │   ├── product.ts
|   |   ├── auth.ts
│   │   └── cartService.ts
|   ├── guards/
|   |   └── auth-guards.ts
│   ├── models/
│   │   └── product.ts
│   └── app-routing.module.ts


