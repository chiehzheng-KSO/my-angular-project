1. Move the 'library' folder to 'apps' folder in api-demo-data
2. Add
  ```
  "library": {
    "name": "Library",
    "routeBasePath": "/library",
    "appBasePath": "/apps/library",
    "routesFilePath": "/apps/library/routes.ts"
  }
  ```
  to 'appconfig.json'