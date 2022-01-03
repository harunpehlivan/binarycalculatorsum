var regex = /[^01]/g;
var Operator1 = $("input").eq(0);
var Operator2 = $("input").eq(1);
var Operator3 = $("input").eq(2);
var plus = $(".plus");
var Flag = true;

$(".sum").on("click", function() {
  if (Flag === true) {
    Operator3.val("");
    //lehrt das area
    plus.css("transform", "rotate(90deg)");

    var One = Operator1.val().replace(/ /g, "");
    var Two = Operator2.val().replace(/ /g, "");
    //entfernt die lehrzeichen
    var biglen = One.length > Two.length ? One.length : Two.length;
    var litlen = One.length > Two.length ? Two.length : One.length;

    if (!One && !Two) {
      alert("Felder dürfen nicht leer sein!");
    } else {
      if (One.match(regex) !== null || Two.match(regex) !== null) {
        alert("Binärzahlen bestehen nur aus 0 & 1!");
      } else {
        var Null = "";
        var Ergebnis = "";
        var Rest = 0;

        for (iSchleife = 0; iSchleife < biglen - litlen; iSchleife++) {
          Null += "0";
        }

        if (One.length > Two.length) {
          Two = Null + "" + Two;
        } else {
          One = Null + "" + One;
        }

        for (iSchleife = biglen - 1; iSchleife >= 0; iSchleife--) {
          var Summe = parseInt(One[iSchleife]) + parseInt(Two[iSchleife]);
          Summe = Summe + Rest;

          if (Summe >= 2) {
            Summe = 0;
            Rest = 1;
          } else {
            Rest = 0;
          }
          Ergebnis = Ergebnis + Summe;
        }

        Ergebnis = reverse(Ergebnis);

        if (Rest == 1) {
          Ergebnis = Rest + Ergebnis;
        }
        toArea(Ergebnis);
      }
    }
    Flag = false;
  } else {
    plus.css("transform", "rotate(-45deg)");
    Operator3.val("");
    Flag = true;
  }
});

function toArea(s) {
  Operator3.val(s);
}

function reverse(s) {
  return s
    .split("")
    .reverse()
    .join("");
}

$(".hire").click(function() {
  window.open("https://replit.com/@harunpehlivanitdew");
});