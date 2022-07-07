function Average(){
  var sub1 = document.getElementById("nilai1").innerHTML;
  var sub2 = document.getElementById("nilai2").innerHTML;
  var sub3 = document.getElementById("nilai3").innerHTML;
  var sub4 = document.getElementById("nilai4").innerHTML;
  var sub5 = document.getElementById("nilai5").innerHTML;

    var total= sub1 + sub2 + sub3 + sub4 + sub5;
    var avg=total/5;
    document.getElementById("avg").innerHTML="Your Average marks are: "+avg;
  }
  
  
function Grade(){
   var sub1 = parseInt(document.getElementById("eng").value);
  var sub2 = parseInt(document.getElementById("mat").value);
  var sub3 = parseInt(document.getElementById("phy").value);
  var sub4 = parseInt(document.getElementById("chm").value);
  var sub5 = parseInt(document.getElementById("cmp").value);
    
   if(sub1>100 || sub2>100 || sub3>100 || sub4>100 || sub5>100 )
  {
    alert("Please Enter Marks in range of 100");
  }else {
     var total= sub1 + sub2 + sub3 + sub4 + sub5;
     var avg=total/5;
     
     if(avg>=80 && avg<=100)
     {
       document.getElementById("grade").innerHTML="You Got A+ Grade";
     }
     else if(avg>=75 && avg<=80)
     {
       document.getElementById("grade").innerHTML="You Got A+ Grade";
     }
     else if(avg>=70 && avg<=75)
     {
       document.getElementById("grade").innerHTML="You Got A Grade";
     }
     else if(avg>=65 && avg<=70)
     {
       document.getElementById("grade").innerHTML="You Got B Grade";
     }
     else if(avg>=50 && avg<=60)
     {
       document.getElementById("grade").innerHTML="You Got C Grade";
     }
     else if(avg>=40 && avg<=50)
     {
       document.getElementById("grade").innerHTML="You Got C Grade";
     }
     
     else {
       document.getElementById("grade").innerHTML="You Got F Grade";
     }
     
    
  }


}