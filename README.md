# My Monorepo

A modern monorepo setup with a shared UI component library and React applications using Turborepo, TypeScript, and Tailwind CSS.

## 📁 Project Structure


my-monorepo  
├─ apps  
│ └─ app1  
│ ├─ src  
│ │ ├─ App.tsx  
│ │ ├─ main.tsx  
│ │ └─ index.css  
│ ├─ package.json  
│ ├─ postcss.config.js  
│ └─ tailwind.config.js  
├─ packages  
│ └─ ui  
│ ├─ src  
│ │ ├─ Button.tsx  
│ │ ├─ index.ts  
│ │ └─ styles.css  
│ ├─ package.json  
│ ├─ postcss.config.js  
│ └─ tailwind.config.ts  
├─ package.json  
└─ turbo.json  

## 🚀 Features

- **Monorepo Structure**: Using Yarn Workspaces for efficient package management
- **UI Library**: Shared component library with Tailwind CSS
- **TypeScript**: Full TypeScript support across all packages
- **Modern Stack**:
  - React 18
  - Vite
  - Tailwind CSS
  - TypeScript
  - Turborepo

## 🛠️ Tech Stack

- **Build Tool**: Vite
- **Framework**: React
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Package Manager**: Yarn
- **Monorepo Tool**: Turborepo

## 🏃‍♂️ Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd my-monorepo
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn dev
   ```

## 📦 Available Scripts

- `yarn dev`: Start all applications in development mode
- `yarn build`: Build all applications and packages
- `yarn dev:app1`: Start app1 in development mode

## 📚 Workspace Details

### UI Package (`packages/ui`)

- Shared UI components
- Tailwind CSS configuration
- TypeScript support
- Components:
  - Button
  - (Add more components as they are created)

### App1 (`apps/app1`)

- Main React application
- Uses
