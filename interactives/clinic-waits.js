// Only run AFTER interactive has been inserted into DOM
function initClinicWaitTimesInteractive() {
    const data = [
        {
          city: "Aberdeen",
          months: 39,
          yearsFormatted: "3.3 years",
          comment: ""
        },
        {
          city: "Belfast",
          months: 85,
          yearsFormatted: "7.1 years",
          comment: ""
        },
        {
          city: "Cardiff",
          months: 20,
          yearsFormatted: "1.7 years",
          comment: ""
        },
        {
          city: "Edinburgh",
          months: 15,
          yearsFormatted: "1.3 years",
          comment: ""
        },
        {
          city: "Exeter",
          months: 99,
          yearsFormatted: "8.3 years",
          comment: ""
        },
        {
          city: "Glasgow",
          months: 71,
          yearsFormatted: "5.9 years",
          comment: ""
        },
        {
          city: "Inverness",
          months: 9,
          yearsFormatted: "0.8 years",
          comment: ""
        },
        {
          city: "East of England",
          months: null,
          yearsFormatted: "9 months - 8.3 years",
          comment: "There is no data on how long you will have to wait at this particular clinic. Wait times at other clinics in the UK range from 9 months to over 8 years."
        },
        {
          city: "Leeds",
          months: 64,
          yearsFormatted: "5.3 years",
          comment: ""
        },
        {
          city: "London",
          months: 79,
          yearsFormatted: "6.6 years",
          comment: ""
        },
        {
          city: "Manchester",
          months: 22,
          yearsFormatted: "1.8 years",
          comment: ""
        },
        {
          city: "Merseyside",
          months: null,
          yearsFormatted: "9 months - 8.3 years",
          comment: "There is no data on how long you will have to wait at this particular clinic. Wait times at other clinics in the UK range from 9 months to over 8 years."
        },
        {
          city: "Newcastle",
          months: 75,
          yearsFormatted: "6.3 years",
          comment: ""
        },
        {
          city: "Northamptonshire",
          months: 63,
          yearsFormatted: "5.3 years",
          comment: ""
        },
        {
          city: "Nottinghamshire",
          months: 26,
          yearsFormatted: "2.2 years",
          comment: ""
        },
        {
          city: "Sheffield",
          months: 65,
          yearsFormatted: "5.4 years",
          comment: ""
        },
        {
          city: "Sussex",
          months: 40,
          yearsFormatted: "3.3 years",
          comment: ""
        }
      ];
  
    const intro = document.getElementById("intro");
    const selector = document.getElementById("locationSelector");
    const results = document.getElementById("results");
  
    // When "Find out" button is clicked... //
    document.getElementById("startBtn").onclick = () => {
      intro.classList.add("hidden"); // Hide the intro/start section
      selector.classList.remove("hidden"); // Show the location selector section
  
      const buttonContainer = document.getElementById("cityButtons"); 
      buttonContainer.innerHTML = ""; // Clear any previous buttons (in case of repeat)

      // Create button for each clinic location (loops)
      data.forEach(clinic => { 
        const btn = document.createElement("button"); // Create a new button element
        btn.className = "uk-button uk-button-default uk-margin-small-right uk-margin-small-bottom"; // UIkit styling
        btn.textContent = clinic.city; // Label button w/ city or region
        btn.onclick = () => showWaitTime(clinic); // When clicked, show results for that clinic
        buttonContainer.appendChild(btn); // Add button to container
      }); //end of location buttons

    }; // end of "find out" button //
  
    // Function to show wait time info for selected location/clinic //
    function showWaitTime(clinic) {
        selector.classList.add("hidden"); // Hide location selector
        results.classList.remove("hidden"); // Show the results section
    
        const months = clinic.months; // months - from array
        const yearsFormatted = clinic.yearsFormatted; // years - from array

        document.getElementById("monthsDisplay").textContent =
            months === null ? "Unknown" : `${months} months`;
        document.getElementById("yearsDisplay").textContent = `(${yearsFormatted})`;
    
        // Generate visual calendar icons to represent each month //
        const calendar = document.getElementById("calendarIcons");
        calendar.innerHTML = ""; // Clear previous icons
        for (let i = 0; i < months; i++) {
            const icon = document.createElement("span");
            icon.className = "uk-icon uk-margin-small-right"; // UIkit spacing and icon style
            icon.innerHTML = "<span uk-icon='icon: calendar'></span>"; // Insert UIkit calendar icon
            calendar.appendChild(icon);
        }
        
        // Show comment //
        document.getElementById("waitComment").textContent = clinic.comment;

        //show back button //
        document.getElementById("backBtn").onclick = () => {
            results.classList.add("hidden");          // Hide results section
            selector.classList.remove("hidden");      // Show location selector again
          };
      
    } // end of function to show wait time
  

  }