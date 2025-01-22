import crypto from "crypto";

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, "base64"); // 32 bytes
const ENCRYPTION_IV = Buffer.from(process.env.ENCRYPTION_IV, "base64");  // 16 bytes

// Función para encriptar
export const encryptMessage = (text) => {
  const cipher = crypto.createCipheriv("aes-256-cbc", ENCRYPTION_KEY, ENCRYPTION_IV);
  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
};

// Función para desencriptar
export const decryptMessage = (encryptedText) => {
  const decipher = crypto.createDecipheriv("aes-256-cbc", ENCRYPTION_KEY, ENCRYPTION_IV);
  let decrypted = decipher.update(encryptedText, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
