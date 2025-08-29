"use client";

// import React from "react";
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home');
  return null;
}


// export default function HomePage() {
//   return (
//     <main className="home-page w-full min-h-screen text-white p-8">
//       <h1 className="text-4xl font-bold mb-4">Welcome to CloudVid 🎥</h1>
//       <p className="text-lg">Upload, compress, and share your videos in seconds.</p>
//     </main>
//   );
// }

