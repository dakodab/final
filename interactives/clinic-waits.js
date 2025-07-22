// Only run AFTER interactive has been inserted into DOM
function initClinicWaitTimesInteractive() {
    const data = [
        {
          city: "Aberdeen",
          months: 39,
          yearsFormatted: "3.3 years",
          clinicAddress: "Elmwood Hospital, Ashgrove Road Aberdeen, AB25 3BW",
          lat: 57.158412,
          lng: -2.119140, 
          clinicName: "Grampian Gender Identity Clinic",
          clinicLink: "https://www.ngicns.scot.nhs.uk/public/gender-identity-clinics/",
          comment: ""
        },

        {
          city: "Belfast",
          months: 85,
          yearsFormatted: "7.1 years",
          clinicAddress: "Unit 15, Shimna House, Knockbracken Healthcare Park, Saintfield Road, Belfast, BT8 8BH",
          lat: 54.508499,
          lng: -6.032643, 
          clinicName: "Brackenburn Clinic Gender Identity Service",
          clinicLink: "https://belfasttrust.hscni.net/service/brackenburn-clinic/",          
          comment: ""
        },
        {
          city: "Cardiff",
          months: 20,
          yearsFormatted: "1.7 years",
          clinicAddress: "St Davids Hospital, Cowbridge Rd E, Cardiff CF11 9XB",
          lat: 51.481382,
          lng: -3.190537, 
          clinicName: "Welsh Gender Service",
          clinicLink: "https://cavuhb.nhs.wales/our-services/welsh-gender-service/",
          comment: ""
        },
        {
          city: "Edinburgh",
          months: 15,
          yearsFormatted: "1.3 years",
          clinicAddress: "2A Chalmers Street, Edinburgh, EH3 9ES",
          lat: 55.943658,
          lng: -3.197393, 
          clinicName: "The Edinburgh Chalmers Gender Identity Clinic",
          clinicLink: "https://www.lothiansexualhealth.scot/gender-identity-clinic/",
          comment: ""
        },
        {
          city: "Exeter",
          months: 99,
          yearsFormatted: "8.3 years",
          clinicAddress: "The Laurels, 11 -15 Dix's Field, Exeter, EX1 1QA",
          lat: 50.724296,
          lng: -3.525765, 
          clinicName: "Devon Partnership NHS Trust West of England Specialist Gender Identity Clinic",
          clinicLink: "http://www.dpt.nhs.uk/The-Laurels.372.0.html",
          comment: ""
        },
        {
          city: "Glasgow",
          months: 71,
          yearsFormatted: "5.9 years",
          clinicAddress: "6 Sandyford Place, Glasgow, G3 7NB",
          lat: 55.865652,
          lng: -4.278733, 
          clinicName: "The Sandyford NHS Gender Identity Clinic",
          clinicLink: "https://www.sandyford.scot/sexual-health-services/gender-identity-service/",
          comment: ""
        },
        {
          city: "Inverness",
          months: 9,
          yearsFormatted: "0.8 years",
          clinicAddress: "Highland Gender Identity Clinic Highland Sexual Health, Royal Northern Infirmary, Ness Walk, Inverness, IV3 5SF",
          lat: 57.470632,
          lng: -4.231571, 
          clinicName: "Highland Gender Identity Service",
          clinicLink: "https://highlandsexualhealth.co.uk/gender-identity",
          comment: ""
        },
        {
          city: "East of England",
          months: null,
          yearsFormatted: "9 months - 8.3 years",
          clinicAddress: "12 Broad Street, Nottingham, Nottinghamshire, NG1 3AL",
          lat: 52.954104,
          lng: -1.143785, 
          clinicName: "East of England Gender Service",
          clinicLink: "https://ncth.nhs.uk/east-of-england-service",
          comment: "There is no data on how lng you will have to wait at this particular clinic. Wait times at other clinics in the UK range from 9 months to over 8 years."
        },
        {
          city: "Leeds",
          months: 64,
          yearsFormatted: "5.3 years",
          clinicAddress: "The Newsam Centre, Seacroft Hospital, York Road, Leeds, LS14 6WB",
          lat: 53.804955,
          lng: -1.471491, 
          clinicName: "Leeds and York Partnership NHS Foundation Trust Gender Identity Service",
          clinicLink: "https://www.leedsandyorkpft.nhs.uk/our-services/gender-identity-service/",
          comment: ""
        },
        {
          city: "London",
          months: 79,
          yearsFormatted: "6.6 years",
          clinicAddress: "Tavistock Centre, 120 Belsize Lane, London, NW3 5BA",
          lat: 51.546901,
          lng: -0.175418, 
          clinicName: "The Tavistock and Portman NHS Foundation Trust: Gender Identity Clinic for Adults",
          clinicLink: "https://gic.nhs.uk/",
          comment: ""
        },
        {
          city: "Manchester",
          months: 22,
          yearsFormatted: "1.8 years",
          clinicAddress: "New Century House, Progress Way, Denton, Manchester M34 2GP",
          lat: 53.450595,
          lng: -2.133972, 
          clinicName: "Indigo Gender Service",
          clinicLink: "https://indigogenderservice.uk/",
          comment: ""
        },
        {
          city: "Merseyside",
          months: null,
          yearsFormatted: "9 months - 8.3 years",
          clinicAddress: "151 Dale Street, Liverpool, L2 2AH",
          lat: 53.4101412,
          lng: -2.9837689, 
          clinicName: "Transcend",
          clinicLink: "https://www.merseycare.nhs.uk/our-services/halton/transcend",
          comment: "There is no data on how lng you will have to wait at this particular clinic. Wait times at other clinics in the UK range from 9 months to over 8 years."
        },
        {
          city: "Newcastle",
          months: 75,
          yearsFormatted: "6.3 years",
          clinicAddress: "St. Nicholas Hospital Jubilee Road Gosforth Newcastle upon Tyne NE3 3XT",
          lat: 55.006495,
          lng: -1.633115, 
          clinicName: "Northumberland, Tyne and Wear NHS Foundation Trust Northern Region Gender Dysphoria Service",
          clinicLink: "https://www.cntw.nhs.uk/services/northern-region-gender-dysphoria-service-specialist-service-walkergate-park/",
          comment: ""
        },
        {
          city: "Northamptonshire",
          months: 63,
          yearsFormatted: "5.3 years",
          clinicAddress: "Danetre Hospital, H Block, London Road, Daventry, Northamptonshire, NN11 4DY",
          lat: 52.252056,
          lng: -1.160851, 
          clinicName: "Northamptonshire Healthcare NHS Foundation Trust Gender Identity Clinic",
          clinicLink: "https://www.nhft.nhs.uk/gic",
          comment: ""
        },
        {
          city: "Nottinghamshire",
          months: 26,
          yearsFormatted: "2.2 years",
          clinicAddress: "12 Broad Street, Nottingham, NG1 3AL",
          lat: 52.954104,
          lng: -1.143785, 
          clinicName: "Nottinghamshire Healthcare NHS Foundation Trust The Nottingham Centre for Transgender Health",
          clinicLink: "https://ncth.nhs.uk/",
          comment: ""
        },
        {
          city: "Sheffield",
          months: 65,
          yearsFormatted: "5.4 years",
          clinicAddress: "Michael Carlisle Centre, 75 Osborne Road, Sheffield, S11 9BF",
          lat: 53.361429,
          lng: -1.497603, 
          clinicName: "Sheffield Health and Social Care NHS Foundation Trust Gender Identity Service",
          clinicLink: "https://www.shsc.nhs.uk/services/gender-identity-clinic",
          comment: ""
        },
        {
          city: "Sussex",
          months: 40,
          yearsFormatted: "3.3 years",
          clinicAddress: "St Peter's Medical Centre, 30-36 Oxford St, Brighton, BN1 4LA",
          lat: 50.831021,
          lng: -0.135094, 
          clinicName: "Sussex Gender Service",
          clinicLink: "https://www.sussexpartnership.nhs.uk/our-services/specialist-services/sussex-gender-service",
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
  
      // Create Leaflet map centered on UK AND LIMITED TO UK
      const map = L.map('map', {
        minZoom: 5,
        maxBounds: [
          [48, -12], // southwest corner
          [61, 5]    // northeast corner
        ]
      }).setView([54.5, -3], 5);

      // Add OpenStreetMap tiles - and style
      L.tileLayer('https://api.maptiler.com/maps/dataviz-light/{z}/{x}/{y}.png?key=AtaIYBARB7WJwYLzPoVv', {
        attribution: '&copy; <a href="https://www.maptiler.com/">MapTiler</a> contributors',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(map);

      // marker styling with svg
      const pinkIcon = L.icon({
        iconUrl: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 48" width="32" height="48">
            <path fill="#ff007f" stroke="black" stroke-width="1" d="M16 0C7.2 0 0 7.2 0 16c0 11.2 16 32 16 32s16-20.8 16-32C32 7.2 24.8 0 16 0zM16 22c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"/>
          </svg>
        `),
        iconSize: [32, 48],
        iconAnchor: [16, 48],
        popupAnchor: [0, -40]
      });

      // Add a marker for each clinic
      data.forEach(clinic => {
        if (clinic.lat && clinic.lng) {
          const marker = L.marker([clinic.lat, clinic.lng], { icon: pinkIcon }).addTo(map);
          marker.bindPopup(clinic.clinicName);
          marker.on('click', () => {
            map.flyTo([clinic.lat, clinic.lng], 7, {
              duration: 0.8
            });
          
            setTimeout(() => {
              showWaitTime(clinic);
            }, 850); // allow time for animation to play before switching
          });
        }
      });

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
          map.setView([54.5, -3], 5); // Reset view on return (center UK, zoom level)
          


      
    } // end of function to show wait time
  

  }