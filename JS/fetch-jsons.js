async function fetchJSONsFromAzure(blobUrl) {
    try {
        const response = await fetch(blobUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Error fetching JSONs from Azure:', error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    const blobUrl = 'URL_DEL_BLOB_STORAGE'; // Reemplaza con la URL real del Blob Storage
    const jsonData = await fetchJSONsFromAzure(blobUrl);
    if (jsonData) {
        // Almacena los JSONs en una variable global o en el localStorage
        window.jsonData = jsonData;
        console.log('JSONs fetched and stored:', jsonData);
    }
});