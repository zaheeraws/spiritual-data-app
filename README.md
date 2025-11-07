# Spiritual Data - Test Task

What this repo contains
- Minimal Expo TypeScript app (Home list + Detail)
- Typed API client using local mock (src/mock/data.json)
- Basic navigation and error/loading/empty states


### How to run
1. yarn
2. npx expo start -c
3. Open in Expo Go (Android/iOS) or emulator

### Decisions & trade-offs
- Expo + TypeScript for fast prototyping and cross-platform parity.
- FlatList with keyExtractor + memo ListItem for performance on long lists.
- Local mock by default for CORS-free demo; replace `API_BASE` in `src/api/client.ts` to call real API.
- Kept architecture minimal: src/{api,components, screens, navigation, types} — clean separation for quick extension.

