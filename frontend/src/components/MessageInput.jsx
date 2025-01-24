import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";
import imageCompression from "browser-image-compression";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
  
    // Verificar si el archivo es una imagen
    if (!file.type.startsWith("image/")) {
      toast.error("Por favor selecciona un archivo de imagen");
      return;
    }
  
    // Verificar si el tamaño del archivo es menor a 2 MB
    const maxFileSizeMB = 2;
    if (file.size > maxFileSizeMB * 1024 * 1024) {
      toast.error("El archivo es demasiado grande. Máximo 2 MB.");
      return;
    }
  
    try {
      // Opciones de compresión
      const options = {
        maxSizeMB: 1, // Tamaño máximo después de la compresión (en MB)
        maxWidthOrHeight: 1024, // Tamaño máximo de ancho/alto en píxeles
        useWebWorker: true, // Usa un web worker para mejorar el rendimiento
      };
  
      // Comprimir la imagen
      const compressedFile = await imageCompression(file, options);
  
      // Convertir la imagen comprimida a base64
      const compressedBase64 = await imageCompression.getDataUrlFromFile(compressedFile);
  
      // Actualizar la vista previa con la imagen comprimida
      setImagePreview(compressedBase64);
      toast.success("Imagen lista para subir.");
    } catch (error) {
      console.error("Error al comprimir la imagen:", error);
      toast.error("Ocurrió un error al procesar la imagen.");
    }
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      // Clear form
      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.log(error);
      console.log("Failed to send message:", error);
    }
  };

  return (
    <div className="p-4 w-full">
      {imagePreview && (
        <div className="mb-3 flex items-center gap-2">
          <div className="relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
            />
            <button
              onClick={removeImage}
              className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
              flex items-center justify-center"
              type="button"
            >
              <X className="size-3" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-2">
        <div className="flex-1 flex gap-2">
          <input
            type="text"
            className="w-full input input-bordered rounded-lg input-sm sm:input-md"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`hidden sm:flex btn btn-circle
                     ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>
        </div>
        <button
          type="submit"
          className="btn btn-sm btn-circle"
          disabled={!text.trim() && !imagePreview}
        >
          <Send size={22} />
        </button>
      </form>
    </div>
  );
};
export default MessageInput;
