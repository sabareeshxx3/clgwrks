
function formValidation()
{
      var btech =diploma=hs=sslc="";
        var fname = document.registration.firstname.value;
        var lname = document.registration.lastname.value;
        var address = document.registration.address.value;
        var contactno = document.registration.contact.value;
        var g=document.registration.gender.value;
        var btech=document.registration.check1;
        var diploma=document.registration.check2;
        var hs=document.registration.check3;
        var sslc=document.registration.check4;
        var nationality = document.registration.nationality.selectedIndex;
        var dob= document.registration.dob.value;
        var letters = /^[A-Za-z]+$/;
        if(fname.length == 0)
        {
          alert("Name is required");
          document.registration.firstname.focus();
          return false;
        }
        else if(!fname.match(letters))
          {
            alert("Should contain alphabets");
            document.registration.firstname.focus();
            return false;
          }


        //validating last Name
        else if(lname.length == 0)
        {
          alert("Last Name is required");
          document.registration.lastname.focus();
          return false;
        }
        else if(!lname.match(letters))
          {
            alert("Should contain alphabets");
            document.registration.lastname.focus();
            return false;
          }

        //validating address
      else if(address.length == 0)
        {
          alert("Address is required");
          document.registration.address.focus();
          return false;
        }
        //validating contact Number
      else if(contactno.length == 0 || contactno.length >10 || contactno.length <10)
        {
          alert("Contact No is required or Should contain 10 digits");
          document.registration.contact.focus();
          return false;
        }
      //validating gender
        else if(g == "")
        {
          alert("gender not selected");
          return false;
        }
        //validating qualifications
          else if(!btech.checked && !diploma.checked && !hs.checked && !sslc.checked)
          {
            alert("Select qualifications");
            return false;
          }
          //validating nationality
            else if(nationality == 0)
            {
              alert("Select Nationality");
              return false;
            }
          //validating Date of Birth
          else if(dob == "")
          {
            alert("Date of birth not selected");
            return false;
          }
        else {
          alert("Successfully registered");
          return true;
        }
    }