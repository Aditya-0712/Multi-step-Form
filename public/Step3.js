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

checkbox[3].onclick = function()
{
    if (checkbox[3].style.backgroundColor == "white")
    {
        checkbox[3].style.backgroundColor = "#ecf3fd";
        tick[3].style.fill = "blue";
        tick[3].style.border = "none";
        checkbox[3].style.border = "1px solid blue";
    }
    else 
    {
        checkbox[3].style.backgroundColor = "white";
        tick[3].style.fill = "white";
        tick[3].style.border = "1px solid rgba(0,0,0,0.15)";
        checkbox[3].style.border = "1px solid rgba(0,0,0,0.15)";
    }
}

checkbox[4].onclick = function()
{
    if (checkbox[4].style.backgroundColor == "white")
    {
        checkbox[4].style.backgroundColor = "#ecf3fd";
        tick[4].style.fill = "blue";
        tick[4].style.border = "none";
        checkbox[4].style.border = "1px solid blue";
    }
    else 
    {
        checkbox[4].style.backgroundColor = "white";
        tick[4].style.fill = "white";
        tick[4].style.border = "1px solid rgba(0,0,0,0.15)";
        checkbox[4].style.border = "1px solid rgba(0,0,0,0.15)";
    }
}

checkbox[5].onclick = function()
{
    if (checkbox[5].style.backgroundColor == "white")
    {
        checkbox[5].style.backgroundColor = "#ecf3fd";
        tick[5].style.fill = "blue";
        tick[5].style.border = "none";
        checkbox[5].style.border = "1px solid blue";
    }
    else 
    {
        checkbox[5].style.backgroundColor = "white";
        tick[5].style.fill = "white";
        tick[5].style.border = "1px solid rgba(0,0,0,0.15)";
        checkbox[5].style.border = "1px solid rgba(0,0,0,0.15)";
    }
}

function pcnext()
{
    var ad1,ad2,ad3;
    if(checkbox[3].style.backgroundColor != "white")
    {
        ad1="ok";
    }
    else
    {
        ad1="no";
    }

    if(checkbox[4].style.backgroundColor != "white")
    {
        ad2="ok";
    }
    else 
    {
        ad2="no";
    }

    if(checkbox[5].style.backgroundColor != "white")
    {
        ad3="ok";
    }
    else 
    {
        ad3="no";
    }

    fetch('/Step4.html', {
        method: 'POST',       
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "AD1": ad1 , "AD2":ad2 , "AD3":ad3 })
        })
        .then(response => response.json());

    window.location.href = "/Step4.html";
}

function next()
{
    var add1,add2,add3;
    if(checkbox[0].style.backgroundColor != "white")
    {
        add1="ok";
    }
    else
    {
        add1="no";
    }

    if(checkbox[1].style.backgroundColor != "white")
    {
        add2="ok";
    }
    else 
    {
        add2="no";
    }

    if(checkbox[2].style.backgroundColor != "white")
    {
        add3="ok";
    }
    else 
    {
        add3="no";
    }

    fetch('/Step4.html', {
        method: 'POST',       
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "AD1": add1 , "AD2":add2 , "AD3":add3 })
        })
        .then(response => response.json());

    window.location.href = "/Step4.html";
}

function goback()
{
    window.location.href = "/Step2.html";
}