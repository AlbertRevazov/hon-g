export interface NavItem {
  path: string
  label: string
  exact: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { path: '/catalog', label: 'Каталог', exact: true },
  { path: '/invitation/12', label: 'Пример приглашения', exact: true },
  { path: '/rsvp/success', label: 'Success RSVP', exact: true },
  { path: '/rsvp/error', label: 'Error RSVP', exact: true },
]
