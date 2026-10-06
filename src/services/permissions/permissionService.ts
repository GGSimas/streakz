import * as PermissionsTypes from "./types";
import * as ImagePicker from "expo-image-picker";

const mapPermissionStatus = (
  permission: ImagePicker.PermissionResponse,
): PermissionsTypes.PermissionStatus => {
  if (permission.granted) {
    return "granted";
  }

  if (!permission.canAskAgain) {
    return "blocked";
  }

  return permission.status;
};

const checkPermission = async (
  name: PermissionsTypes.PermissionName,
): Promise<PermissionsTypes.PermissionStatus> => {
  switch (name) {
    case "camera": {
      const cameraStatus = await ImagePicker.getCameraPermissionsAsync();
      return mapPermissionStatus(cameraStatus);
    }
    case "photoLibrary": {
      const photoLibraryStatus =
        await ImagePicker.getMediaLibraryPermissionsAsync();
      console.log("check", photoLibraryStatus);
      return mapPermissionStatus(photoLibraryStatus);
    }
    default:
      throw new Error(`Permission ${name} not supported`);
  }
};

const requestPermission = async (
  name: PermissionsTypes.PermissionName,
): Promise<PermissionsTypes.PermissionStatus> => {
  switch (name) {
    case "camera": {
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
      return mapPermissionStatus(cameraStatus);
    }
    case "photoLibrary": {
      const photoLibraryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      console.log("reuqest", photoLibraryStatus);
      return mapPermissionStatus(photoLibraryStatus);
    }
    default:
      throw new Error(`Permission ${name} not supported`);
  }
};

export const permissionsService: PermissionsTypes.PermissionService = {
  check: checkPermission,
  request: requestPermission,
};
