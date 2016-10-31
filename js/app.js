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
      name:'Uthapizza',
      category: 'bikes',
      src:'https://www.youtube.com/embed/M2YLVFXqBWo',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
    },
    
{
      name:'Uthapizza',
      category: 'cars',
      src:'https://www.youtube.com/embed/HfLVYr38D0Q',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
    },
    {
      name:'Uthapizza',
      category: 'cars',
      src:'https://www.youtube.com/embed/M2YLVFXqBWo',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
    },
    {
      name:'YO YO',
      category: 'trucks',
      src:'https://www.youtube.com/embed/M2YLVFXqBWo',
      description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
      comment: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Nullam malesuada erat ut turpis.Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.'
    },
  ]; 

  $scope.blogs=[
  	{
  		title:'YO YO',
  		article:'Our friendly customer service representatives are committed to answering all your questions and meeting any need you may have. We would love to hear from you! Please fill out the form below so we may assist you.',
  		src:'images/content__images/image_240x100.jpg',
  		category: 'trucks'
  	},
  	{
  		title:'YO YO',
  		article:'Our friendly customer service representatives are committed to answering all your questions and meeting any need you may have. We would love to hear from you! Please fill out the form below so we may assist you.',
  		src:'images/content__images/image_240x100.jpg',
  		category: 'bikes'
  	},
  	{
  		title:'YO YO',
  		article:'Our friendly customer service representatives are committed to answering all your questions and meeting any need you may have. We would love to hear from you! Please fill out the form below so we may assist you.',
  		src:'images/content__images/image_240x100.jpg',
  		category: 'trucks'
  	},
  	{
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







