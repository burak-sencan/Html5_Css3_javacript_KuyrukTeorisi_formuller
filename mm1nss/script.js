// JavaScript Document
function myFunction() {
    var lambda = parseInt(document.getElementById("lambda").value);
    var mu = parseInt(document.getElementById("mu").value);
    var n = document.getElementById("n").value;
    var k = document.getElementById("k").value;
    var N = parseInt(document.getElementById("N").value);
    
    
    var p = lambda/mu;
    
    
    document.getElementById("mu_deger").innerHTML=mu;
    document.getElementById("lambda_deger").innerHTML=lambda;
    document.getElementById("N_deger").innerHTML=N;
    document.getElementById("p").innerHTML=p;
    
    //L ile ilgili hesaplamalar
    var Lq = (Math.pow(p,2)*(1+Math.pow(p,N)*(N-1)-(N*Math.pow(p,N-1))))/((1-Math.pow(p,N+1))*(1-p));
    //var Lservis = (p-Math.pow(p,N+1))/(1-Math.pow(p,N+1));
    var PN = Math.pow(p,N)*(1-p)/(1-Math.pow(p,N+1));//gerekliydi
    var Lservis = p*(1-PN);
    var L = Lq+Lservis;
    document.getElementById("Lq").innerHTML=Lq;
    document.getElementById("Ls").innerHTML=Lservis;
    document.getElementById("L").innerHTML=L;
    
    
    //W ile ilgili hesaplamalar
    var Wq = ((lambda*(1+Math.pow(p,N)*(N-1)-N*Math.pow(p,N-1)))/(mu*(mu-lambda)*(1-Math.pow(p,N))))*60;
    var Wservis = (1/mu)*60;
    var W = Wq+Wservis;
    document.getElementById("Wq").innerHTML=Wq;
    document.getElementById("Ws").innerHTML=Wservis;
    document.getElementById("W").innerHTML=W;
    
    
    //3.div Po Pn Pr ile ilgili olasilik hesaplamalari
    var Po = (1-p)/(1-Math.pow(p,N+1));
    var Pn = Math.pow(p,n)*(1-p)/(1-Math.pow(p,N+1));
    var PN = Math.pow(p,N)*(1-p)/(1-Math.pow(p,N+1));
    var Pr = 1-(1-Math.pow(p,k))/(1-Math.pow(p,N+1));
    var LambdaEff = lambda*(1-PN);
    var LambdaKayip = lambda-LambdaEff;
    
    document.getElementById("Po").innerHTML=Po;
    document.getElementById("Pn").innerHTML=Pn;
    document.getElementById("PN").innerHTML=PN;
    document.getElementById("Pr").innerHTML=Pr;
    document.getElementById("LambdaEff").innerHTML=LambdaEff;
    document.getElementById("LambdaKayip").innerHTML=LambdaKayip;
    
    


}