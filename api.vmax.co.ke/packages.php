<!DOCTYPE html>
<html ng-app="myApp">
  <head>
    <!-- Using ng CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.8.3/angular.min.js"></script>

    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Include Angular controller script -->
  </head>
  <body ng-controller="myController">
    <form
      class="max-w-[1000px] w-[99%] mx-auto mt-16"
      ng-submit="handleSubmit()"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="company">
          Select Company
        </label>
        <select
          class="border rounded w-full py-2 px-3"
          id="company"
          name="company"
          required
          ng-model="formData.company"
        >
          <option value="">--- Choose Country ---</option>
          <option ng-repeat="company in companies" value="{{company}}">
            {{company}}
          </option>
        </select>
      </div>

      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="category"
        >
          Select Category
        </label>
        <select
          class="border rounded w-full py-2 px-3"
          id="category"
          name="category"
          required
          ng-model="formData.category"
          ng-change="updateSubCategories()"
        >
          <option value="">--- Choose Category ---</option>
          <option ng-repeat="category in categories" value="{{category}}">
            {{category}}
          </option>
        </select>
      </div>

      <div class="mb-4" ng-if="subCategories.length > 0">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="subcategory"
        >
          Select Sub-Category
        </label>
        <select
          class="border rounded w-full py-2 px-3"
          id="subcategory"
          name="subcategory"
          required
          ng-model="formData.selectedSubCategory"
        >
          <option value="">--- Choose SubCategory ---</option>
          <option
            ng-repeat="subCategory in subCategories"
            value="{{subCategory}}"
          >
            {{subCategory}}
          </option>
        </select>
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="package">
          Package
        </label>
        <input
          type="text"
          class="border rounded w-full py-2 px-3"
          id="package"
          name="package"
          ng-model="formData.package"
          value=""
          placeholder="optional e.g Wind Screen"
        />
      </div>

      <div class="mb-4">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="downloadLink"
        >
          Download Link
        </label>
        <input
          type="text"
          class="border rounded w-full py-2 px-3"
          id="downloadLink"
          required
          name="downloadLink"
          ng-model="formData.downloadLink"
          placeholder="paste your download link here"
        />
      </div>
      <button type="submit" class="bg-blue-500 text-white py-2 px-4 rounded">
        Submit
      </button>
    </form>

    <!--table - ->-->
    <table class="table-auto mt-4 max-w-[1200px] mx-auto my-2">
      <thead>
        <tr>
          <th class="px-4 py-2">Company</th>
          <th class="px-4 py-2">Category</th>
          <th class="px-4 py-2">Sub-Category</th>
          <th class="px-4 py-2">Package</th>
          <th class="px-4 py-2">Flow Link</th>
          <th class="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="item in formItems">
          <td class="border px-4 py-2">{{ item.company }}</td>
          <td class="border px-4 py-2">{{ item.category }}</td>
          <td class="border px-4 py-2">{{ item.subCategory }}</td>
          <td class="border px-4 py-2">{{ item.package }}</td>
          <td class="border px-4 py-2">{{ item.downloadLink }}</td>
          <td class="border px-4 py-2">
            <button
              ng-click="editItem(item)"
              class="bg-yellow-500 text-white py-1 px-2 rounded"
            >
              Edit
            </button>
            <button
              ng-click="deleteItem(item)"
              class="bg-red-500 text-white py-1 px-2 rounded ml-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <!--- table ->-->

    <script>
      angular.module("myApp", []).controller("myController", function ($scope) {
        // Form data
        $scope.formData = {
          company: "",
          category: "",
          subCategory: "",
          downloadLink: "",
        };
        // Form mode
        $scope.isEdit = false;

        $scope.getItems = () => {
          (async () => {
            try {
              const response = await fetch("insurances.php", {
                headers: {
                  "Content-Type": "application/json",
                },
              });

              const data = await response.json();
              console.log(data); // Log the full response
              $scope.formItems = data;
            } catch (error) {
              console.error({ msg: error.message });
            }
          })();
        };
        // Insurance packges

        $scope.formItems = []; // Store form items here

        // Predefined lists
        $scope.companies = [
          "apa",
          "geminia",
          "ga",
          "intra",
          "kenindia",
          "mayfair",
        ];
        $scope.categories = [
          "motor",
          "medical",
          "travel",
          "domestic",
          "marine",
          "business",
        ];

        $scope.rawSubCategories = {
          motor: ["comprehesive", "third party"],

          business: [
            "Rental Property Insurance",
            "Burglary Insurance",
            "Work Injury Benefits Ac",
            "Terrorism & Political Violence Liability",
            "Stock Floater",
            "Public Liability",
            "Machinery Breakdown",
            "Industrial All Risks",
            "Floriculture",
            "Fire & Consequential Loss",
            "Fire & Allied Perils",
            "Fidelity Guarantee",
            "Employers Liability",
            "Credit Insurance",
            "Plant & Machinery",
            "Contractors All Risk",
            "Boller and Pressure Vessel",
            "Agriculture",
          ],
        };

        $subCategories = [];

        // Function to update sub-categories based on the selected category
        $scope.updateSubCategories = function () {
          if ($scope.formData.category === "motor")
            $scope.subCategories = $scope.rawSubCategories["motor"];
          if ($scope.formData.category === "business")
            $scope.subCategories = $scope.rawSubCategories["business"];
          else $scope.subCategories = [];
        };
        // function
        $scope.handleSubmit = (e) => {
          // e.preventDefault();
          // console.log($scope.formData);
        
          (async () => {
            try {
              const response = await fetch(`insurances.php${$scope.formData?.id? "?id="+$scope.formData?.id :""}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify($scope.formData),
              });

              const data = await response.json();
              $scope.formData = {
                company: "",
                category: "",
                subCategory: "",
                downloadLink: "",
              };
              $scope.getItems()
              console.log(data); // Log the full response
            } catch (error) {
              console.error({ msg: error.message });
            }
          })();
          $scope.isEdit = false;
        };
        // end submit

        // Edit an item in the table
        $scope.editItem = function (item) {
          // Populate form fields with the selected item's data for editing
          // $scope.selectedCompany = item.selectedCompany;
          // $scope.selectedCategory = item.selectedCategory;
          // $scope.selectedSubCategory = item.selectedSubCategory;
          // $scope.package = item.package;
          // $scope.flowLink = item.flowLink;
          $scope.formData = item;
          $scope.isEdit = true;
          // Remove the item from the formItems array
          // const index = $scope.formItems.indexOf(item);
          // if (index !== -1) {
          //   $scope.formItems.splice(index, 1);
          // }
        };
        // end edit

        // Delete an item from the table
        $scope.deleteItem = function (item) {
          const index = $scope.formItems.indexOf(item);
          if (index !== -1) {
            $scope.formItems.splice(index, 1);



            (async () => {
            try {
              const response = await fetch(`insurances.php${$scope.formData?.id? "?id="+$scope.formData?.id :""}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                }
              });

              const data = await response.json();
           
              $scope.getItems()
              console.log(data, "FROM DELETE "); // Log the full response
            } catch (error) {
              console.error({ msg: error.message, from : "delete" });
            }
          })();
          }
        };
        // end delete
      });
    </script>
  </body>
</html>
