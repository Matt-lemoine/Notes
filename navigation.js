/* Navigation functions */

function openNav() {
    document.getElementById("mySidenav").style.width = "30%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/* Create navigation element */

const newNavigation = document.createElement("nav");

/* Set navigation HTML */

newNavigation.innerHTML = `
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
        padding: 8px;
        text-decoration: none;
        font-size: 25px;
        color: #ffffff;
        display: block;
        transition: 0.3s;
    }

    .sidenav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        width: 200px;
    }

    .sidenav li a {
        display: block;
        padding: 12px 16px;
        text-decoration: none;
    }

    .sidenav a:hover {
        color: #2459bc;
    }

    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 10px;
        font-size: 36px;
    }

    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }

        .sidenav a {
            font-size: 18px;
        }
    }
</style>

<div id="mySidenav" class="sidenav">
    <a href="javascript:void(0)"
       class="closebtn"
       onclick="closeNav()">&times;</a>
    <ul>
        <li><a href="index.html">HOME</a></li>
        <li><a href="Calculus_II/Calculus_II_Main.html">Calculus II</a></li>
        <li><a href="Calculus_III/Calculus_III_Main.html">Calculus III</a></li>
        <li><a href="Linear_Algebra/Linear_Algebra_Main.html">Linear Algebra</a></li>
        <li><a href="Contact.html">Contact Us</a></li>
    </ul>

</div>

<span
    style="font-size:30px;cursor:pointer;padding:10px;"
    onclick="openNav()">
    &#9776;
</span>
`;

/* Append navigation to body */

document.body.appendChild(newNavigation);
