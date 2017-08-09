angular = require("angular");

require("@progress/kendo-ui/js/kendo.multiselect.js");
require("@progress/kendo-ui/js/kendo.angular.js");
require("@progress/kendo-ui/css/web/kendo.bootstrap-v4.min.css");

angular.module("KendoDemos", ["kendo.directives"])
    .controller("MyCtrl", function ($scope) {
        $scope.selectOptions = {
            placeholder: "Select products...",
            dataTextField: "ProductName",
            dataValueField: "ProductID",
            dataSource: {
                transport: {
                    read: {
                        url: "http://demos.telerik.com/kendo-ui/service/products",
                        dataType: "jsonp"
                    }
                }
            }
        };
        $scope.selectedItems = [{ ProductName: "Chai", ProductID: 1 }];
    });
