$(document).ready(function () {
  $("#form-btn").click(function () {
      var name = $("#name").val();
      var phone_no = $("#phone_no").val();

      // Check if fields are empty
      if (name == "" || phone_no == "") {
          alert("All fields are required!");
          return false;
      }

      // AJAX request
      $.ajax({
          url: "send_mail.php",
          type: "POST",
          data: {
              name: name,
              phone_no: phone_no
          },
          dataType: "json",
          success: function (response) {
              if (response.trim() === "success") {
                 
                 
              } 
          }
      });

      const link = document.createElement("a");
      link.href = "images/Brochure.pdf"; // Replace with the correct path to your PDF file
      link.download = "Brochure.pdf"; // This will prompt the user to save the file as "Brochure.pdf"
      link.click();
  });
});

$(document).ready(function(){
  // When an element with the 'trigger-modal' class is clicked
  $(".trigger-modal").click(function(){
      // Show the modal with ID 'Brochure'
      $('#Brochure').modal('show');
  });
});

