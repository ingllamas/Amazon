"use strict";var fileInput=document.getElementById("file"),dropZone=document.getElementById("drop-zone");dropZone.addEventListener("click",function(){fileInput.click()}),dropZone.addEventListener("dragover",function(e){e.preventDefault(),dropZone.classList.add("drop-zone--active")}),dropZone.addEventListener("dragleave",function(e){e.preventDefault(),dropZone.classList.remove("drop-zone--active")}),dropZone.addEventListener("drop",function(e){e.preventDefault(),fileInput.files=e.dataTransfer.files}),fileInput.addEventListener("change",function(e){console.log(fileInput.files)});