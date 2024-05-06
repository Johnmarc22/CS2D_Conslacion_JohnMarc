let Name ='John Marc Consolacion';  
 let Address ='POblacio,Quirino, Ilocos Sur';  
 let Age = 21;  
 let classrole='Teacher';  
  
 const course = "BSCS";  
  
 if (course === "BSCS"){  
  
     if (classrole === "Officer"){  
  
         console.log("Officer Detected.");  
  
     } else if (classrole == "Student"){  
         var password = "jmacbscs";  
         if (password >=26){  
  
             console.log("Student Name:"+ Name);  
  
             for (var i = 0; i < Age; i++){  
                 console.log("Address:"+Address);  
              }  
         } else {  
  
             console.log("Access denied.");  
         }  
     } else if (classrole == "Teacher"){  
  
         console.log("Teacher class detected.");  
     } else {  
  
         console.log("Invalid Class Role.");  
     }  
 } else if (course =="BAEL"){  
     console.log("You are in BAEL course."); 
 } else if  (course == "BSM") {  
     console.log("You are in BSM course."); 
 } else {  
     console.log("Invalid course.");  
 }