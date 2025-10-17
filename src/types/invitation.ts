export interface Invitation {
  id: string
  slug: string
  title: string
  description: string
  image: string
  date: string
  time?: string
  location: string
  blocks: InvitationBlock[]
}

export type InvitationBlock =
  | { type: 'hero'; title: string; subtitle?: string; image: string }
  | { type: 'details'; date: string; time?: string; location: string }
  | { type: 'description'; content: string }
  | { type: 'rsvp'; formTitle?: string }
  | { type: 'map'; location: string }
  | { type: 'gallery'; images: string[] }
