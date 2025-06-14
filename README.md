# Nature Website Project Structure

## Project Overview
A full-stack MERN application for nature enthusiasts to explore and share their experiences.

## Directory Structure

```plaintext
📦 Nature Website
├── 📂 frontend
│   ├── 📂 public
│   │   └── 📂 assets
│   │       ├── 📂 images
│   │       └── 📂 audio
│   └── 📂 src
│       ├── 📂 components
│       │   ├── 📂 common
│       │   │   ├── Button.jsx
│       │   │   └── Input.jsx
│       │   └── 📂 layout
│       │       ├── Footer.jsx
│       │       └── Header.jsx
│       ├── 📂 pages
│       │   ├── 📂 auth
│       │   │   ├── Login.jsx
│       │   │   └── Signup.jsx
│       │   └── 📂 inside-page
│       │       ├── 📂 navigate
│       │       │   ├── ReadMore.jsx
│       │       │   ├── Farmnaviget.jsx
│       │       │   ├── rainFlownavigate.jsx
│       │       │   └── seanaviget.jsx
│       │       ├── 📂 forms
│       │       │   └── farminfo.jsx
│       │       ├── aboutHome.jsx
│       │       ├── farmerHome.jsx
│       │       ├── footerHome.jsx
│       │       ├── headerHome.jsx
│       │       ├── home.jsx
│       │       ├── natureHome.jsx
│       │       ├── profile.jsx
│       │       ├── rainFlowHome.jsx
│       │       └── seaHome.jsx
│       ├── 📂 services
│       │   └── api.js
│       ├── 📂 styles
│       │   └── index.css
│       ├── 📂 utils
│       │   └── helpers.js
│       ├── App.jsx
│       └── main.jsx
│
└── 📂 backend
    ├── 📂 config
    │   └── db.config.js
    ├── 📂 controllers
    │   ├── animal.controllers.js
    │   ├── crop.controller.js
    │   ├── farmer.controller.js
    │   ├── login.controllers.js
    │   ├── rain.controller.js
    │   └── sea.controller.js
    ├── 📂 middleware
    │   ├── auth.middleware.js
    │   └── upload.middleware.js
    ├── 📂 models
    │   ├── animal.js
    │   ├── crop.model.js
    │   ├── farmer.model.js
    │   ├── rain.models.js
    │   ├── sea.model.js
    │   └── user.login.model.js
    ├── 📂 routes
    │   ├── animal.router.js
    │   ├── crop.router.js
    │   ├── farmer.router.js
    │   ├── login.router.js
    │   ├── rain.router.js
    │   └── sea.router.js
    ├── 📂 uploads
    │   ├── 📂 animals
    │   ├── 📂 farmers
    │   ├── 📂 profile
    │   └── 📂 sea
    ├── app.js
    └── server.js
```

## Key Features

### Frontend Structure
- **public/**: Static assets and media files
- **src/**: Source code
  - **components/**: Reusable UI components
  - **pages/**: Page components
  - **services/**: API integration
  - **styles/**: CSS and styling
  - **utils/**: Helper functions

### Backend Structure
- **config/**: Configuration files
- **controllers/**: Request handlers
- **middleware/**: Custom middleware
- **models/**: Database schemas
- **routes/**: API routes
- **uploads/**: Media storage

## File Naming Conventions
- React Components: PascalCase (e.g., HeaderHome.jsx)
- Utilities/Services: camelCase (e.g., authService.js)
- Configuration: lowercase with dots (e.g., db.config.js)
- Routes/Controllers: camelCase with descriptive suffixes

## Important Notes
1. Keep components modular and reusable
2. Follow consistent naming conventions
3. Organize imports logically
4. Use appropriate file extensions
5. Maintain clear separation of concerns
