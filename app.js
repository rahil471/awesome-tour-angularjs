angular.module('myApp', ['ngMaterial', 'nzTour'])
.controller('awesomeCtrl', ['nzTour', function(nzTour){
    var tourConfig = {
        config: {
            disableInteraction: true,
            animationDuration: 300,
        }, // see config
        steps: [{
            target: '#home',
            placementPriority: 'bottom',
            content: 'Navigate to Home from here',
        }, {
            target: '#about',
            placementPriority: 'bottom',
            content: 'Navigate to About from here',
        }, {
            target: '#large-card',
            content: 'This is a large card',
        }, {
            target: '#small-card',
            content: 'This is a small card',
        },
        {
            target: '#action-buttons',
            content: 'Interact with the card using the action buttons',
        }]
    }

    this.startTour = function(){
        nzTour.start(tourConfig).then(function() { //start tour
        console.log('Tour Finished!');
        })
        .catch(function() {
            console.log('Tour Aborted!')
        });
    }

    this.startTour();
}]);