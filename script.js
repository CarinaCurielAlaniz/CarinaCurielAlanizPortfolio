function toggleMenu()
{
    //get html elements
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".ham-icon");
    //whenever we click them toggle them btwn open class
    //open class has different styling in css
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}