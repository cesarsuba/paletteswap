window.onload = function() {
    Random_1();
    Random_2();
    Random_3();
    Random_4();
    Random_5();
    start();
};  
var Tempo1="Ok";
var Tempo2="Ok";
var Tempo3="Ok";
var Tempo4="Ok";
var Tempo5="Ok";
var count;
     function start(){
         document.onkeydown = function(event) {
              if(event.keyCode == '32') {
                    Random_1();
                    Random_2();
                    Random_3();
                    Random_4();
                    Random_5();
                 return false;
              }
             };
     }
function tag(){
    alert("Created By Cesar Allen M Suba");
}
function Enter(){
         document.onkeydown = function(event) {
              if(event.keyCode == '13') {
                   document.getElementById(e.id).select(this); 
                 return false;
              }
             };
     }
/*$(document).ready(function(){
    $("#imgClickAndChange").click(function(){
        $("#imgClickAndChange").toggle();
    });   
});*/    
        var a;
        var trash;
 var controll;
 var container_form;
 var form_input;
        function pointer(e){
            switch(e.id){
                case "first_caption":
                    if(Tempo1=="Ok"){
                     controll="first_box";
                     container_form="first_form";
                     form_input="first_input";
                    break;
                    }
                 case "second_caption":
                    if(Tempo2=="Ok"){
                     controll="second_box";
                     container_form="second_form";
                     form_input="second_input";
                     break;
                    }
                 case "third_caption":
                     if(Tempo3=="Ok"){
                     controll="third_box";
                     container_form="third_form";
                     form_input="third_input";
                     break;
                     }
                 case "fourth_caption":
                     if(Tempo4=="Ok"){
                     controll="fourth_box";
                     container_form="fourth_form";
                     form_input="fourth_input"; 
                     break;
                     }
                 case "fifth_caption":
                     if(Tempo5=="Ok"){
                     controll="fifth_box";
                     container_form="fifth_form";
                     form_input="fifth_input";
                     break;
                     }
            }
              a=document.getElementById(container_form);
                trash=a.elements[form_input].value;
                document.getElementById(e.id).select(this);  
              document.getElementById(controll).onkeydown = function(event) {
                if (event.keyCode == 13) {
                    document.getElementById(controll).style.backgroundColor=trash;
                   // alert("You have clicked button id = "+e.id+" "+controll+" ");
                    return false;
                }
            }
        }
        function clickMe(e){
          //alert("You have clicked button id = "+e.id+"");
           // document.getElementById(e.id).innerHTML="#000000";
             
           // document.getElementById("first_box").style.backgroundColor=trash;
            var cmd = document.getElementById("first_box");
            cmd.addEventListener("keydown", function (d) {
            if (d.keyCode === '13') {  //checks whether the pressed key is "Enter"
                //var a=document.getElementById("the_form");
               //var trash=a.elements["input"].value;
                 //document.getElementById("first_box").style.backgroundColor=trash;
                //alert("You have clicked button id = "+e.id+" ");
               //alert("You have clicked button id = "+e.id+" "+trash+" ");
                document.getElementById("first_box").style.backgroundColor=trash;
                 return false;
            }
        });
        }
        var the_array=[29];
        var Container=[29];
        var box1;
        var box2;
        var box3;
        var box4;
        var box5;
        var count;
