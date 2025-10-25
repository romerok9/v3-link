/**
 * Global type definitions for the application
 */

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
}

export interface Client {
  id: string
  name: string
  logo: string
  industry: string
  testimonial?: string
}

export interface Course {
  id: string
  title: string
  description: string
  duration: string
  level: string
  topics: string[]
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
}

export interface NavItem {
  name: string
  href: string
}

