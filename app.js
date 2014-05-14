(function(){
  var app = angular.module("store", []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  var gems = [
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "This is a description",
      canPurchase:true,
      soldOut: false,
    },
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "The thinga ma jigga",
      canPurchase: true,
      soldOut: false,
    }
  ];

})();

