// import React, { useRef, useCallback } from 'react';
// import { useField } from 'formik';
// import { Upload, X } from 'lucide-react';

// interface ImageUploadFieldProps {
//   name: string;
//   maxSizeMB?: number;
//   label?: string;
// }

// export const ImageUploadField = React.memo<ImageUploadFieldProps>(({ name, maxSizeMB = 5, label = `Rasm yuklash (maks ${maxSizeMB}MB)` }) => {
//   const [field, meta, helpers] = useField<string | null>(name);
//   const fileRef = useRef<HTMLInputElement>(null);

//   const hasError = meta.touched && !!meta.error;
//   const imageSrc = field.value;

//   const handleClick = useCallback(() => fileRef.current?.click(), []);

//   const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     if (!file.type.startsWith('image/')) {
//       helpers.setError('Faqat rasm tanlang');
//       return;
//     }

//     if (file.size > maxSizeMB * 1024 * 1024) {
//       helpers.setError(`${maxSizeMB}MB dan kichik bo‘lishi kerak`);
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = (ev) => {
//       helpers.setValue(ev.target?.result as string);
//       helpers.setError(undefined);
//     };
//     reader.readAsDataURL(file);

//     e.target.value = '';
//   }, [helpers, maxSizeMB]);

//   const handleRemove = useCallback(() => {
//     helpers.setValue(null);
//     helpers.setError(undefined);
//     if (fileRef.current) fileRef.current.value = '';
//   }, [helpers]);

//   return (
//     <div>
//       {imageSrc ? (
//         <div className="relative group">
//           <img src={imageSrc} alt="Preview" className="w-full h-40 object-contain rounded-xl border border-gray-200 shadow-sm"/>
//           <button type="button" onClick={handleRemove} className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full shadow-lg transition-all opacity-90 hover:opacity-100">
//             <X size={18} />
//           </button>
//         </div>
//       ) : (
//         <div onClick={handleClick} className="border-2 border-dashed border-gray-300 hover:border-blue-400 rounded-xl h-40 flex flex-col items-center justify-center cursor-pointer transition-all hover:bg-gray-50">
//           <Upload className="text-gray-400 mb-3" size={32} />
//           <p className="text-sm text-gray-500 font-medium">{label}</p>
//         </div>
//       )}

//       <input ref={fileRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden"/>

//       {hasError && (
//         <p className="text-xs text-red-500 mt-1.5 ml-1">{meta.error}</p>
//       )}
//     </div>
//   );
// });