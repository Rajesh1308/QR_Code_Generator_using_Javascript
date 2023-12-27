gcapi = "https://chart.googleapis.com/chart?cht=qr&chs="

function generate() {

    var myimage = document.getElementById("myimg")
    var mysize = document.getElementById("size").value
    var mytext = document.getElementById("inputbox").value
    var download_btn = document.querySelectorAll(".download-btn")


    if (mytext != "" && mysize == 100){
        myimage.src = gcapi + "100x100" + "&chl=" + mytext
    }
    else if (mytext != "" && mysize == 150){
        myimage.src = gcapi + "150x150" + "&chl=" + mytext
    }
    else if (mytext != "" && mysize == 200){
        myimage.src = gcapi + "200x200" + "&chl=" + mytext
    }
    else if (mytext != "" && mysize == 250){
        myimage.src = gcapi + "250x250" + "&chl=" + mytext
    }
    else {
        alert("Enter the text or URL")
    }


    var mybutton = document.createElement("button")
    mybutton.type = "button"
    mybutton.className = "btn btn-primary"
    downloadButton.append(mybutton)


    document.getElementById("inputbox").value = ""
}