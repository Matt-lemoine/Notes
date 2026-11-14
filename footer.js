// Create a new footer element
const newFooter = document.createElement('footer');
const preFooter = document.createElement('footer');

// Set the content of the footer
preFooter.innerHTML = `<div style="height: 50px;"></div>`;
newFooter.innerHTML = `
<p>
    <p style = "padding-left: 15px"><small> Website Last Updated: November 14, 2026 </small></p>
</p>
`;

// Optional: Add some basic styling or a class for CSS
newFooter.style.backgroundColor = '#132e61';
newFooter.style.color = '#ffffff';
newFooter.style.textAlign = 'left';
newFooter.style.padding = '10px';
newFooter.style.position = 'relative';
newFooter.style.clear = 'both';

// Append the newly created footer element to the end of the HTML body
document.body.appendChild(preFooter);
document.body.appendChild(newFooter);
