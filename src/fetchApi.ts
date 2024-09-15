export const fetchApi = async <T>(url: string): Promise<T> => {
  try {
    const response = await fetch(`http://localhost:8089/api/${url}`);
    return await response.json();
  } catch (err) {
    console.error(err);
    throw new Error('Failed to fetch data');
  }
};
