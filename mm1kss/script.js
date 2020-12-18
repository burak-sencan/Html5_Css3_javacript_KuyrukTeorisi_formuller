// JavaScript Document
function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}


function myFunction() {
    var lambda =parseInt( document.getElementById("lambda").value);
    var mu = parseInt(document.getElementById("mu").value);
    var K = parseInt(document.getElementById("K").value);
    var n = parseInt(document.getElementById("n").value);
    var k = parseInt(document.getElementById("k").value);
    var p = lambda/mu;
    
    
    //0.div temel hesaplamalar
    document.getElementById("mu_deger").innerHTML=mu;
    document.getElementById("lambda_deger").innerHTML=lambda;
    document.getElementById("p").innerHTML=p;
    document.getElementById("K_deger").innerHTML=K;

    
    
    
    
    //1.div Po Pn Pr ile ilgili olasilik hesaplamalari
    //Po hesaplaması
    var i = 0;
    var toplam = 0;
    var temp = 0;
    for(i=0; i<K;i ++){
        toplam += (Math.pow(p,i)/factorialize(i));
    }
    temp = Math.pow(p,K)/((K-p)*factorialize(K-1));//+nin sag tarafı
    var Po = 1/(toplam+temp);
    
    
    
    
    //Pn hesaplaması 
    if (n<K){
        var Pn = (Math.pow(p,n)/factorialize(n))*Po; 
    }
    else {
        var Pn = ((Math.pow(p,n))/(Math.pow(K,n-K)))*(Po/factorialize(K));
    }
    
    
    
    
    //Pr Hesaplaması
    if (k<K){
        var Pk = (Math.pow(p,k)/factorialize(k))*Po;
    }
    else {
        var Pk = ((Math.pow(p,k))/(Math.pow(K,k-K)))*(Po/factorialize(K));
    }
    
    var Pr = (k*Pk)/(k-p);
    
    document.getElementById("toplam").innerHTML=toplam;
    document.getElementById("temp").innerHTML=temp;
    document.getElementById("Po").innerHTML=Po;
    document.getElementById("Pn").innerHTML=Pn;
    //pr için förmül yazımı
    document.getElementById("k_deger").innerHTML=k;
    document.getElementById("Pk_deger").innerHTML=Pk;
    document.getElementById("k_deger2").innerHTML=k;
    document.getElementById("ro_deger").innerHTML=p;
    document.getElementById("Pr").innerHTML=Pr;
    
    
    
    
    //////// L hesaplamalari
    var Lq = (Po*Math.pow(p,K+1))/(Math.pow(K-p,2)*factorialize(K-1));
    var Lservis = p;
    var L = Lq + Lservis;
    document.getElementById("Lq").innerHTML=Lq;
    document.getElementById("Lservis").innerHTML=Lservis;
    document.getElementById("L").innerHTML=L;
        
    
    
    
    //////// W hesaplamalari
    var Wq = (Lq/lambda)*60;
    var Wservis = (1/mu)*60;
    var W =(Wq+Wservis);
    document.getElementById("Wq").innerHTML=Wq;
    document.getElementById("Wservis").innerHTML=Wservis;
    document.getElementById("W").innerHTML=W;
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
}