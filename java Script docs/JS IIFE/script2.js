(function(window) {
    var banduGreeter = {};
    banduGreeter.name = "bandu";
    var greeting = "hi "
    banduGreeter.sayHi = function() {
        console.log(greeting + banduGreeter.name);
    }
    window.banduGreeter = banduGreeter;
})(window);