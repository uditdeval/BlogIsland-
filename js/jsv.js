
document.addEventListener('DOMContentLoaded', (event) => {
    // Get all anchor elements
    const links = document.querySelectorAll('a');

    // Loop through each link
    links.forEach(link => {
        // Check if the link's href attribute starts with "http" or "www"
        if (link.href.startsWith('http') || link.href.startsWith('www')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer'); // Optional for security reasons
        }
    });
});




