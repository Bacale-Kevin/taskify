import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
  if (!file) return;

  const fileUploaded = await storage.createFile("6484773d7db189390280", ID.unique(), file);

  return fileUploaded;
};

export default uploadImage;
