    $(window).on("orientationchange", function (event) { showSizes() })

    function showSizes()
    {
        var showMe = document.getElementById("showMe");
        var showLine = "<table>" +
                        "<tr>" +
                        "<td>screen.width</td>" +
                        "<td>" + screen.width + "</td>" +
                        "<td>screen.availwidth</td>" +
                        "<td>" + screen.availWidth + "</td>" +
                        "<td>window.innerWidth</td>" +
                        "<td>" + window.innerWidth + "</td>" +
                        "</tr>" +
                        "<tr>" +
                        "<td>screen.height</td>" +
                        "<td>" + screen.height + "</td>" +
                        "<td>screen.availheight</td>" +
                        "<td>" + screen.availHeight + "</td>" +
                        "<td>window.innerHeight</td>" +
                        "<td>" + window.innerHeight + "</td>" +
                        "</tr>" +
                        "</table>";
        showMe.innerHTML = showLine;
        var wrapper = document.getElementById("wrapper");
        var sorry = document.getElementById("sorry");
        if (window.innerWidth > 1440)
        {
            wrapper.style.display = "block";
            sorry.style.display = "none";
            var midden = document.getElementById("midden");
            midden.style.height = "540px";
            var midden = document.getElementById("onder");
            midden.style.height = "1700px";
            var i;
            var colClass1 = document.getElementsByClassName("col1");
            for (i = 0; i < colClass1.length; i++)
            {
                colClass1[i].style.display = "block";
                colClass1[i].style.width = "32%";
                colClass1[i].style.float = "left";
            }

            var colClass2 = document.getElementsByClassName("col2");
            for (i = 0; i < colClass2.length; i++)
            {
                colClass2[i].style.display = "block";
                colClass2[i].style.width = "64%";
                colClass2[i].style.float = "left";
            }
        }
        else if ((window.innerWidth <= 1440) && (window.innerWidth >= 540))
        {
            wrapper.style.display = "block";
            sorry.style.display = "none";
            var midden = document.getElementById("midden");
            midden.style.height = "1200px";
            var midden = document.getElementById("onder");
            midden.style.height = "3600px";
            var i;
            var colClass1 = document.getElementsByClassName("col1");
            for (i = 0; i < colClass1.length; i++)
            {
                colClass1[i].style.display = "inline-block";
                colClass1[i].style.width = "96%";
                colClass1[i].style.float = "none";
            }

            var colClass2 = document.getElementsByClassName("col2");
            for (i = 0; i < colClass2.length; i++)
            {
                colClass2[i].style.display = "inline-block";
                colClass2[i].style.width = "96%";
                colClass2[i].style.float = "none";
            }
        }
        else
        {
            wrapper.style.display = "none";
            sorry.style.display = "block";
            var msg = " ";
            if (typeof window.orientation === 'undefined')
            {
                msg = "Sorry, ik heb minimaal 540 pixels screen breedte nodig om mijn CV op een nette wijze te laten zien.... ";
            }
            else if ((window.innerHeight > window.innerWidth) && (screen.availHeight >= 540))
            {
                msg = "Sorry, ik heb minimaal 540 pixels screen breedte nodig om mijn CV op een nette wijze te laten zien....kantel uw scherm!  "
            }
            else
            {
                     msg = "Sorry, ik heb minimaal 540 pixels screen breedte nodig om mijn CV op een nette wijze te laten zien....op dit toestel gaat dat niet lukken!  "
            }
            sorry.innerHTML = "<h2>" + msg + "</h2>";
        }
    }