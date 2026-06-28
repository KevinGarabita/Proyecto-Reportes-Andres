import imageCompression from "browser-image-compression";

const options = {
  maxSizeMB: 0.25,
  maxWidthOrHeight: 1600,
  useWebWorker: true,
  fileType: "image/jpeg",
  initialQuality: 0.82,
};

export async function compressImage(file: File): Promise<File> {
  return imageCompression(file, options);
}
