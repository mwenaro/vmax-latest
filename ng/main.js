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
  loadPackages();
  function loadPackages() {
    // Assuming you have the insurance_covers array

    // Create a container for insurance categories
    var categoriesContainer = packagesContainer

    // Iterate over each category in the insurance_covers array
    defaultPackages.forEach(function (category) {
      // Create a div for the category
      var categoryDiv = document.createElement("div");
      categoryDiv.className = "row";

      // Create an h3 element for the category title
      var categoryTitle = document.createElement("h3");
      categoryTitle.className = "claimforms-texts";
      categoryTitle.textContent = category.title;

      // Append the title to the category div
      categoryDiv.appendChild(categoryTitle);



    //   Iterate over each insurance package in the category
      category.packages.forEach(function (insurance) {
        // Create a div for the insurance package
        var insuranceDiv = document.createElement("div");
        insuranceDiv.className =
          "col-xl-" +
          (category.packages.length >= 4 ? "3" : "4") +
          " col-lg-" +
          (category.packages.length >= 4 ? "3" : "4") +
          " col-md-6";

        // Create the services-boxes div
        var servicesBoxesDiv = document.createElement("div");
        servicesBoxesDiv.className = "services-boxes";
        // servicesBoxesDiv.addEventListener("click", alerty);

        // Create the services-inner div
        var servicesInnerDiv = document.createElement("div");
        servicesInnerDiv.className = "services-inner";

        // Create the services-shape div
        var servicesShapeDiv = document.createElement("div");
        servicesShapeDiv.className = "services-shape";

        // Create the img element for the insurance image
        var insuranceImage = document.createElement("img");
        // insuranceImage.setAttribute("src", insurance.image);
        insuranceImage.setAttribute("src", "/images/objects/6.png");

        insuranceImage.setAttribute("alt", "");

        // Append the image to the services-shape div
        servicesShapeDiv.appendChild(insuranceImage);

        // Append the services-shape div to the services-inner div
        servicesInnerDiv.appendChild(servicesShapeDiv);

        // Create the services-count div (assuming it's empty in your example)

        // Create the h4 element for the insurance title
        var insuranceTitle = document.createElement("h4");
        insuranceTitle.className = "services-title";
        insuranceTitle.innerHTML =
          "<a>" + insurance.title + " - " + getSelectedCompany() + "</a>";

        // Append the title to the services-inner div
        servicesInnerDiv.appendChild(insuranceTitle);

        // Create the services-link div
        var servicesLinkDiv = document.createElement("div");
        servicesLinkDiv.className = "services-link";

        // Create the a element for downloading forms
        var downloadFormsLink = document.createElement("a");
        downloadFormsLink.setAttribute("class", "text-btn js-modal");
        downloadFormsLink.setAttribute("data-modal", "#" + insurance.modalId);
        downloadFormsLink.textContent = "Download Forms";

        // Append the download forms link to the services-link div
        servicesLinkDiv.appendChild(downloadFormsLink);

        // Append the services-link div to the services-inner div
        servicesInnerDiv.appendChild(servicesLinkDiv);

        // Append the services-inner div to the services-boxes div
        servicesBoxesDiv.appendChild(servicesInnerDiv);

        // Append the services-boxes div to the insurance package div
        insuranceDiv.appendChild(servicesBoxesDiv);

        // Include the modal template (assuming ng-include functionality)
        var modalTemplateDiv = document.createElement("div");
        // modalTemplateDiv.setAttribute("ng-include", "insurance.modalTemplate");
        modalTemplateDiv.innerHTML = `<div id="${insurance.modalId}" class="modal-window" >
        <div class="modal-window__title">
            <div class="x-remove-modal">
                <p class="modal-close">&times;</p>
            </div>
        {}
            <div class="modal-window-p-download">
                
                <div class="border-same">
                    <h1>Claim Form</h1>
                    <hr />
                    <p>Motor Cover</p>
                    <hr />
                    <div ng-include="'./includes/download_link_template.html'"></div>
                    <!-- <a href="https://www.apainsurance.org/pdf/claim/motor_claim_form.pdf" target="_blank">Download</a> -->
                </div>
                <div class="border-same">
                    <h1>Claim Form</h1>
                    <hr />
                    <p>Windscreen</p>
                    <hr />
                    <div ng-include="'./includes/download_link_template.html'"></div>
                    <!-- <a href="https://www.apainsurance.org/pdf/claim/motor_claim_form.pdf" target="_blank">Download</a> -->
                </div>
            </div>
        </div>
    </div>`

        // Append the modal template div to the insurance package div
        insuranceDiv.appendChild(modalTemplateDiv);

        // Append the insurance package div to the category div
        categoryDiv.appendChild(insuranceDiv);
      });



      // Append the category div to the container
      categoriesContainer.appendChild(categoryDiv);
    });

    // Function to be called on click
    function alerty() {
      alert("Insurance clicked!");
    }

    // Function to get the selected company (assuming it's defined somewhere)
    function getSelectedCompany() {
      // Replace this with your logic to get the selected company
      return "SelectedCompany";
    }
  }

  // variable declaration
  let companyLogosContainer = document.querySelector(
    "#company-logos-container"
  );

//   loadPackages(defaultPackages);
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
