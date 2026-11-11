// Create a new footer element
const Navigation = document.createElement('navigation');

// Set the content of the footer
Navigation.innerHTML = `
<style>
    .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #132e61;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
    text-align: left;
    }

    .sidenav a {
    padding: 8px 8px 8px 8px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
    transition: 0.3s;
    }

    .sidenav ul {
    list-style-type: none; /* Removes bullet points */
    margin: 0;
    padding: 0;
    width: 200px; /* Sets the width of the sidebar */
    }

    .sidenav li a {
    display: block; /* Forces links to stack vertically and makes the whole area clickable */
    padding: 12px 16px;
    text-decoration: none;
    }

    .sidenav a:hover{
    color: #2459bc;
    }

    .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 10px;
    font-size: 36px;
    }

    @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
    }
</style>
<div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <ul>
    <li><a style = "float: left"; href = "../index.html">HOME</a></li>
    <li><a style = "float: left"; href = "../Calculus_II/Calculus_II_Main.html">Calculus II</a></li>
    <li><a style = "float: left"; href = "../Calculus_III/Calculus_III_Main.html">Calculus III</a></li>
    <li><a style = "float: left"; href = "../Linear_Algebra/Linear_Algebra_Main.html">Linear Algebra</a></li>
  </ul>
</div>
`;

// Append the newly created footer element to the end of the HTML body
document.body.appendChild(Navigation);


// Ok, so when you have html files in a folder like our Calc II, Calc III, and L.A., you have to have a separate navigation to get you out of those folders.
// So here navigation2.js gets you out of the folders that have those subjects and can put you in any other folder.