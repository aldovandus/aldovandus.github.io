"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.replace("/it/");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-md space-y-4">
        <p className="font-mono text-sm uppercase tracking-[0.16em] text-muted">
          Redirecting
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          Portfolio di Aldo Vandus
        </h1>
        <p className="text-muted">
          Se il redirect non parte automaticamente, apri la versione italiana o
          quella inglese del sito.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a href="/it/" className="btn-primary">
            Vai a Italiano
          </a>
          <a href="/en/" className="btn-secondary">
            Go to English
          </a>
        </div>
      </div>
    </main>
  );
}
