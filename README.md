
# React Redux MUI

This project uses [OpenWeather](https://openweathermap.org/).

## Features

- **Redux** for state management
- **Type-safe** with Zod
- **MUI** for UI components, including dark mode and a color picker
- **Type-safe internationalization** with i18next
- **Advanced linting and formatting** using ESLint and Prettier

## Libraries and Frameworks

| **Name**                                      | **Version** | **Description**       |  
|-----------------------------------------------|-------------|-----------------------|  
| [TypeScript](https://www.typescriptlang.org/) | 5.7.x       | Type-safe JavaScript  |  
| [React](https://react.dev/)                   | 19.x        | UI library            |  
| [Vite](https://vite.dev/)                     | 6.x         | Build tool            |  
| [Redux](https://redux.js.org/)                | 9.x         | State manager         |  
| [MUI](https://mui.com/)                       | 6.x         | UI components         |  
| [Zod](https://zod.dev/)                       | 3.x         | Schema validation     |  
| [i18next](https://www.i18next.com/)           | 24.x        | Internationalization  |  

## Getting Started

A demo of the app is live at: [https://react-redux-mui.vercel.app/](https://react-redux-mui.vercel.app/).

### Development

1. Copy the environment file:
   ```bash  
   cp .env.example .env.local
   ``` 

2. Install dependencies:
    ```bash  
   yarn
   ``` 

3. Run dev:
   ```bash  
   yarn dev
   ``` 

### Production

1. Build the application:
   ```bash  
   yarn build
   ``` 

2. Preview the build:
    ```bash  
   yarn preview
   ```