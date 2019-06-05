
 
    var count = 0;
    var start;
    var end;    

        

    function CreateTableFromJSON() {

        $.getJSON('./data/attendance.json', function(attendance_data){
           var start = count > 0 ? 5 * count : count;
        var end = start + 5;

        var strtable="";
        var i;
        var flag=0;
        $("#showData").empty();

        for (i = start; i < end; i++) {
          if(i>=attendance_data.length){
             flag=1;
             break;
           }
          if(flag==0){
            strtable+="<tr>";
            strtable+="<td class='label-cell'>"+attendance_data[i].Date+"</td>";
            strtable+="<td class='numeric-cell'>"+attendance_data[i].InTime+"</td>";
            strtable+="<td class='numeric-cell'>"+attendance_data[i].OutTime+"</td>";
            strtable+="</tr>";
            
            
          }
          console.log(attendance_data[i].Date);
           
        }

         if(strtable != ''){
                $("#showData").append(strtable);
             }
        if(flag==1){
             $('#showData').append("<tr><td colspan='3'>No Data</td></tr>");
             // document.getElementById("btnAjaxCall").blur();
             // document.getElementById("btnAjaxCall").style.backgroundColor = "red";
             document.getElementById("btnAjaxCall").style.display="none";

        }
         
           console.log(end);

           console.log(count);
           if(i<=attendance_data.length)
           {

            count++;
             document.getElementById("btnAjaxCallNext").style.display="block";

         
           }
           console.log(count);
        
  
        });

    }
 

    function CreateNextTableFromJSON() {

       $.getJSON('./data/attendance.json', function(attendance_data){
      console.log(count);
      if(count>1)
      {

       count--;
      document.getElementById("btnAjaxCall").style.display="block";

    
      }
      if(count==1){
          document.getElementById("btnAjaxCallNext").style.display="none";

      }
      console.log(count);
        

       

           start = count > 0 ? 5 * (count-1) : count;
           end = start + 5;

        var strtable="";
        var i;
        var flag=0;
        $("#showData").empty();

        for (i = start; i < end; i++) {
          if(i>=attendance_data.length){
             flag=1;
             break;
           }
          if(flag==0){
            strtable+="<tr>";
            strtable+="<td class='label-cell'>"+attendance_data[i].Date+"</td>";
            strtable+="<td class='numeric-cell'>"+attendance_data[i].InTime+"</td>";
            strtable+="<td class='numeric-cell'>"+attendance_data[i].OutTime+"</td>";
            strtable+="</tr>";
            
            
          }
          console.log(attendance_data[i].Date);
           
        }

         if(strtable != ''){
                $("#showData").append(strtable);
             }
        if(flag==1){
             $('#showData').append("<tr><td colspan='3'>No Data</td></tr>");
        }
         
        //  console.log(attendance_data.length);
           console.log(end);
           

    });
  }
 

