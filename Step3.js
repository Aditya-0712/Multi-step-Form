var checkbox = document.getElementsByClassName("checkbox");
var tick = document.querySelectorAll(".checkbox svg");

checkbox[0].onclick = function()
{
    if (checkbox[0].style.backgroundColor == "white")
    {
        checkbox[0].style.backgroundColor = "#ecf3fd";
        tick[0].style.fill = "blue";
        tick[0].style.border = "none";
        checkbox[0].style.border = "1px solid blue";
    }
    else 
    {
        checkbox[0].style.backgroundColor = "white";
        tick[0].style.fill = "white";
        tick[0].style.border = "1px solid rgba(0,0,0,0.15)";
        checkbox[0].style.border = "1px solid rgba(0,0,0,0.15)";
    }
}

checkbox[1].onclick = function()
{
    if (checkbox[1].style.backgroundColor == "white")
    {
        checkbox[1].style.backgroundColor = "#ecf3fd";
        tick[1].style.fill = "blue";
        tick[1].style.border = "none";
        checkbox[1].style.border = "1px solid blue";
    }
    else 
    {
        checkbox[1].style.backgroundColor = "white";
        tick[1].style.fill = "white";
        tick[1].style.border = "1px solid rgba(0,0,0,0.15)";
        checkbox[1].style.border = "1px solid rgba(0,0,0,0.15)";
    }
}

checkbox[2].onclick = function()
{
    if (checkbox[2].style.backgroundColor == "white")
    {
        checkbox[2].style.backgroundColor = "#ecf3fd";
        tick[2].style.fill = "blue";
        tick[2].style.border = "none";
        checkbox[2].style.border = "1px solid blue";
    }
    else 
    {
        checkbox[2].style.backgroundColor = "white";
        tick[2].style.fill = "white";
        tick[2].style.border = "1px solid rgba(0,0,0,0.15)";
        checkbox[2].style.border = "1px solid rgba(0,0,0,0.15)";
    }
}