function searchInJSONs(jsonData, keyword) {
    const results = jsonData.filter(item => {
        return Object.values(item).some(value => 
            typeof value === 'string' && value.toLowerCase().includes(keyword.toLowerCase())
        );
    });
    return results;
}

document.getElementById('search-button').addEventListener('click', async () => {
    const keyword = document.getElementById('search-bar').value;
    const blobUrl = 'URL_DEL_BLOB_STORAGE'; // Reemplaza con la URL real del Blob Storage
    const jsonData = await fetchJSONsFromAzure(blobUrl);
    if (jsonData) {
        const searchResults = searchInJSONs(jsonData, keyword);
        displayResults(searchResults);
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.innerHTML = '';
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'result-item';
        resultElement.textContent = JSON.stringify(result);
        resultsContainer.appendChild(resultElement);
    });
}