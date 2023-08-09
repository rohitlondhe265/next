"use client"

import axios from "axios";
import { useState } from "react";

export default function Input() {
    const [file, setFile] = useState();
    const [imgUrl, setimgUrl] = useState("");
    const [uploading, setuploading] = useState(false)
    
    const handleUpload = async () => {
        setuploading(true);
        try {
            if (!file) return;
            const formData = new FormData();
            formData.append("file", file);
            const res = await axios.post("/api/upload/f", formData);
            console.log(res);
        } catch (error) {
            console.log(error.response?.data);
        }
        setuploading(false);
    }
    return (
        <div>
            <label>
                <input type="file" hidden onChange={({ target }) => {
                    if (target.files) {
                        const file = target.files[0];
                        setimgUrl(URL.createObjectURL(file));
                        setFile(file);
                    }
                }} />
                <div className='w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer'>
                    {imgUrl ? (<img src={imgUrl} alt="preview" />) : (<span>Select Image</span>)}
                </div>
            </label>
            <button onClick={handleUpload} disabled={uploading} style={{ opacity: uploading ? ".5" : "1" }}
                className='bg-red-600 p-3 w-32 text-center rounded-md text-white'>
                {uploading ? "uploading ..." : "Upload"}
            </button>
        </div>
    )
}
