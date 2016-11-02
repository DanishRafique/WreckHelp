'use strict';
angular.module('wreckhelpApp', [])
.controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {name:"", email:"", message:""};
}])

.controller('MenuController',['$scope', function($scope) {
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails=false;
  
  $scope.videos = [
    {
      id:'1',
      name:'Motorcycle repair - Repairing a clutch',
      category: 'bikes',
      src:'https://www.youtube.com/watch?v=LnPktdVsIyU',
      description:'If you want to know how to replace the clutch plates in your motorcycle, come and take a look, all motorbikes these days have more or less the same type of multi-plate wet clutch found in my 250cc Bodgeworx thumper, come and see exactly how it's done.',
      comment: 'That's some nice work from the mechanic, and good thinking recording his work to do it yourself and save the cash.?'
    },
    
    {
	id:'2',
      name:'YO YO',
      category: 'cars',
      src:'https://www.youtube.com/embed/HfLVYr38D0Q',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
    },
    {
    	id:'3',
      name:'YO YO',
      category: 'cars',
      src:'https://www.youtube.com/embed/M2YLVFXqBWo',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
    },
    {
    	id:'4',
      name:'YO YO',
      category: 'trucks',
      src:'https://www.youtube.com/embed/M2YLVFXqBWo',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
    },
  ]; 

  $scope.blogs=[
  	{
  		id:'1',
  		title:'YO YO',
  		article:'Our friendly customer service representatives are committed to answering all your questions and meeting any need you may have. We would love to hear from you! Please fill out the form below so we may assist you.',
  		src:'images/content__images/image_240x100.jpg',
  		category: 'trucks'
  	},
  	{
  		id:'2',
  		title:'YO YO',
  		article:'Our friendly customer service representatives are committed to answering all your questions and meeting any need you may have. We would love to hear from you! Please fill out the form below so we may assist you.',
  		src:'images/content__images/image_240x100.jpg',
  		category: 'bikes'
  	},
  	{
  		id:'3',
  		title:'YO YO',
  		article:'Our friendly customer service representatives are committed to answering all your questions and meeting any need you may have. We would love to hear from you! Please fill out the form below so we may assist you.',
  		src:'images/content__images/image_240x100.jpg',
  		category: 'trucks'
  	},
  	{
  		id:'4',
  		title:'YO YO',
  		article:'Our friendly customer service representatives are committed to answering all your questions and meeting any need you may have. We would love to hear from you! Please fill out the form below so we may assist you.',
  		src:'images/content__images/image_240x100.jpg',
  		category: 'cars'
  	},
  ];

  $scope.select = function(setTab) {
    $scope.tab = setTab;
    
    if (setTab === 2) {
      $scope.filtText = "bikes";
    } 
    else if (setTab === 3) {
      $scope.filtText = "cars";
    }
    else if (setTab === 4) {
      $scope.filtText = "trucks";
    }
    else {
      $scope.filtText = "";
    }
  };
  
  $scope.isSelected = function (checkTab) {
    return ($scope.tab === checkTab);
  };


  $scope.toggleDetails = function(){
    $scope.showDetails=!$scope.showDetails;
  }
  
}])








.filter('trustAsResourceUrl', ['$sce', function($sce) {
    return function(val) {
        return $sce.trustAsResourceUrl(val);
    };
}])

;







