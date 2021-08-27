/* changing styles*/
function changeStyle(newStyle) {
    document.getElementById("style_no").setAttribute("href", newStyle);
}

/* fixed sticky navgitaion for style1.css*/
$(window).scroll(function () {
    if ($(window).scrollTop() >= 250) {
        $('nav').addClass('fixed-header');
    }
    else {
        $('nav').removeClass('fixed-header');
    }
});

/*image modal*/
function imageModal() {
    var modal = document.getElementById('myModal');
    // to all images -- note I'm using a class!
    var images = document.getElementsByClassName('foodImage');
    // the image in the modal
    var modalImg = document.getElementById("img01");
    // and the caption in the modal
    var captionText = document.getElementById("caption");
    // Go through all of the images with our custom class

    for (var i = 0; i < images.length; i++) {
        var img = images[i];
        // and attach our click listener for this image.
        img.onclick = function (evt) {
            console.log(evt);
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    }

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    }
}


/*dropdown1*/
/*currency conventor*/
function myConverter(curr, curr_value) {
    document.getElementById("currency_value1").innerHTML = " (" + curr+" "+ (40 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value2").innerHTML = " (" + curr+" " + (12 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value3").innerHTML = " (" + curr+" " + (15 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value4").innerHTML = " (" + curr+" " + (6 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value5").innerHTML = " (" + curr+" " + (15 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value6").innerHTML = " (" + curr+" " + (30 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value7").innerHTML = " (" + curr+" " + (20 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value8").innerHTML = " (" + curr+" " + (20 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value9").innerHTML = " (" + curr+" " + (6 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value10").innerHTML = " (" + curr+" " + (10 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value11").innerHTML = " (" + curr+" " + (32 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value12").innerHTML = " (" + curr+" " + (15 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value13").innerHTML = " (" + curr+" " + (20 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value14").innerHTML = " (" + curr+" " + (24 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value15").innerHTML = " (" + curr+" " + (15 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value16").innerHTML = " (" + curr+" " + (25 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value17").innerHTML = " (" + curr+" " + (42 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value18").innerHTML = " (" + curr+" " + (16 * curr_value).toFixed(2) + ")";
    document.getElementById("currency_value19").innerHTML = " (" + curr+" " + (22 * curr_value).toFixed(2) + ")";
}

/*progress bar*/
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

/*tab*/
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "grid"; /*instead of "block"*/
    evt.currentTarget.className += " active";
}

/*sorting $$$←$*/
function mySort() {
    sortOneTabContent('#Drinks');
    sortOneTabContent('#Dessert');
    sortOneTabContent('#Appetizers-MainCourse');
}
function sortOneTabContent(div_id) {
    console.log(div_id);
    container = document.querySelector(div_id); // select the container
    a = Array.prototype.slice.call(container.children); // slice it into array
    // then do one of the a.sort()
    a.sort( function(i, j) {
        var iprice = i.querySelector('.price');
        var jprice = j.querySelector('.price');
        
        if (parseInt(iprice.innerText) < parseInt(jprice.innerText)) {
            return -1;
        } else {
            return 1;
        }
    });
    container.innerText = "" // remove the contents
    for (var i = 0; i < a.length; i++) { // update the container with the sorted nodes
        container.appendChild(a[i]);
    }
}

/*sorting $←$$$*/
function mySort2() {
    sortOneTabContent2('#Drinks');
    sortOneTabContent2('#Dessert');
    sortOneTabContent2('#Appetizers-MainCourse');
}
function sortOneTabContent2(div_id) {
    console.log(div_id);
    container = document.querySelector(div_id); // select the container
    a = Array.prototype.slice.call(container.children); // slice it into array
    // then do one of the a.sort()
    a.sort( function(i, j) {
        var iprice = i.querySelector('.price');
        var jprice = j.querySelector('.price');
        
        if (parseInt(iprice.innerText) > parseInt(jprice.innerText)) {
            return -1;
        } else {
            return 1;
        }
    });
    container.innerText = "" // remove the contents
    for (var i = 0; i < a.length; i++) { // update the container with the sorted nodes
        container.appendChild(a[i]);
    }
}

/*sorting A→Z*/
function mySort3() {
    sortOneTabContent3('#Drinks');
    sortOneTabContent3('#Dessert');
    sortOneTabContent3('#Appetizers-MainCourse');
}
function sortOneTabContent3(div_id) {
    console.log(div_id);
    container = document.querySelector(div_id); // select the container
    a = Array.prototype.slice.call(container.children); // slice it into array
    // then do one of the a.sort()
    a.sort( function(i, j) {
        if (i.textContent < j.textContent) {
            return -1;
        } else {
            return 1;
        }
    });
    
    container.innerText = "" // remove the contents
    for (var i = 0; i < a.length; i++) { // update the container with the sorted nodes
        container.appendChild(a[i]);
    }
}

/*sorting Z→A*/
function mySort4() {
    sortOneTabContent4('#Drinks');
    sortOneTabContent4('#Dessert');
    sortOneTabContent4('#Appetizers-MainCourse');
}
function sortOneTabContent4(div_id) {
    console.log(div_id);
    container = document.querySelector(div_id); // select the container
    a = Array.prototype.slice.call(container.children); // slice it into array
    // then do one of the a.sort()
    a.sort( function(i, j) {
        if (i.textContent > j.textContent) {
            return -1;
        } else {
            return 1;
        }
    });
    
    container.innerText = "" // remove the contents
    for (var i = 0; i < a.length; i++) { // update the container with the sorted nodes
        container.appendChild(a[i]);
    }
}

function initAccordion() {
    var acc = document.getElementsByClassName("accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }
}

function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

function initHoverAudio() {
    var beepOne = $("#beep-one")[0];
    $("#myDropdown a")
    .mouseenter(function () {
        beepOne.play();
    });

    $("#myDropdown2 a")
    .mouseenter(function () {
        beepOne.play();
    });

    $("#myDropdown3 a")
    .mouseenter(function () {
        beepOne.play();
    });
}

// Get the element with id="defaultOpen" and click on it
window.onload = function (e) {
    document.getElementById("defaultOpen").click();
    imageModal();
    initAccordion();
    initHoverAudio();
}