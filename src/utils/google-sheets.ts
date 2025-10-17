export const submitToGoogleSheets = async (invitationId: string, formData: any) => {
  try {
    const response = await fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        invitationId,
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    })

    return response.ok
  } catch (error) {
    return false
  }
}
