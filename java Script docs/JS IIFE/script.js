(function(window) {
    var chanduGreeter = {};
    chanduGreeter.name = "chandu";
    var greeting = "hello ";
    chanduGreeter.sayHello = function() {
        console.log(greeting + chanduGreeter.name);
    }
    window.chanduGreeter = chanduGreeter;
})(window);