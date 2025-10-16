import { useNavigate } from 'react-router-dom'

export const useNavigation = () => {
	const navigate = useNavigate()

	const goToCatalog = () => navigate('/catalog')
	const goToInvitation = (id: string) => navigate(`/invitation/${id}`)
	const goToSuccess = () => navigate('/rsvp/success')
	const goToError = () => navigate('/rsvp/error')

	return {
		goToCatalog,
		goToInvitation,
		goToSuccess,
		goToError,
	}
}