function changeImage_1(img){
             var imgfile=img.src.split('/').pop();
            if(Tempo1=="No"){
               img.src="/images/unlock.png"; 
                Tempo1="Ok";
               // alert(document.getElementById(img.id).src);
            }  
            else if(Tempo1=="Ok"){
                img.src="/images/lock.png";
             //  alert(img.id);
             //   start(img);
                Tempo1="No";
//alert(document.getElementById(img.id).src);
            }
        }
 function changeImage_2(img){
            var imgfile=img.src.split('/').pop();
            if(Tempo2=="No"){
                img.src="/images/unlock.png";  
                Tempo2="Ok";
            }  
            else if(Tempo2=="Ok"){
                 img.src="/images/lock.png";
               //   alert(img.id);
               //  start(img);
                Tempo2="No";
            }
        }
 function changeImage_3(img){
             var imgfile=img.src.split('/').pop();
            if(Tempo3=="No"){
                img.src="/images/unlock.png"; 
                Tempo3="Ok";
            }  
             else if(Tempo3=="Ok"){
                 img.src="/images/lock.png";
              //  clickMe(img);
                Tempo3="No";
            } 
        }
 function changeImage_4(img){
             var imgfile=img.src.split('/').pop();
            if(Tempo4=="No"){
                img.src="/images/unlock.png"; 
                Tempo4="Ok";
            }  
             else if(Tempo4=="Ok"){
                img.src="/images/lock.png";
               // clickMe(img);
                Tempo4="No";
            }  
        }
 function changeImage_5(img){
             var imgfile=img.src.split('/').pop();
            if(Tempo5=="No"){
                img.src="/images/unlock.png"; 
                Tempo5="Ok";
            }  
            else if(Tempo5=="Ok"){
                 img.src="/images/lock.png";
              //  clickMe(img);
                Tempo5="No";
            }  
        }
        function Random_1(){
            the_array[0]=Math.floor(Math.random() * 15);
            the_array[1]=Math.floor(Math.random() * 15);
            the_array[2]=Math.floor(Math.random() * 15);
            the_array[3]=Math.floor(Math.random() * 15);
            the_array[4]=Math.floor(Math.random() * 15);
            the_array[5]=Math.floor(Math.random() * 15);
            switchcase();
    }
        function Random_2(){
            the_array[6]=Math.floor(Math.random() * 15);
            the_array[7]=Math.floor(Math.random() * 15);
            the_array[8]=Math.floor(Math.random() * 15);
            the_array[9]=Math.floor(Math.random() * 15);
            the_array[10]=Math.floor(Math.random() * 15);
            the_array[11]=Math.floor(Math.random() * 15);
            switchcase();
        }
        function Random_3(){
            the_array[12]=Math.floor(Math.random() * 15);
            the_array[13]=Math.floor(Math.random() * 15);
            the_array[14]=Math.floor(Math.random() * 15);
            the_array[15]=Math.floor(Math.random() * 15);
            the_array[16]=Math.floor(Math.random() * 15);
            the_array[17]=Math.floor(Math.random() * 15);
            switchcase();
        }
        function Random_4(){
            the_array[18]=Math.floor(Math.random() * 15);
            the_array[19]=Math.floor(Math.random() * 15);
            the_array[20]=Math.floor(Math.random() * 15);
            the_array[21]=Math.floor(Math.random() * 15);
            the_array[22]=Math.floor(Math.random() * 15);
            the_array[23]=Math.floor(Math.random() * 15);
            switchcase();
        }
        function Random_5(){
            the_array[24]=Math.floor(Math.random() * 15);
            the_array[25]=Math.floor(Math.random() * 15);
            the_array[26]=Math.floor(Math.random() * 15);
            the_array[27]=Math.floor(Math.random() * 15);
            the_array[28]=Math.floor(Math.random() * 15);
            the_array[29]=Math.floor(Math.random() * 15);
            switchcase();   
        }
        function switchcase(){
            for(count=0;count<=29;count++){
        switch (the_array[count]) {
        case 0:
            Container[count]="0";
            break;
        case 1:
            Container[count]="1";
            break;
        case 2:
            Container[count]="2";
            break;
        case 3:
            Container[count]="3";
            break;
        case 4:
            Container[count]="4";
            break;
        case 5:
            Container[count]="5";
            break;
        case  6:
            Container[count]="6";
            break;
        case  7:
            Container[count]="7";  
            break;
        case  8:
            Container[count]="8";
            break;
        case  9:
            Container[count]="9";
            break;
        case  10:
            Container[count]="A";
            break;
        case  11:
            Container[count]="B";
            break;
        case  12:
            Container[count]="C";
            break;
        case  13:
            Container[count]="D";
            break;
        case  14:
            Container[count]="E";
            break;
        case  15:
            Container[count]="F";
            break;
            }   
           show_box();
}
            function show_box(){
                if(Tempo1=="Ok"){
                    box1=Container[0]+(Container[1])+(Container[2])+(Container[3])+(Container[4])+(Container[5]);
                }
                if(Tempo2=="Ok"){
                    box2=Container[6]+(Container[7])+(Container[8])+(Container[9])+(Container[10])+(Container[11]);
                }
                if(Tempo3=="Ok"){
                     box3=Container[12]+(Container[13])+(Container[14])+(Container[15])+(Container[16])+(Container[17]);
                }
                if(Tempo4=="Ok"){
                    box4=Container[18]+(Container[19])+(Container[20])+(Container[21])+(Container[22])+(Container[23]);
                }
                if(Tempo5=="Ok"){
                     box5=Container[24]+(Container[25])+(Container[26])+(Container[27])+(Container[28])+(Container[29]);
                }
                join();
            }
            function join(){
                document.getElementById("first_box").style.backgroundColor =box1;
                document.getElementById("first_caption").value ="#"+box1;
                document.getElementById("second_box").style.backgroundColor =box2;
                document.getElementById("second_caption").value ="#"+box2;
                document.getElementById("third_box").style.backgroundColor =box3;
                document.getElementById("third_caption").value ="#"+box3;
                document.getElementById("fourth_box").style.backgroundColor =box4;
                document.getElementById("fourth_caption").value ="#"+box4;
                document.getElementById("fifth_box").style.backgroundColor =box5;
                document.getElementById("fifth_caption").value ="#"+box5;
            }
            
        }