export const validateRSVPForm = (data: {
  firstName: string
  lastName: string
  attending: boolean
}) => {
  const errors: string[] = []

  if (!data.firstName.trim()) errors.push('Введите имя')
  if (!data.lastName.trim()) errors.push('Введите фамилию')

  return {
    isValid: errors.length === 0,
    errors,
  }
}
