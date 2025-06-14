# Nature Website Frontend Documentation

## Directory Structure
```plaintext
📦 frontend
├── 📂 public
│   └── 📂 assets
│       ├── 📂 images
│       └── 📂 audio
│           └── nature.mp3
└── 📂 src
    ├── 📂 components
    │   ├── 📂 common
    │   │   ├── Button.jsx
    │   │   └── Input.jsx
    │   └── 📂 layout
    │       ├── Footer.jsx
    │       └── Header.jsx
    ├── 📂 pages
    │   ├── 📂 auth
    │   │   ├── Login.jsx
    │   │   └── Signup.jsx
    │   └── 📂 inside-page
    │       ├── 📂 navigate
    │       │   ├── ReadMore.jsx          # Animal details page
    │       │   ├── Farmnaviget.jsx       # Farmer details page
    │       │   ├── rainFlownavigate.jsx  # Rain details page
    │       │   └── seanaviget.jsx        # Sea details page
    │       ├── 📂 forms
    │       │   └── farminfo.jsx          # Farmer information form
    │       ├── aboutHome.jsx             # About page
    │       ├── farmerHome.jsx            # Farmer main page
    │       ├── footerHome.jsx            # Footer component
    │       ├── headerHome.jsx            # Header component
    │       ├── home.jsx                  # Main home page
    │       ├── natureHome.jsx            # Nature/Animals page
    │       ├── profile.jsx               # User profile page
    │       ├── rainFlowHome.jsx          # Rain main page
    │       └── seaHome.jsx               # Sea main page
    ├── 📂 services
    │   └── api.js                        # API integration
    └── 📂 styles
        └── index.css                     # Global styles

## Page Routes

### Authentication Pages
```plaintext
/           - Login page
/signup     - Registration page
```

### Main Pages
```plaintext
/home           - Dashboard
/natureHome     - Nature/Animals gallery
/farmerHome     - Farmer information
/rainFlowHome   - Rain experiences
/seaHome        - Sea experiences
/aboutHome      - About information
/profile        - User profile
```

### Navigation Pages
```plaintext
/animal     - Animal details view
/farm       - Farmer details view
/rain       - Rain details view
/sea        - Sea details view
```

## Component Features

### Profile Page
```plaintext
Features:
- Profile image upload
- Personal information update
- Form validation
- Image preview
- Success/error messages
```

### Nature Home
```plaintext
Features:
- Media upload (images/videos)
- Animal information form
- Gallery view
- Media preview
- Navigation to details
```

### Farmer Home
```plaintext
Features:
- Farmer registration
- Media upload
- Location selection
- Farm details form
- Preview functionality
```

### Rain Flow Home
```plaintext
Features:
- Rain media upload
- Weather information
- Location tracking
- Media preview
- Gallery display
```

### Sea Home
```plaintext
Features:
- Sea experience upload
- Location tracking
- Time selection
- Media management
- Gallery view
```

## Form Validations

### Media Upload
```javascript
Accepted Types:
- Images: jpeg, jpg, png
- Videos: mp4, mov
Size Limits:
- Images: 5MB
- Videos: 50MB
```

### Form Fields
```javascript
Required Fields:
- Title/Name
- Location
- Type
- Description
Optional Fields:
- Tags
- Additional Info
- Weather Conditions
```

## State Management
```javascript
Main States:
- User Authentication
- Form Data
- Media Upload
- Navigation State
- Profile Information
```

## API Integration
```javascript
Endpoints:
- Media Upload: POST /api/upload
- Form Submit: POST /api/{type}/submit
- Data Fetch: GET /api/{type}/data
- Profile Update: PUT /api/profile
```
