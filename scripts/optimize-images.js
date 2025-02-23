import sharp from 'sharp';
import { readdir, readFile, writeFile } from 'fs/promises';
import path from 'path';
import heicConvert from 'heic-convert';

const sourceDir = './src/assets/original';
const outputDir = './src/assets/optimized';

async function convertHeicToJpeg(inputBuffer) {
  try {
    const jpegBuffer = await heicConvert({
      buffer: inputBuffer,
      format: 'JPEG',
      quality: 0.9
    });
    return jpegBuffer;
  } catch (error) {
    console.error('Error converting HEIC to JPEG:', error);
    throw error;
  }
}

async function optimizeImages() {
  try {
    const files = await readdir(sourceDir);
    
    for (const file of files) {
      if (file.toLowerCase().endsWith('.heic')) {
        console.log(`Processing ${file}...`);
        
        const inputPath = path.join(sourceDir, file);
        const outputPath = path.join(
          outputDir, 
          file.replace(/\.heic$/i, '.webp')
        );

        // First convert HEIC to JPEG buffer
        const heicBuffer = await readFile(inputPath);
        const jpegBuffer = await convertHeicToJpeg(heicBuffer);

        // Then optimize and convert to WebP using sharp
        await sharp(jpegBuffer)
          .webp({ quality: 80 })
          .resize(1200, null, { // max width 1200px, maintain aspect ratio
            withoutEnlargement: true
          })
          .toFile(outputPath);

        console.log(`Converted and optimized: ${file} -> ${path.basename(outputPath)}`);
      }
    }
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

optimizeImages(); 