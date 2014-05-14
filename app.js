(function(){
  var app = angular.module("store", []);

  app.controller('StoreController', function(){
    this.products = shoes;
  });

  var shoes = [
    {
      name: "SeaVees Baja Slip On",
      price: 88,
      description: "Relax as you take a trip to Baja California with the Baja Slip On Hemp from SeaVees",
      canPurchase:true,
      soldOut: false,
      img: 'sea_vees.jpg',
    },
    {
      name: "Nike Roshe Run Slip On",
      price: 75,
      description: "With it's eye catching chunky sole and minimal design, the Nike Roshe was inspired by the practice of meditation and the concept of Zen",
      canPurchase: true,
      soldOut: false,
      img: 'nike_roshe.jpg',
    },
    {
      name: "Salvatore Ferragamo Regal Loafer",
      price: 540,
      description: "Fit for a king, treat yourself to the rich leather rewards of the Salvatore Ferragamo Regal Loafer",
      canPurchase: true,
      soldOut: false,
      img: 'salvatore_ferragamo.jpg',
    },
    {
      name: "Keen Whisper",
      price: 90,
      description: "A water-friendly sandal that's perfect for adventures anywhere from hidden coves to rushing rivers",
      canPurchase: true,
      soldOut: true,
      img: 'keen_whisper.jpg',
    },
    {
      name: "Clarks Breeze Sea",
      price: 45,
      description: "Add some floral design to your warm-weather wear with the Breeze Sea sandal from Clarks",
      canPurchase: true,
      soldOut: true,
      img: 'clark_breeze.jpg',
    }
  ];

})();

