document.addEventListener("DOMContentLoaded", function () {
  let insuranceCategories = [];
  let packagesContainer = document.querySelector("#packages-container");
  let defaultPackages = [
    {
      title: "Motor Insurance",
      packages: [
        {
          title: "Comprehensive Insurance",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/motor_modal.html",
          modalId: "motor",
        },
        {
          title: "Third Party Insurance",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/motor_modal.html",
          modalId: "motor",
        },
      ],
    },
    {
      title: "Other Common Insurances",
      packages: [
        {
          title: "Medical Insurance",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/health_modal.html",
          modalId: "health",
        },
        {
          title: "Travel Insurance",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/travel_modal.html",
          modalId: "travel",
        },
        {
          title: "Domestic Package",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/life_modal.html",
          modalId: "life",
        },
        {
          title: "Marine Insuranace",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/personal_modal.html",
          modalId: "personal",
        },
      ],
    },

    {
      title: "Business Insurance",
      packages: [
        {
          title: "Burglary Insurance",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },

        {
          title: "Rental Property Insurance",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Work Injury Benefits Act",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Terrorism & Political Violence Liability",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Stock Floater",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Retirement Benefits Scheme",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Public Liability",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },

        {
          title: "Machinery Breakdown",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Industrial All Risks",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Goods In Transit",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Floriculture",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Fire & Consequential Loss",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Fire & Allied Perils",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Fidelity Guarantee",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Erection All Risks",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Employers Liability",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Electronic Equipment",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },

        {
          title: "Credit Insurance",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Plant & Machinery",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Contractors All Risk",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Bonds",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Boller and Pressure Vessel",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Aviation",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
        {
          title: "Agriculture",
          image: "images/objects/6.png",
          modalTemplate: "../ng/inc/general_modal.html",
          modalId: "general",
        },
      ],
    },
  ];
  let selectedCompany = "";
  const imageArray = [
    "/img/kenindia.png",
    "/img/ga-insurance.png",
    "/img/mayfair-insurance.png",
    "/img/intra.png",
    "/img/geminia.png",
    "/img/apa.png",
  ];

  const companyData = imageArray.map((src) => {
    // Extract image name from the src URL without the extension
    const imageName = src
      .split("/")
      .pop()
      .replace(/\.\w+$/, "")
      .split("-")[0];

    // Create an object with src and image_name properties
    return {
      src,
      image_name: imageName,
    };
  });

  function loadPackages(company) {
    company.forEach((category) => {
   

      packagesContainer.innerHTML = "";
      let row = document.createElement("div");
      row.setAttribute("class", "row");
      let heading = document.createElement("h3");
      heading.text = category.title;
      heading.class = "claimforms-texts";

      row.appendChild(heading);
 
      // Another loop
      category.packages.forEach((insurance) => {
        // create a div
        let innerDiv = document.createElement("div");
        innerDiv.class = `col-xl-${category.packages.length >= 4 ? "3" : "4"} col-lg-${
          category.packages.length >= 4 ? "3" : "4"
        } col-md-6`;
        // let serviceBox = document.createElement("div");
        // serviceBox.class = "services-boxes";

//         serviceBox.innerHTML = `
// <div class="services-inner">
// <div class="services-shape">
//   <img src="${insurance.image}" alt="" />
// </div>
// <div class="services-count"></div>
// <h4 class="services-title">
//   <a>${insurance.title} - ${getSelectedCompany()}</a>
// </h4>
// <div class="services-link">
//   <a
//     class="text-btn js-modal"
//     data-modal="#${insurance.modalId}"
//     >Download Forms</a
//   >
// </div>
// </div>

// `;
//         let templateDiv = document.createElement("div");
innerDiv.text = insurance.title
        // innerDiv.appendChild(templateDiv);
        row.appendChild(innerDiv);
      });

      // Add row to the container
      packagesContainer.appendChild(row);
    });
  }

  // variable declaration
  let companyLogosContainer = document.querySelector(
    "#company-logos-container"
  );


  loadPackages(defaultPackages)
  function setSelectedCompany(val) {
    selectedCompany = val;
    console.log({ selectedCompany: val });
    loadLogos();
  }
  // Load the logs
  loadLogos();

  function loadLogos() {
    companyLogosContainer.innerHTML = "";

    companyData.forEach((image) => {
      let span = document.createElement("span");

      span.value = image.image_name;
      span.setAttribute(
        "class",
        `${
          selectedCompany === image.image_name.trim()
            ? "card  p-1 bg-success"
            : ""
        }`
      );

      span.addEventListener("click", () =>
        setSelectedCompany(image.image_name.trim())
      );
      span.innerHTML = `<img src="${image.src}" width="100px" />`;

      companyLogosContainer.appendChild(span);
    });
  }
  // End of load logos
});

// Add Event liestner
