import { createEffect, onCleanup, onMount } from "solid-js";
import { createHapticImpactSignal } from "../signals/haptic";
import { createMainButtonSignal } from "../signals/main-button";

export type MainButtonProps = {
  onClick?: () => void;
  text?: string;
  active?: boolean;
  progressVisible?: boolean;
  hapticForce?: Parameters<typeof createHapticImpactSignal>[0];
};

export function MainButton(props: MainButtonProps) {
  const mainButton = createMainButtonSignal({
    onClick: props.onClick,
    text: props.text,
    hapticForce: props.hapticForce,
    active: props.active,
    progressVisible: props.progressVisible,
    show: true,
  });

  onMount(() => {
    mainButton.setVisible(true);
  });

  onCleanup(() => {
    mainButton.setVisible(false);
  });

  createEffect(() => {
    mainButton.setActive(props.active);
    mainButton.setProgressVisible(props.progressVisible);
    mainButton.setText(props.text);
  });

  return null;
}
