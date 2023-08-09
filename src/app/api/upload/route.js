import { writeFile } from 'fs/promises'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const data = await request.formData()
  const file = data.get('file')

  if (!file) {
    return NextResponse.json({ success: false })
  }

  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)

  // With the file data in the buffer, you can do whatever you want with it.
  // For this, we'll just write it to the filesystem in a new location
  const fileName = `${Date.now()}-${file.name}`
  const path = `${process.cwd()}/public/uploads/${fileName}`
  await writeFile(path, buffer)
  console.log(`open ${path} to see the uploaded file`)

  const fileUrl = `/uploads/${fileName}`
  return NextResponse.json({ success: true, fileUrl })
}