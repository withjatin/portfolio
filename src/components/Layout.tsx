import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CustomCursor } from "./CustomCursor";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <CustomCursor />
      <Navbar />
      <main className="flex-grow pt-20 relative">
        {children}
      </main>
      <Footer />
    </div>
  );
}
