document.addEventListener("DOMContentLoaded", function () {
  let insurancePackagesContainer = document.querySelector(
    "#packages-container"
  );
  let fetchPackages = [],
    fetchedAndCagorized = [];
  getData();
  function groupData(inputData) {
    const groupedData = {};

    inputData.forEach((item) => {
      const key = `${item.company}-${item.category}-${item.title}`;

      if (!groupedData[key]) {
        groupedData[key] = {
          company: item.company,
          category: item.category,
          title: item.title,
          packages: [],
        };
      }

      groupedData[key].packages.push({
        package: item.package,
        downloadLink: item.downloadLink,
      });
    });

    return Object.values(groupedData);
  }

  // set insurance packages
  const extractPackage = (p) => {
    let package = {
      company: p.company,
      category: p.category,
      title: p.subCategory,
      package: p?.package || "",
      downloadLink: p.downloadLink,
    };

    return package;
  };

  async function getData() {
    try {
      const data = await (
        await fetch("https://vmaxapi.fonfixrepairs.co.ke/insurances.php")
      ).json();
      fetchPackages = data.length ? data : [];
      console.log({ data });
    } catch (error) {
      console.log({ errorMessage: error.message });
    } finally {
      // console.log({ fetchedCagorized: getCompanyData(selectedCompany) });
      getCompanyData(selectedCompany);
      // loadPackages();
    }
  }

  function getCompanyData(company = selectedCompany) {
    let data = fetchPackages.filter((item) => company == item.company) ?? [];
    let processeddata = [
      {
        title: "Motor Insurance",
        packages:
          // data.filter((d) => d.category == "motor").map(extractPackage) ?? [],
          groupData(
            data.filter((d) => d.category == "motor").map(extractPackage) ?? []
          ),
      },
      {
        title: "Other Common Insurances",
        packages:
          // data
          // .filter((d) => !["motor", "business"].includes(d.category))
          // .map(extractPackage) ?? [],
          groupData(
            data
              .filter((d) => !["motor", "business"].includes(d.category))
              .map(extractPackage) ?? []
          ),
      },
      {
        title: "Business Insurance",
        packages:
          // data.filter((d) => d.category == "business").map(extractPackage) ??
          // [] ??
          // []
          groupData(
            data.filter((d) => d.category == "business").map(extractPackage) ??
              []
          ),
      },
    ];
    fetchedAndCagorized = processeddata ?? [];
    console.log({ fetchedAndCagorized });
    loadPackages();
    return processeddata ?? [];
  }

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
  var selectedCompany = "apa";
  const imageArray = [
    "/img/kenindia.png",
    "/img/ga-insurance.png",
    "/img/mayfair-insurance.png",
    "/img/intra.png",
    "/img/geminia.png",
    "/img/apa.png",
  ];
  // console.log({ defaultPackages });
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
  // loadPackages();
  function loadPackages() {
    // getCompanyData(selectedCompany);
    // Assuming you have the insurance_covers array
    let categoriesContainer = insurancePackagesContainer;
    // Create a container for insurance categories
    // let categoriesContainer = packagesContainer;
    // categoriesContainer.innerHTML = ""
    let rowsContainer = document.createElement("div");
    rowsContainer.className = "w-full";
    // Iterate over each category in the insurance_covers array
    // console.log({fetchedAndCagorized})

    (fetchedAndCagorized.length
      ? fetchedAndCagorized
      : defaultPackages
    ).forEach(function (category) {
      // Create a div for the category
      let categoryDiv = document.createElement("div");
      // containerDiv = document.createElement("div")

      categoryDiv.className = "row";

      // Create an h3 element for the category title
      let categoryTitle = document.createElement("h3");
      categoryTitle.className = "claimforms-texts text-xl md:text-2xl lg:text-3xl font-bold";
      categoryTitle.textContent = category.title;

      // Append the title to the category div
      categoryDiv.appendChild(categoryTitle);

      //   Iterate over each insurance package in the category
      category.packages.forEach(function (insurance) {
        // Create a div for the insurance package
        let insuranceDiv = document.createElement("div");
        const columnClass = `col-xl-${
          category.packages.length >= 4 ? "3" : "4"
        } col-lg-${category.packages.length >= 4 ? "3" : "4"} col-md-6`;

        insuranceDiv.className = columnClass;

        // Create the services-boxes div
        let servicesBoxesDiv = document.createElement("div");
        servicesBoxesDiv.className = "services-boxes";
        // servicesBoxesDiv.addEventListener("click", alerty);

        // Create the services-inner div
        let servicesInnerDiv = document.createElement("div");
        servicesInnerDiv.className = "services-inner";

        // Create the services-shape div
        let servicesShapeDiv = document.createElement("div");
        servicesShapeDiv.className = "services-shape";

        // Create the img element for the insurance image
        let insuranceImage = document.createElement("img");
        // insuranceImage.setAttribute("src", insurance.image);
        insuranceImage.setAttribute("src", "/images/objects/6.png");

        insuranceImage.setAttribute("alt", "");

        // Append the image to the services-shape div
        servicesShapeDiv.appendChild(insuranceImage);

        // Append the services-shape div to the services-inner div
        servicesInnerDiv.appendChild(servicesShapeDiv);

        // Create the services-count div (assuming it's empty in your example)
        let servicesCountDiv = document.createElement("div");
        servicesCountDiv.className = "services-count";
        servicesInnerDiv.appendChild(servicesCountDiv);

        // Create the h4 element for the insurance title
        let insuranceTitle = document.createElement("h4");
        insuranceTitle.className = "services-title texl-lg md:text-xl lg:text-2xl capitalize font-semibold";

        let a_tag = document.createElement("a");
        a_tag.innerHTML = `<a> ${
          insurance.title
            ? insurance.title
            : insurance.category +             
              " Insurance  "
        }      </a>`;
        insuranceTitle.appendChild(a_tag);
        // Append the title to the services-inner div
        servicesInnerDiv.appendChild(insuranceTitle);

        // Create the services-link div
        let servicesLinkDiv = document.createElement("div");
        servicesLinkDiv.className = "services-link";

        // Create the a element for downloading forms
        let downloadFormsLink = document.createElement("a");
        downloadFormsLink.setAttribute("class", "text-btn js-modal");
        downloadFormsLink.setAttribute("data-modal", "#" + insurance.category);
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
        let modalTemplateDiv = document.createElement("div");
        modalTemplateDiv.id = insurance.category;
        modalTemplateDiv.className = "modal-window";
        // modalTemplateDiv.setAttribute("ng-include", "insurance.modalTemplate");
        // let Modal windo
        let modalWindowTitle = document.createElement("div");
        modalWindowTitle.className = "modal-window__title";

        // x_removeModal
        let x_removeModal = document.createElement("div");
        x_removeModal.className = "x-remove-modal";
        x_removeModal.innerHTML = `<p class="modal-close">&times;</p>`;
        //Add the x-removeModal to the
        modalWindowTitle.appendChild(x_removeModal);

        // modalWindowDownload
        let modalWindowDownload = document.createElement("div");
        modalWindowDownload.className = "modal-window-p-download";

        let downloadFormCard = insurance.packages.length
          ? insurance?.packages.reduce(
              (str, p) =>
                (str += `<div class="border-same flex flex-col gap-2">
    <h1>Claim Form</h1>
    <hr />
    <p class="capitalize">${p.package?.length>0? p.package:"Package Link"}</p>
    <hr />
    <a href="${p.downloadLink}" target="_blank" class="text-center text-base md:text-lg">Download</a>
  </div>`),
              ""
            )
          : `<div class="border-same flex flex-col gap-2">
  <h1>Claim Form</h1>
  <hr />
  <p class="capitalize">Package Link</p>
  <hr />
  <a href="${insurance.packages[0].downloadLink ?? "#"}" target="_blank" class="text-center text-base md:text-lg">Download</a>
</div>`;
        //Add the actually links to the form
        modalWindowDownload.innerHTML = downloadFormCard;

        //Add the modalWindowDownload
        modalWindowTitle.appendChild(modalWindowDownload);

        // Add modalWindowTitle to modal
        modalTemplateDiv.appendChild(modalWindowTitle);

        //Add modal modal to insuranceDiv
        insuranceDiv.appendChild(modalTemplateDiv);

        // conta
        // Append the insurance package div to the category div
        categoryDiv.appendChild(insuranceDiv);
      });

      // Append the category div to the container
      // categoriesContainer.appendChild(categoryDiv);

      // if(firstChild)  { categoriesContainer.removeChild(document.querySelector('.row')) }
      // categoriesContainer.innerHTML = ""
      rowsContainer.appendChild(categoryDiv);

      // categoriesContainer.appendChild(categoryDiv)
    });
    categoriesContainer.innerHTML = "";
    categoriesContainer.appendChild(rowsContainer);
  }

  
  

  // variable declaration
  let companyLogosContainer = document.querySelector(
    "#company-logos-container"
  );

  //   loadPackages(defaultPackages);
  function setSelectedCompany(val) {
    selectedCompany = val;
    loadLogos();
    getCompanyData();
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
