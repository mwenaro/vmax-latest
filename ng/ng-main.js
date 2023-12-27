var app = angular.module("myApp", []);

app.controller("vmaxController", function ($scope) {
  $scope.greeting = "Hello, Angular!";
  console.log($scope.greeting, " in vmaxController");


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
    { title: `Business Insurance`, 
    description: `Braesent accumsan litora placerat tempor ac enim viverra faucibus felis, faucibus erat fringilla
    massa ultrices porttitor metus
     eleifend lacinia lectus amet.` },
  ];
});
