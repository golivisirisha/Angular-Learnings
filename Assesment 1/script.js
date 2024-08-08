function showSection(sectionId, buttonId, light) {
    // Reset all buttons to default outline styles and remove 'active' class
    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }

    // Add 'active' class to the clicked button
    var selectedButton = document.getElementById(buttonId);
    if (selectedButton) {
      selectedButton.classList.add('active');
    }

    // Hide all sections
    var sections = document.getElementsByClassName('section');
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.display = 'none';
    }

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
      selectedSection.style.display = 'block';
    }




    document.querySelectorAll('.light').forEach(function(lightElement) {
     lightElement.classList.remove('active');
 });


 var lightElement = document.getElementById(light + 'Light');
 lightElement.classList.add('active');
  }