// Create a new footer element
const Navigation = document.createElement('navigation');

// Set the content of the footer
Navigation.innerHTML = `
<style>
    .topnav {
    overflow: hidden;
    background-color: #72b6cf;
    }

    .topnav a {
    color: #000000;
    text-align: left;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 18px;
    }

    .topnav a:hover {
    background-color: #c7a8df;
    color: black;
    }
</style>
<div class="topnav">
    <a style = "float: left;" href="index.html"><b>Home</b></a>

</div>
`;

// Append the newly created footer element to the end of the HTML body
document.body.appendChild(Navigation);
