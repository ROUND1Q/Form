export async function sendEmail(data) {
  try {
    const serverUrl = 'http://localhost:3000'; 
    const response = await fetch(`${serverUrl}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    throw error;
  }
}
