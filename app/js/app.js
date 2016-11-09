'use strict';
angular.module('wreckhelpApp', [])
.controller('ContactController', ['$scope', function($scope) {
    $scope.feedback = {name:"", email:"", message:""};
}])

.controller('MenuController',['$scope', function($scope) {
  $scope.tab = 1;
  $scope.filtText = '';
  $scope.showDetails=false;
  $scope.showSelf = false;
  
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
      name:'Bike Engine Repairing',
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
      name:'How to remove scratches from car permanently',
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
  		title:'Humble Mechanics',
  		article:'A behind the scene look at Volkswagen repair, dealership life, and the crazy things that mechanics see.This site was built to help everyone. It does not matter what type of car you own. Many of the things they talk about do not apply to just Volkswagens.',
  		src:'images/selfhelp/humblemechanic.jpg',
  		link:'http://humblemechanic.com/',
  		category: 'cars'
  	},
  	{
  		id:'2',
  		title:'Car Mechanic Mag',
  		article:'Car Mechanics magazine is packed with essential advice on maintaining and repairing popular makes and models. It\'s an invaluable motoring resource that appeals to both the DIY car enthusiast at home and the more experienced motor trade professional. Many cool stuff can be found in its online version',
  		src:'images/selfhelp/carmechanic.jpg',
  		link:'http://www.carmechanicsmag.co.uk/home',
  		category:'cars'
  	},
  	{
  		id:'3',
  		title:'Auto Repair Yourself',
  		article:'An auto repair problem is something nobody wants. But after so many miles, auto parts wear out and fail, and have to be replaced. All vehicles also require a certain amount of maintenance like oil and filter changes, new brake linings, tires and so on. Whether you choose to do the auto repairs yourself or to take your vehicle to a repair shop or dealership, it is always a good idea to learn as much as possible about any auto repairs that might be needed beforehand.',
  		src:'images/selfhelp/autorepairyourself.jpg',
  		link:'http://www.autorepairyourself.com/',
  		category: 'trucks'
  	},
  	{
  		id:'4',
  		title:'MeriCar',
  		article:'MeriCAR.com is helping car owners to search nearest Maruti, Hyundai, Tata and Other Authorized and Multibrand Car Service station,  Carnation, Mahindra First Choice Service, Bosch Car Service and Local Repair Shops and small car garages in India.',
  		src:'images/selfhelp/mericar.jpg',
  		link:'http://www.mericar.com/car_service_center/',
  		category: 'cars'
  	},
  	{
  		id:'5',
  		title:'Gear6',
  		article: 'Bike Maintenance Made Easy . Just hit gear6.in and select the service that you need. They will pick your bike from home/office. They will drop your bike right back to your doorstep after repair.',
  		src:'images/selfhelp/gear6.png',
  		link:'https://www.gear6.in/',
  		category: 'bikes'
  	},
  	{
  		id:'6',
  		title:'Drivojoy',
  		article: 'Be it your home, office or anywhere else, our mechanics will tend to your bike in 90min* so you don’t have to spend an entire day in the garage',
  		src:'images/selfhelp/drivojoy.jpg',
  		link:'http://www.drivojoy.com/',
  		category: 'bikes'
  	},
  	{
  		id:'7',
  		title:'Gaadi360',
  		article: 'Book your motorbike service. Its easy, convenient and with zero booking charges . Your motorbike will be picked, serviced and delivered to you, at no extra cost .',
  		src:'images/selfhelp/gaadi360.png',
  		link:'https://gaadi360.com/',
  		category: 'bikes'
  	},
  	{
  		id:'8',
  		title:'JR Truck Service',
  		article: 'Here at JR Truck Repair Service we deal with all of our customers on a close 1 on 1 basis, the goal is to  always  offer a very personalized and satisfying truck repair experience. The needs of the customer always  come first and that is  why we are  100%  service  oriented.',
  		src:'images/selfhelp/jr.png',
  		link:'http://www.jrtruckrepairservice.com/',
  		category: 'trucks'
  	},
  	{
  		id:'9',
  		title:'WoodDale',
  		article: 'Your diesel truck or heavy machinery can face a variety of problems. Located in Kolkata, Wooddale Truck Repair Service Inc. specializes in diesel truck repairs to get you back on the road with quality repairs. From a simple brake job to diesel transmission and engine repairs, our diesel mechanics have you covered. At Wooddale Truck Repair we have broad capability and can manage maintenance on tractors, engines, and trailers of all makes and types.',
  		src:'images/selfhelp/wooddale.png',
  		link:'http://wtrsbr.com/',
  		category: 'trucks'
  	},
  ];


      
    $scope.submitFilter=function(){
      $scope.searchValue = $scope.videos;
      $scope.showSelf = true;
    };

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







