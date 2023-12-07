"use client";
import Link from "next/link";
import { useRef } from "react";
import Component from "../components/component";

export default function Home() {
  const ref = useRef(null);
  return (
    <main ref={ref} className="border-2">
      this is home page
 
      <Component reference={ref} />
      <Component reference={ref} />
    </main>
  );
}
