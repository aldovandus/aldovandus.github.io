---
slug: gestionale-asi
title:
  it: "Piattaforma Gestionale Soci – ASI"
  en: "ASI Members Management Platform"
description:
  it: "Piattaforma SaaS full stack per l'Associazione Sociologi Italiani — gestione associativa e processi amministrativi."
  en: "Full stack SaaS platform for the Italian Sociologists Association — membership and administrative process management."
year: 2025
technologies:
  - Next.js
  - Supabase
  - Hono
  - oRPC
  - Better Auth
  - Turborepo
  - Dokploy
featured: true
image: /projects/gestionale-asi.svg
---

<!-- it -->

## Overview

Piattaforma SaaS sviluppata per l'Associazione Sociologi Italiani (ASI) per digitalizzare la gestione associativa e i processi amministrativi interni.

## Il problema

L'associazione gestiva processi complessi — iscrizioni, documenti, comunicazioni — con strumenti frammentati. Serviva una piattaforma unificata, sicura e autogestita.

## Soluzione

Architettura monorepo con Turborepo: frontend Next.js, API REST con Hono e oRPC per tipizzazione end-to-end, autenticazione con Better Auth e database Supabase. PWA offline con caching avanzato. Deploy autonomo con Dokploy.

## Risultati

- Piattaforma unificata per tutti i processi associativi
- API tipate end-to-end con oRPC
- PWA offline-first per continuità operativa
- Deploy e manutenzione autonomi

<!-- en -->

## Overview

SaaS platform built for the Italian Sociologists Association (ASI) to digitize membership management and internal administrative processes.

## The problem

The association managed complex processes — registrations, documents, communications — with fragmented tools. They needed a unified, secure and self-managed platform.

## Solution

Monorepo architecture with Turborepo: Next.js frontend, REST API with Hono and oRPC for end-to-end typing, Better Auth authentication and Supabase database. Offline PWA with advanced caching. Self-managed deployment with Dokploy.

## Results

- Unified platform for all membership processes
- End-to-end typed APIs with oRPC
- Offline-first PWA for operational continuity
- Self-managed deployment and maintenance
