//event handling
document.addEventListener("DOMContentLoaded",
    function(event) {
        function show(event) {
            console.log(event);
            this.textContent = "said id";
            var name = document.getElementById("name").value;
            var msg = "<h2>hello " + name + " </h2>";
            document.getElementById("content").innerHTML = msg;

            if (name == "student") {
                var title = document.querySelector("#title").textContent;
                document.getElementById("title").innerHTML = title + " student";
            }
        }
        // this way we can add selectors in JS instead of html
        // remember not to use parenthesis in function
        document.querySelector("button").addEventListener("click", show);
        document.querySelector("body").addEventListener("mousemove",
            function(event) {
                if (event.shiftKey == true) {
                    console.log("x: " + event.clientX);
                    console.log("y: " + event.clientY);
                }

            }
        );
        //document.querySelector("button").onclick = show;
    }
);