function previewImage(event) {
    var containerCarrusel = document.getElementById("containerCarrusel");
    var input = document.getElementById("FotosF");
    var html = "";
    if ('files' in input) {
        if (input.files.length > 1) {
            html += "<div id='carrusel' class='carousel slide border'>";
            html += "<div class='carousel-inner' role='listbox'>";
            html += "<ol class='carousel-indicators indicadoresCarrusel'>";
            for (var i = 0; i < input.files.length; i++) {
                var slideClass = "";
                if (i == 0) {
                    slideClass = "active";
                }
                html += "<li data-target='#carrusel' data-slide-to='" + i + "' class='" + slideClass + "'></li>"
            }
            html += "</ol>";
            for (var i = 0; i < input.files.length; i++) {
                html += (i == 0 ? "<div class='carousel-item active'>" : "<div class='carousel-item'>");
                html += "<img src='" + URL.createObjectURL(input.files[i]) + "' width='150' height='150' />";
                html += "</div>";
            }
            html += "</div>";
            html += "</div>";
        } else {
            html = "<img src='" + URL.createObjectURL(input.files[0]) + "' width='150' height='150' />";
        }
        containerCarrusel.innerHTML = html;
    }
}

function previewImageAdmin(event) {
    var containerCarrusel = document.getElementById("containerCarruselAdmin");
    var input = document.getElementById("FotosF");
    var html = "";
    if ('files' in input) {
        if (input.files.length > 1) {
            html += "<div id='carrusel' class='carousel slide border' style='height:150px; width:150px;'>";
            html += "<div class='carousel-inner' role='listbox'>";
            html += "<ol class='carousel-indicators indicadoresCarrusel'>";
            for (var i = 0; i < input.files.length; i++) {
                var slideClass = "";
                if (i == 0) {
                    slideClass = "active";
                }
                html += "<li data-target='#carrusel' data-slide-to='" + i + "' class='" + slideClass + "'></li>"
            }
            html += "</ol>";
            for (var i = 0; i < input.files.length; i++) {
                html += (i == 0 ? "<div class='carousel-item active'>" : "<div class='carousel-item'>");
                html += "<img src='" + URL.createObjectURL(input.files[i]) + "' width='150' height='150' />";
                html += "</div>";
            }
            html += "</div>";
            html += "</div>";
        } else {
            html = "<img src='" + URL.createObjectURL(input.files[0]) + "' width='150' height='150' />";
        }
        containerCarrusel.innerHTML = html;
    }
}


function addImage(event) {
    var inner = document.getElementById("inner");
    var ol = document.getElementById("ol");
    var olChilds = ol.children;
    var innerChilds = inner.children;

    if (inner != null) {

        if (innerChilds[1].id == 'noImg') {
            inner.removeChild(innerChilds[1]);
            ol.removeChild(olChilds[0]);
        }
        inner = document.getElementById("inner");
        ol = document.getElementById("ol");
        var input = document.getElementById("FotosF");
        var html = "";
        if ('files' in input) {
            if (input.files.length == 0) {
                
            } else {

                var cantHijos = inner.childElementCount-1;
                for (var i = cantHijos; i < input.files.length + cantHijos; i++) {
                    var slideClass = "";
                    olChilds = ol.children;
                    if (i == cantHijos && olChilds.length == 0) {
                        slideClass = "active";
                    }
                    var ids = "ol" + i;
                    html += "<li id='" + ids + "'data-target='#carruselImagenes' data-slide-to='" + i + "'></li>"
                }
                ol.innerHTML += html;
                html = ""
                innerChilds = inner.children;
                for (var i = 0 ; i < input.files.length; i++) {
                    var imgIds = "img" + (i + cantHijos);
                    var divImg = "<div id='" + imgIds + "'class='carousel-item' >";
                    if (i == 0 && innerChilds.length == 1) {
                        divImg = "<div id='" + imgIds + "' class='carousel-item active' >"
                    }
                    html += divImg;
                    html += "<img src='" + URL.createObjectURL(input.files[i]) + "' width='150' height='150' />";
                    html += "</div>";
                }
               

                inner.innerHTML += html;
            }
        }
    }
}

function delImage(event) {
    var inner = document.getElementById("inner");
    var ol = document.getElementById("ol");
   
    var borrarInner = document.getElementsByClassName("carousel-item active");
    var ids = borrarInner[0].id;
    var borrarId = "ol"+ids.substr(3);
    inner.removeChild(borrarInner[0]);
    var borrarOl = document.getElementById(borrarId);
    ol.removeChild(borrarOl);
    var olChilds = ol.children;
    var innerChilds = inner.children;
    for (var i = 0; i < olChilds.length; i++) {
        var olId = "ol" + i;
        var innerId = "img" + i
        var slide = "" + i;
        olChilds[i].id = olId;
        olChilds[i].setAttribute("data-slide-to", slide);
        innerChilds[i + 1].id = innerId;

    }
    if (olChilds.length == 0) {
        var idInner = "noOl"
        var html = "<li id='" + idInner + "'data-target='#carruselImagenes' data-slide-to='" + 0 + "'></li>"
        ol.innerHTML += html;
        html = "";
        html += "<div id='noImg' class='carousel-item'>"
        html += "<img src='~/Content/Images/fotoPredeterminada.png' width='150' height='150' />";
        html += "</div>";
        inner.innerHTML += html;    
    }
    olChilds[0].setAttribute("class", "active");
    innerChilds[1].setAttribute("class", "carousel-item active");
}

function showFile(event) {
    var x = document.getElementById("archivo");
    var files = x.files;
    if (files[0] != null) {
        document.getElementById("labelArchivo").innerHTML = files[0].name;
        document.getElementById("cancelar").style.display = "inline";
        document.getElementById("adjuntarArchivo").style.display = "none";
    }
}

function deleteFile() {
    if (document.getElementById("archivo").files.length != 0) {
        $('#archivo').val('')
        document.getElementById("cancelar").style.display = "none";
        document.getElementById("adjuntarArchivo").style.display = "inline";
        document.getElementById("labelArchivo").innerHTML = "No hay ningún archivo adjunto";
    }
}