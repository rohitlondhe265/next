import multer from 'multer';
import { NextResponse } from 'next/server';

const upload = multer({
    dest: '/uploads',
    limits: {
        fileSize: 5 * 1024 * 1024, // 5MB limit
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Please upload an image file (jpeg, jpg, png, gif).'));
        }
    },
});

export async function POST(req) {

    const formData = await req.formData();
    console.log(formData)
    const file = formData.get('file');
    console.log(file)
    upload.single(file)(req, NextResponse, (err) => {
        if (err) {
            return NextResponse.json({ error: err.message });
        }
        // If the file was uploaded successfully, `req.file` will contain the uploaded file details.
  console.log(req.file)
        // const imageUrl = `/uploads/${filename}`;

        // Return the uploaded file details as a response.
        // return NextResponse.json({
        //     filename,
        //     path,
        //     size,
        //     imageUrl,
        // });
        return NextResponse.json({file, formData})
    });
}
