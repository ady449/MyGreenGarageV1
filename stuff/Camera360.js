import * as React from "react";
import { requireNativeComponent, ViewStyle, Platform } from "react-native";

export const Camera360 = ({
  imageUrl,
  dimensions,
  inputType,
  enableTouchTracking,
  style,
  onImageLoadingFailed,
  onImageDownloaded,
  onImageLoaded,
  dimensions,
  inputType,
  props,
}) => {
  const _onImageLoadingFailed = () => {
    if (onImageLoadingFailed) {
      onImageLoadingFailed();
    }
  };

  const _onImageLoaded = () => {
    if (onImageLoaded) {
      onImageLoaded();
    }
  };

  const _onImageDownloaded = () => {
    if (onImageDownloaded) {
      onImageDownloaded();
    }
  };

  if (Platform.OS === "android" && !dimensions) {
    console.warn(
      'The "dimensions" property is required for PanoramaView on Android devices.'
    );
    return null;
  }

  if (Platform.OS === "ios" && inputType === "stereo") {
    console.warn(
      "The stereo inputType is currently only supported on Android devices."
    );
  }

  return (
    <NativePanoramaView
      {...props}
      dimensions={dimensions}
      inputType={inputType}
      onImageDownloaded={_onImageDownloaded}
      onImageLoaded={_onImageLoaded}
      onImageLoadingFailed={_onImageLoadingFailed}
    />
  );
};

export default Camera360;

const NativePanoramaView =
  requireNativeComponent < PanoramaViewProps > "PanoramaView";
