
window.onload = function () {


    let cursor =  document.querySelector(".cur");

    document.addEventListener("mousemove", function jkl(e){

      cursor.style.left = e.pageX + "px";
      cursor.style.top = e.pageY + "px";

    });

























    let btn = document.querySelector(".enq");

    let f = document.querySelector("form");

    btn.addEventListener("click", function () {

        f.style.transform = "scale(1)";

    });



    let sub = document.querySelectorAll("input")[3];

    let a = document.querySelectorAll("input")[0];
    let b = document.querySelectorAll("input")[1];
    let c = document.querySelectorAll("input")[2];
    let d = document.querySelector("textarea");

    let con = document.querySelector(".content");

    let pa = document.querySelector("#nm");
    let pb = document.querySelector("#em");
    let pc = document.querySelector("#mob");
    let pd = document.querySelector("#msg");

    sub.addEventListener("click", function xyz() {

        let naam = a.value;
        let mail = b.value;
        let phn = c.value;
        let msg = d.value;

        var numb = /^[A-Za-z ]+$/;


        var chmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;


        var chphn = /^[0-9]{10}$/;


        var chmsg = /^[a-zA-Z0-9 ._!\?-]{10,100}$/;





        if (naam == "") {
            alert("Please Fill out the name field");
        }
        else if (mail == "") {
            alert("Please Fill out the mail field");
        }
        else if (phn == "") {
            alert("Please Fill out the phone field");
        }
        else if (msg == "") {
            alert("Please Fill out the message field");
        }
        else if(naam.match(numb) && mail.match(chmail) && phn.match(chphn) && msg.match(chmsg)){

            con.style.transform = "scale(1)";
            pa.innerText = naam;
            pb.innerText = mail;
            pc.innerText = phn;
            pd.innerText = msg;
        }
        else {
            alert("Please Enter Valid Information");
        }

    });


    let ex = document.querySelector(".exit");

    ex.addEventListener("click", function () {

        con.style.transform = "scale(0)";

        a.value = "";
        b.value = "";
        c.value = "";
        d.value = "";


    });



    let cl = document.querySelector(".close");

    cl.addEventListener("click", function () {

        f.style.transform = "scale(0)";

        a.value = "";
        b.value = "";
        c.value = "";
        d.value = "";


    });


}

