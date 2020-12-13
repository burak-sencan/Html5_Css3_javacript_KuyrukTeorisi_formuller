// JavaScript Document
function myFunction() {
    var lambda = document.getElementById("lambda").value;
    var mu = document.getElementById("mu").value;
    //var n = document.getElementById("n").value;
    //var k = document.getElementById("k").value;
    
    var p = lambda/mu;
    
    
    //0.div temel hesaplamalar
    document.getElementById("mu_deger").innerHTML=mu;
    document.getElementById("lambda_deger").innerHTML=lambda;
    document.getElementById("p").innerHTML=p;
    
    
    
    //1.div L ile ilgili hesaplamalar
    var Lq = 0;
    var Lservis = p/(1+p);
    var L = Lq+Lservis;
    document.getElementById("Lq").innerHTML=Lq;
    document.getElementById("Ls").innerHTML=Lservis;
    document.getElementById("L").innerHTML=L;
    
    
    
    //2.div W ile ilgili hesaplamalar
    var Wq = 0;
    var Wservis = (1/mu)*60;
    var W = Wq+Wservis;
    var LambdaEff = lambda/(1+p);
    var LambdaKayip = lambda-LambdaEff;
    document.getElementById("Wq").innerHTML=Wq;
    document.getElementById("Wservis").innerHTML=Wservis;
    document.getElementById("W").innerHTML=W;
    document.getElementById("LambdaEff").innerHTML=LambdaEff;
    document.getElementById("LambdaKayip").innerHTML=LambdaKayip;
    
    
    
    //3.div Po Pn Pr ile ilgili olasilik hesaplamalari
    var Po = 1/(1+p);
    var P1 = p/(1+p);
    
    document.getElementById("Po").innerHTML=Po;
    document.getElementById("P1").innerHTML=P1;
    
    
    
}