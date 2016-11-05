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
      name:'Motorcycle repair - repairing a clutch',
      category: 'bikes',
      src:'https://www.youtube.com/embed/LnPktdVsIyU',
      description:'If you want to know how to replace the clutch plates in your motorcycle, come and take a look, all motorbikes these days have more or less the same type of multi-plate wet clutch found in my 250cc Bodgeworx thumper, come and see exactly how it\'s done.',
      comment: 'That\'s some nice work from the mechanic, and good thinking recording his work to do it yourself and save the cash.?'
    },
    
    {
	    id:'2',
      name:'How to Adjust Motorcycle Engine Valve Clearance',
      category: 'bikes',
      src:'https://www.youtube.com/embed/-HxWAwA-FZo',
      description:'This video shows how to check and adjust the valve clearance in a motorcycle engine.',
      comment: 'I understood this better than the other videos, you actually show close up what you are doing'
    },
    {
    	id:'3',
      name:'Rear Derailleur Adjustment',
      category: 'bikes',
      src:'https://www.youtube.com/embed/g_bGcuezsIo',
      description:'How to properly adjust a bicycle rear derailleur.',
      comment: 'Wow!...Ive never seen it explained so easily. Do you have a video on the front derailleur?'
    },
    {
    	id:'4',
      name:'BIKE ENGINE REPAIRING',
      category: 'bikes',
      src:'https://www.youtube.com/embed/6pzF8KKX4X8',
      description:'How to repair an engine',
      comment: 'Nice video!!'
    },
    {
    	id:'5',
      name:'Car Panel Repair by 3M Bodyshop',
      category: 'cars',
      src:'https://www.youtube.com/embed/hcm_5ZzOkZo',
      description:'3M shows the car panel repair process using a range of industry accepted products, from paint removing abrasives to application of body filler using 3M\'s Dynamic Mixing System',
      comment: 'All hail God emperor Gary! May his soul live eternally!Great Video'
    },
    {
    	id:'6',
      name:'Large Damage Bumper Repair',
      category: 'cars',
      src:'https://www.youtube.com/embed/_ZedfGIP1aY',
      description:'How to repair a bumper damage',
      comment: 'Would love to see more of your videos'
    },
    {
    	id:'7',
      name:'Extreme Dent Removal',
      category: 'cars',
      src:'https://www.youtube.com/embed/oqMdKLES7bc',
      description:'Extreme Dent Removal performed on a Mini One',
      comment: 'Crazy how he did that all in 5 minutes.'
    },
    {
    	id:'8',
      name:'How to Remove Scratches from Car PERMANENTLY',
      category: 'cars',
      src:'https://www.youtube.com/embed/2nYF46P7B2c',
      description:'Fix scratches on car.',
      comment: 'Awesome video!.I like the way you explain'
    },
    {
    	id:'9',
      name:'How to change axle seal on semi truck',
      category: 'trucks',
      src:'https://www.youtube.com/embed/ZNw5wYmektE',
      description:'Changing axle seal while doing a brake job on my truck.',
      comment: 'Great video, currently in school to be a truck tech and watching your videos gives me an idea before doing labs, Keep on going man'
    },
    {
    	id:'10',
      name:'Clutch installation',
      category: 'trucks',
      src:'https://www.youtube.com/embed/eOlZJjiEE0A',
      description:'how to install a heavy duty clutch',
      comment: 'Thats a Valeo clutch, seen a few during the mid 1990s. Not one that I would recommend for the fact if you do not lock the adjustment spool the clutch is toast.'
    },
    {
    	id:'11',
      name:'How To Replace Brakes On A Dump Truck',
      category: 'trucks',
      src:'https://www.youtube.com/embed/6BkWKFB6b3I',
      description:'Replacing Bikes',
      comment: 'Keep rocking man!!'
    },
    {
    	id:'12',
      name:'Outside Semi Tire Repair',
      category: 'trucks',
      src:'https://www.youtube.com/embed/9-Y41reTuMU',
      description:'Tire Repairing',
      comment: 'Damm u  do it just like I used to before my accident'
    }

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


      $scope.searchValue = $scope.videos;

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







