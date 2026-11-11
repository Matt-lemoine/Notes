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
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #ffffff;
    display: block;
    transition: 0.3s;
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
  <a style = "float: left"; href = "index.html">HOME</a>
  <a style = "float: left"; href = "Calculus_II_Main.html">Calculus II</a>
  <a style = "float: left"; href = "Calculus_III_Main.html">Calculus III</a>
  <a style = "float: left"; href = "Linear_Algebra_Main.html">Linear Algebra</a>
</div>
`;

// Append the newly created footer element to the end of the HTML body
document.body.appendChild(Navigation);
