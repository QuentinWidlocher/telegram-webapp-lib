import * as Telegram from "./types/telegram-webapp";

export { BackButton } from "./components/back-button";
export type { BackButtonProps } from "./components/back-button";
export { MainButton } from "./components/main-button";
export type { MainButtonProps } from "./components/main-button";
export { StableContainer } from "./components/stable-container";
export type { StableContainerProps } from "./components/stable-container";
export { HapticButton } from "./components/haptic-button";
export type { HapticButtonProps } from "./components/haptic-button";
export { HapticInput } from "./components/haptic-input";
export type { HapticInputProps } from "./components/haptic-input";

export { createExpandSignal } from "./signals/expand";
export { createCloseSignal } from "./signals/close";
export { createInitDataSignal } from "./signals/initData";
export {
  createHapticImpactSignal,
  createHapticSelectionSignal,
} from "./signals/haptic";
export { createThemeSignal } from "./signals/theme";
export { createUserSignal } from "./signals/user";
export {
  createViewportHeightSignal,
  createViewportStableHeightSignal,
} from "./signals/viewport";


declare global {
  export interface Window {
    Telegram: {
      WebApp: Telegram.WebApp;
    };
  }
}