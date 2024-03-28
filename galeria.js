//HTML

$("header").prepend("<div id=detail></div>");
$("header").append("<h1>Galería de Arte</h1>");
$("header").append("<h3 id=bienvenida></h3>");
$("header").append("<p>En esta galería podrás encontrar varias de las pinturas más relevantes de la historia del arte con información sobre la obra.")

$("#1").html('<img src="/img/1.jpg">');
$("#2").html('<img src="/img/2.jpg">');
$("#3").html('<img src="/img/3.jpg">');
$("#4").html('<img src="/img/4.jpg">');
$("#5").html('<img src="/img/5.png">');
$("#6").html('<img src="/img/6.jpg">');
$("#7").html('<img src="/img/7.jpg">');
$("#8").html('<img src="/img/8.jpg">');
$("#9").html('<img src="/img/9.jpg">');
$("#10").html('<img src="/img/10.jpg">');

$("#1").append("<h2>La Gioconda</h2>");
$("#1").append("<h5>Leonardo DaVinci (1503 - 1506)</h5>");
$("#1").append("<p><em>Renacimiento</em></p>");

$("#2").append("<h2>La Noche Estrellada</h2>");
$("#2").append("<h5>Vincent Van Gogh (1889)</h5>");
$("#2").append("<p><em>Postimpresionismo</em></p>");

$("#3").append("<h2>Guernica</h2>");
$("#3").append("<h5>Pablo Picasso (1937)</h5>");
$("#3").append("<p><em>Cubismo</em></p>");

$("#4").append("<h2>El Grito</h2>");
$("#4").append("<h5>Edvard Munch (1893)</h5>");
$("#4").append("<p><em>Expresionismo</em></p>");

$("#5").append("<h2>La Persistencia de la Memoria</h2>");
$("#5").append("<h5>Salvador Dalí (1931)</h5>");
$("#5").append("<p><em>Surrealismo</em></p>");

$("#6").append("<h2>Las Meninas</h2>");
$("#6").append("<h5>Diego Velázquez (1656)</h5>");
$("#6").append("<p><em>Barroco</em></p>");

$("#7").append("<h2>La Libertad Guiando al Pueblo</h2>");
$("#7").append("<h5>Eugène Delacroix (1830)</h5>");
$("#7").append("<p><em>Romanticismo</em></p>");

$("#8").append("<h2>La Creación de Adán</h2>");
$("#8").append("<h5>Miguel Ángel (1508 - 1512)</h5>");
$("#8").append("<p><em>Renacimiento</em></p>");

$("#9").append("<h2>Los Jugadores de Cartas</h2>");
$("#9").append("<h5>Paul Cézanne (1892)</h5>");
$("#9").append("<p><em>Postimpresionismo</em></p>");

$("#10").append("<h2>El Beso</h2>");
$("#10").append("<h5>Gustavo Klint (1907 - 1908)</h5>");
$("#10").append("<p><em>Simbolismo / Modernismo</em></p>");




//CSS

$("#bienvenida").css({
    "color":"white",
    "font-weight":"600"
})

$("#detail").css({
    "background":"white",
    "padding":"3px",
    "width":"30px"
})
$("header").css({
    "padding":"3em",
    "background":"black",
})

$("header p").css({
    "color":"white"
})

$("header h1").css({
    "color":"white",
    "font-weight":"lighter",
    "font-size":"3em",
})

$("body").css({
    "font-family":"sans-serif",
    "margin":"auto"
});

$(".container").css({
    "display":"flex",
    "flex-wrap":"wrap",
    "margin":"3em"
});

$(".card").css({
    "max-width":"300px",
    "height":"auto",
    "box-shadow":"0 0 10px 0 #C1CAD6",
    "border-radius":"20px",
    "margin":"1em",
    "padding":"20px"
});

$(".card").hover(
    function(){
        $(this).css({
            "transition":".3s ease",
            "transform":"scale(1.05)",
            "cursor":"pointer",
            "box-shadow":"0 0 20px 0 gray"
        })
    }, function(){
        $(this).css({
            "transform":"scale(1)",
            "box-shadow":"0 0 10px 0 #C1CAD6"
            
        });
    }
);


$(".card img").css({
    "max-width":"100%",
    "max-height":"100%",
    "object-fit":"cover",
    "border-radius":"20px 20px 0 0"
});

//JS

var nombre = prompt("¿Cual es tu nombre?");
$("#bienvenida").append("Bienvenido " + nombre);

$("#1").click(function(){
    swal.fire({
        imageUrl:"img/1.jpg",
        title:"La Gioconda",
        text:"Leonardo DaVinci (1503 - 1506)",
        padding:"3em"
    })
});
$("#2").click(function(){
    swal.fire({
        imageUrl:"img/2.jpg",
        title:"La Noche Estrellada",
        text:"Vincent Van Gogh (1889)",
        padding:"3em",
        width:1000,
    })
});
$("#3").click(function(){
    swal.fire({
        imageUrl:"img/3.jpg",
        title:"Guernica",
        text:"Pablo Picasso (1937)",
        padding:"3em",
        width:1200,
    })
});
$("#4").click(function(){
    swal.fire({
        imageUrl:"img/4.jpg",
        title:"El Grito",
        text:"Edvard Munch (1893)",
        padding:"3em",
        width:600
    })
});
$("#5").click(function(){
    swal.fire({
        imageUrl:"img/5.png",
        title:"La Persistencia de la Memoria",
        text:"Salvador Dalí (1931)",
        padding:"3em",
        width:1000
    })
});
$("#6").click(function(){
    swal.fire({
        imageUrl:"img/6.jpg",
        title:"Las Meninas",
        text:"Diego Velázquez (1656)",
        padding:"3em",
        width:600
    })
});
$("#7").click(function(){
    swal.fire({
        imageUrl:"img/7.jpg",
        title:"La Libertad Guiando al Pueblo",
        text:"Eugène Delacroix (1830)",
        padding:"3em",
        width:1000
    })
});
$("#8").click(function(){
    swal.fire({
        imageUrl:"img/8.jpg",
        title:"La Creación de Adán",
        text:"Miguel Ángel (1508 - 1512)",
        padding:"3em",
        width:1200,
    })
});
$("#9").click(function(){
    swal.fire({
        imageUrl:"img/9.jpg",
        title:"Los Jugadores de Cartas",
        text:"Paul Cézanne (1892)",
        padding:"3em",
        width:1200
    })
});
$("#10").click(function(){
    swal.fire({
        imageUrl:"img/10.jpg",
        title:"El Beso",
        text:"Gustavo Klint (1907 - 1908)",
        padding:"3em"
    })
});






