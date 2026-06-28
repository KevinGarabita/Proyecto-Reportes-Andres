import imageCompression from "browser-image-compression";

const options = {
  maxWidthOrHeight: 1200,
  maxSizeMB: 0.15,
  useWebWorker: true,
  initialQuality: 0.7,
};

export async function compressImage(file: File): Promise<File> {
  return imageCompression(file, options);
}
