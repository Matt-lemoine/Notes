// Create a new footer element
const newFooter = document.createElement('footer');

// Set the content of the footer
newFooter.innerHTML = `
<p>
    <p style = "padding-left: 15px"><small> Website Last Updated: November 10, 2026 </small></p>
</p>
`;

// Optional: Add some basic styling or a class for CSS
newFooter.style.backgroundColor = '#72b6cf';
newFooter.style.color = 'black';
newFooter.style.textAlign = 'left';
newFooter.style.padding = '10px';
newFooter.style.position = 'relative';
newFooter.style.clear = 'both';

// Append the newly created footer element to the end of the HTML body
document.body.appendChild(newFooter);
