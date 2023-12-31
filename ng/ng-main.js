var app = angular.module("myApp", []);

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

// app.value("selectedCompany", "hello");
app.service("companyService", function () {
  var selected = null;
  var insuranceCategories = [
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

  this.setCategories = function (categories) {
    insuranceCategories = categories;
  };

  this.getCategories = function () {
    return insuranceCategories;
  };

  this.setSelectedCompany = function (company) {
    selected = company;
  };

  this.getSelectedCompany = function () {
    return selected;
  };
});

app.controller("vmaxController", function ($scope, companyService) {
  $scope.selectedCompany = companyService.getSelectedCompany();
  $scope.getSelectedCompany = () => companyService.getSelectedCompany();
  // console.log({selectedCompany1})
  $scope.menuToggle = function () {
    // Your menuToggle function logic here
  };

  $scope.fetcheData = [];

  getData();
  async function getData() {
    try {
      const data = await (
        await fetch("https://vmaxapi.fonfixrepairs.co.ke/insurances.php")
      ).json();
      $scope.fetchedData = data;
      console.log({ data, fdata: $scope.fetcheddata });
    } catch (error) {
      console.log({ errorMessage: error.message });
    }
  }

  // Define your WhatsApp contacts
  $scope.whatsappContacts = [
    {
      name: "Vmax Ceo",
      url: "https://api.whatsapp.com/send?phone=254720329069",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      name: "Customer Service",
      url: "https://api.whatsapp.com/send?phone=254705226770",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      name: "Sales Desk",
      url: "https://api.whatsapp.com/send?phone=254705226770",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
  ];

  $scope.companys = companyData;

  // index Insurance covers
  $scope.insurance_covers = [
    {
      title: "Motor Insurance",
      description: `Ensure your well-being with medical coverage for treatments,
            prescriptions, and emergencies.`,
    },
    {
      title: `Medical Insurance`,
      description: `Provides indemnity against loss or damage to property
    following forcible or violent entry or exit from insured
    premises.`,
    },
    {
      title: `Travel Insurance`,
      description: `Lorem ipsum litora praesent accumsan litora placerat tempor ac enim viverra faucibus felis, faucibus erat fringilla
     massa ultrices porttitor metus
      eleifend lacinia lectus amet.`,
    },
    {
      title: `Domestic Insurance`,
      description: `Ltora praesent accumsan litora placerat tempor ac enim viverra faucibus felis, faucibus erat fringilla
    massa ultrices porttitor metus
     eleifend lacinia lectus amet.`,
    },
    {
      title: `Marine Insurance`,
      description: `Maesent accumsan litora placerat tempor ac enim viverra faucibus felis, faucibus erat fringilla
    massa ultrices porttitor metus
     eleifend lacinia lectus amet.`,
    },
    {
      title: `Business Insurance`,
      description: `Braesent accumsan litora placerat tempor ac enim viverra faucibus felis, faucibus erat fringilla
    massa ultrices porttitor metus
     eleifend lacinia lectus amet.`,
    },
  ];

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

  function getCompanyData(company) {
    let data =
      $scope.fetcheData.filter((item) => company == item.company) ?? [];
    return [
      {
        title: "Motor Insurance",
        packages:
          data.filter((d) => d.category == "motor").map(extractPackage) ?? [],
      },
      {
        title: "Other Common Insurances",
        packages:
          data
            .filter((d) => !["motor", "business"].includes(d.category))
            .map(extractPackage) ?? [],
      },
      {
        title: "Business Insurance",
        packages:
          data.filter((d) => d.category == "business").map(extractPackage) ??
          [] ??
          [],
      },
    ];
  }
  // Insurance
  // $scope.insuranceCategories = getCompanyData("apa") ?? [
  $scope.insuranceCategories = [
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

  //  select

  $scope.alerty = function () {
    if (companyService.getSelectedCompany() == null) {
      alert(
        "No company Selected! Kindly select company by clicking the pictures above"
      );
    }
  };
});
// app.controller("vmaxController", vmaxController);
// components
app.component("companyLogos", {
  templateUrl: "../ng/templates/company-logos.html", // Specify the path to your template file
  controller: [
    "$scope",
    "companyService",
    function ($scope, companyService) {
      // $scope.selectedCompany = companyService.getSelectedCompany();
      $scope.getSelectedCompany = () => companyService.getSelectedCompany();
      console.log({ sel: $scope.selectedCompany });
      // You can put any controller logic here if needed.
      // console.log("Hello logosController");
      $scope.btnClick = (val) => {
        alert(val + "has been clicked!");
      };

      $scope.setSelectedCompany = (val) => {
        companyService.setSelectedCompany(val.trim());
        companyService.setCategories();
        $scope.insuranceCategories;
        console.log({ sel: $scope.getSelectedCompany() });
      };
    },
    // vmaxController,
  ],
  bindings: {
    companys: "<", // Use one-way binding for the companies data
  },
});
