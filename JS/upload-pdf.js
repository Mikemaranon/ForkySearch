document.getElementById('uploadForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('pdfFile');
    const formData = new FormData();
    formData.append('pdfFile', fileInput.files[0]);

    try {
        const response = await fetch('/upload', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('File uploaded successfully!');
            window.location.href = '../index.html'; // Redirigir a index.html después de la carga exitosa
        } else {
            alert('Failed to upload file.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while uploading the file.');
    }
});