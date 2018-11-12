function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 9)
    : cb();
};

ready(function(){
    const App = {
        init: function() {
            console.log('Initialize the app.');
            this.registerWaypoints(); // Register the waypoints
        },
        registerWaypoints: function() {
            let personElements = document.querySelectorAll('.orb-wrapper');
            for(let i=0;i<personElements.length;i++) {
                let personElement = personElements[i];
                console.log(i);
                let waypoint = new Waypoint({
                    element: personElement,
                    handler: function(direction) {
                        if(direction == 'down') {
                            this.element.classList.add('orb--show');
                        } else {
                            this.element.classList.remove('orb--show');
                        }
                    },
                    offset: '50%'
                });
            }
        }
    }

    App.init(); // Initalize the app by calling the init() function
});