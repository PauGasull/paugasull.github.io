function alertWorkInProgress(){
    alert("Still Work in Progress. Please, try again later!")
}
function loadHTMLFileWithCSS(htmlUrl, cssUrl) {
    // Fetch HTML file
    fetch(htmlUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(html => {
            // Insert HTML content into the current document
            document.body.innerHTML = html;

            // Fetch CSS file
            fetch(cssUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.text();
                })
                .then(css => {
                    // Create style element and append CSS
                    const styleElement = document.createElement('style');
                    styleElement.innerHTML = css;
                    document.head.appendChild(styleElement);
                })
                .catch(error => {
                    console.error('Error loading CSS file:', error);
                });
        })
        .catch(error => {
            console.error('Error loading HTML file:', error);
        });
}