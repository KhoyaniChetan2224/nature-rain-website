# Nature Website API Documentation

## Folder Structure
```plaintext
📦 backend
├── 📂 config
│   └── db.config.js          # Database configuration
├── 📂 controllers           # Request handlers
│   ├── animal.controllers.js
│   ├── crop.controller.js
│   ├── farmer.controller.js
│   ├── login.controllers.js
│   ├── rain.controller.js
│   └── sea.controllers.js
├── 📂 middleware           # Custom middleware functions
│   ├── auth.middleware.js
│   └── upload.middleware.js
├── 📂 models              # Database schemas
│   ├── animal.js
│   ├── blacklistToken.model.js
│   ├── crop.model.js
│   ├── farmer.model.js
│   ├── rain.models.js
│   ├── sea.model.js
│   └── user.login.model.js
├── 📂 routes             # API routes
│   ├── animal.router.js
│   ├── crop.router.js
│   ├── farmer.router.js
│   ├── login.router.js
│   ├── rain.router.js
│   └── sea.router.js
├── 📂 services          # Business logic
│   └── login.service.js
├── 📂 uploads          # File storage
│   ├── animals/
│   ├── farmers/
│   ├── profile/
│   └── sea/
└── 📂 db              # Database connection
    └── db.js
```

## API Endpoints

### Authentication Routes
```plaintext
POST /users/signup
- Register new user
- Body: { username, email, password, location?, phone? }

POST /users/login
- User login
- Body: { username, password }

GET /users/profile
- Get user profile
- Headers: Authorization: Bearer <token>

PUT /users/profile
- Update user profile
- Headers: Authorization: Bearer <token>
- Body: FormData{ username?, email?, location?, phone?, photo? }

DELETE /users/profile
- Delete user account
- Headers: Authorization: Bearer <token>
```

### Animal Routes
```plaintext
POST /forest/animal
- Create new animal entry
- Body: {
    animalname: string,
    age: string,
    type: string,
    location: string,
    description: string
  }
```

### Farmer Routes
```plaintext
POST /farmer/farm
- Register/Login farmer
- Body: {
    farmerName: string,
    farmerEmail: string,
    farmerPhone: string,
    farmerLocation: string
  }

POST /farmcropdata/farminfo
- Create crop information
- Body: {
    cropName, cropType, season, quantity,
    unit, farmLocation, soilType, etc.
  }
```

### Rain Routes
```plaintext
POST /rain/rain
- Create rain information
- Body: {
    title: string,
    type: "image" | "video",
    description: string,
    src: string
  }
```

### Sea Routes
```plaintext
POST /sea/sea
- Create sea observation
- Body: {
    observerName, date, time, location,
    temperature, windSpeed, waveHeight,
    cloudCover, waterColor, skyColor, etc.
  }

GET /sea/sea
- Get all sea observations
```

## Models

### User Model
```javascript
{
  username: String,
  email: String,
  location: String,
  phone: String,
  password: String,
  profileImage: String
}
```

### Animal Model
```javascript
{
  animalname: String,
  age: String,
  type: String,
  location: String,
  description: String
}
```

### Farmer Model
```javascript
{
  farmerName: String,
  farmerEmail: String,
  farmerPhone: String,
  farmerLocation: String
}
```

### Sea Model
```javascript
{
  observerName: String,
  date: String,
  time: String,
  location: String,
  temperature: String,
  windSpeed: String,
  waveHeight: String,
  cloudCover: String,
  waterColor: String,
  skyColor: String,
  mood: String,
  photographer: String,
  cameraUsed: String,
  email: String,
  description: String
}
```

## Middleware Functions

### Authentication Middleware
```javascript
authenticateToken
- Verifies JWT token
- Adds user to request object
```

### Upload Middleware
```javascript
multer configuration
- Handles file uploads
- Validates file types
- Manages file storage
```

## Services

### User Service
```javascript
createUser(username, email, password)
findUserByEmail(email)
findUserByUsername(username)
updateUser(userId, updateData)
validatePassword(inputPassword, hashedPassword)
```

## Environment Variables
```plaintext
PORT=4000
DB_CONNECT=mongodb://localhost/nature_db
JWT_SECRET=your-secret-key
VITE_FRONTEND_URL=http://localhost:5173
```
