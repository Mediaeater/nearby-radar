# NearbyRadar

A React Native application that helps users discover places of interest around them based on their preferences.

## Features
- Real-time location tracking
- Customizable place categories
- Distance-based filtering
- Persistent user preferences
- Clean, intuitive UI

## Tech Stack
- React Native
- Expo
- TypeScript
- React Navigation
- Expo Location
- AsyncStorage

## Project Structure
```
nearby-radar/
├── App.tsx                 # Main app component
├── app.json               # Expo configuration
├── babel.config.js        # Babel configuration
├── package.json           # Project dependencies
├── tsconfig.json         # TypeScript configuration
└── src/
    ├── contexts/         # React Context providers
    │   ├── LocationContext.tsx
    │   └── PreferencesContext.tsx
    ├── screens/          # Main screen components
    │   ├── NearbyPlaces.tsx
    │   └── PreferencesScreen.tsx
    └── services/         # Business logic and API calls
        └── placesService.ts
```

## Setup Instructions

### Prerequisites
- Node.js (v16 or later)
- npm (v8 or later)
- Expo CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd nearby-radar
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

### Development
- iOS Simulator: Press 'i' to open in iOS simulator
- Android Emulator: Press 'a' to open in Android emulator
- Physical Device: Scan QR code with Expo Go app

## Git Setup
```bash
# Initialize git repository
git init

# Add .gitignore file to exclude unnecessary files
cat > .gitignore << EOL
node_modules/
.expo/
dist/
npm-debug.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision
*.orig.*
web-build/
.env
.DS_Store
EOL

# Create initial commit
git add .
git commit -m "Initial commit: NearbyRadar app setup"

# Add remote repository (replace with your repository URL)
git remote add origin [repository-url]
git branch -M main
git push -u origin main
```

## Environment Variables
Currently using mock data. Future implementations will require:
- API keys for places data
- Environment configuration for different stages (dev/prod)

## Future Improvements
- Integration with real places API
- User authentication
- Place details view
- Search functionality
- Favorite places
- Route planning

## License
MIT
