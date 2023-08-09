import formidable from 'formidable';
import fs from 'fs';
import { NextResponse } from 'next/server';

export const config = {
    api: {
        bodyParser: false,
    },
};

export async function POST(req) {
    const form = new formidable.IncomingForm()
    console.log(form)
    return NextResponse.json("ok")
    // form.uploadDir = `${process.cwd()}/public/images`;

    // form.parse(req, (err, fields, files) => {
    //     console.log(files)
    //     if (err) {
    //         return res.status(400).json({ error: 'Error parsing form data.' });
    //     }

    //     // Check if the uploaded file is an image
    //     if (!files.image || !files.image.type.startsWith('image/')) {
    //         return NextResponse.json({ error: 'Please upload an image file (jpeg, jpg, png, gif).' });
    //     }

    //     // Check the file size (limit to 5MB)
    //     if (files.image.size > 5 * 1024 * 1024) {
    //         return NextResponse.json({ error: 'The file size should be up to 5MB.' });
    //     }

    //     // Generate a unique filename for the uploaded image
    //     const filename = `${Date.now()}-${files.image.name}`;

    //     // Move the file to the upload directory
    //     fs.renameSync(files.image.path, `${process.cwd()}/public/images/${filename}`);

    //     const imageUrl = `/images/${filename}`;

    //     // Return the uploaded file details as a response.
    //     return NextResponse.json({
    //         originalname: files.image.name,
    //         filename,
    //         path: imageUrl,
    //         size: files.image.size,
    //         imageUrl,
    //     });
    // });
}
