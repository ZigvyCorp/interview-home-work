"use client";

// Utilities
import { useEffect } from "react";
import { useRouter } from "next/navigation"

export default function Post() {
  const router = useRouter();

  useEffect(() => {
    router.push('/post/1');
  })
}