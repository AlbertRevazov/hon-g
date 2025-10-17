export type InvitationParams = {
  id: string
}

export type Routes = {
  '/': void
  '/invitation/:id': { id: string }
  '/rsvp/success': void
  '/rsvp/error': void
}
