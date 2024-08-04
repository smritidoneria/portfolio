import { type ClassValue, clsx } from "clsx"
import { Metadata } from "next"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function constructMetadata({
  title = "Smriti Doneria",
  description = "Welcome to my web development portfolio! I'm Smriti Doneria, a skilled web developer and machine learning enthusiast specializing in full-stack development. Discover my innovative web solutions, responsive designs, and interactive applications built with HTML, CSS, JavaScript, React, Node.js, and more. Additionally, explore my machine learning projects, where I leverage data to create intelligent solutions. Check out my projects and see how I can bring your digital vision to life.",
  image = "/me_updated.jpeg",
  icons = "/favicon.ico"
}: {
  title?: string,
  description?: string,
  image?: string,
  icons?: string
} = {}): Metadata {
  return {
    title, description, openGraph: {
      title, description, images: [{ url: image }]
    },
    icons,
  
  }
}