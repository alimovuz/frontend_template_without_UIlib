export const getBase64 = (file: File): Promise<{ base64: string, name: string, size: any }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => resolve({
      base64: reader.result as string,
      name: file.name,
      size: file.size
    });

    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(file);
  });
};