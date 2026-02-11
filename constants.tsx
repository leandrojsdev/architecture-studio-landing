import { Project, ServiceProcess } from './types';
import { Layout, PenTool, Home, CheckCircle } from 'lucide-react';

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: 1,
    title: "The Obsidian Residence",
    category: "Residential",
    // Luxury White & Brown living room
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Gilded Office Suite",
    category: "Commercial",
    // Minimalist office with gold/wood accents
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Alpine Sanctuary",
    category: "Residential",
    // Wood heavy, warm brown luxury
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Marble & Brass Lobby",
    category: "Commercial",
    // White marble, gold accents
    imageUrl: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
  },
];

export const PROCESS_STEPS: ServiceProcess[] = [
  {
    id: 1,
    title: "Vision & Strategy",
    description: "We align your aspirations with our design philosophy to create a blueprint for greatness.",
    icon: "message-circle",
  },
  {
    id: 2,
    title: "Architectural Concept",
    description: "Developing spatial harmony through pure forms and luxurious material selection.",
    icon: "pen-tool",
  },
  {
    id: 3,
    title: "Craftsmanship",
    description: "Constructing with the finest materials to ensure stability, reliability, and precision.",
    icon: "hammer",
  },
  {
    id: 4,
    title: "The Unveiling",
    description: "Step into a fully realized environment of comfort, wealth, and sophisticated living.",
    icon: "key",
  },
];

export const SOCIAL_PROOF_LOGOS = [
  "Architectural Digest",
  "Dezeen",
  "Elle Decor",
  "Vogue Living"
];