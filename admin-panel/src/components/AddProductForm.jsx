// src/components/AddProductForm.jsx
import React, { useState, useRef } from "react";

const initialState = {
  title: "",
  description: "",
  price: "",
  type: "kids",
  details: "",
  images: [],
};

const AddProductForm = ({ onAdd }) => {
  const [form, setForm] = useState(initialState);
  const [previewUrls, setPreviewUrls] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const dropRef = useRef();

  const handleImageAppend = (files) => {
    const validFiles = Array.from(files);
    const newPreviews = validFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls((prev) => [...prev, ...newPreviews]);
    setSelectedFiles((prev) => [...prev, ...validFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files && files.length > 0) {
      handleImageAppend(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropRef.current.classList.add("border-blue-500");
  };

  const handleDragLeave = () => {
    dropRef.current.classList.remove("border-blue-500");
  };

  const uploadImagesToCloudinary = async (files) => {
    const cloudName = "duz0tcsb5";
    const uploadPreset = "YourGiftBox";

    const uploadPromises = files.map((file) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", uploadPreset);

      return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body: formData,
      }).then((res) => res.json());
    });

    const uploaded = await Promise.all(uploadPromises);
    return uploaded.map((file) => file.secure_url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cloudUrls = await uploadImagesToCloudinary(selectedFiles);

    const newProduct = {
      ...form,
      images: cloudUrls,
      details: form.details.split(",").map((d) => d.trim()),
    };

    onAdd(newProduct);
    setForm(initialState);
    setPreviewUrls([]);
    setSelectedFiles([]);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow-md space-y-4 w-full max-w-2xl"
    >
      <h2 className="text-2xl font-semibold">Add New Product</h2>

      <input
        className="w-full border p-2 rounded"
        placeholder="Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <textarea
        className="w-full border p-2 rounded"
        placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />

      <input
        className="w-full border p-2 rounded"
        type="number"
        placeholder="Price"
        value={form.price}
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        className="w-full border p-2 rounded"
        placeholder="Details (comma separated)"
        value={form.details}
        onChange={(e) => setForm({ ...form, details: e.target.value })}
      />

      <select
        className="w-full border p-2 rounded"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="kids">Kids</option>
        <option value="adult">Adult</option>
        <option value="corporate">Corporate</option>
      </select>

      {/* Drag-and-Drop Upload Zone */}
      <div
        ref={dropRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className="w-full h-32 border-2 border-dashed border-gray-400 rounded flex items-center justify-center text-gray-500 hover:border-blue-500 cursor-pointer"
      >
        Drag & drop product images here
      </div>

      <div className="flex gap-2 flex-wrap mt-2">
        {previewUrls.map((img, i) => (
          <img key={i} src={img} className="w-16 h-16 object-cover rounded" />
        ))}
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
