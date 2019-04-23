<!DOCTYPE html>
<html>
<title>W3.JS</title>
<script src="https://www.w3schools.com/lib/w3.js"></script>
<body>

<h2>Testing W3.JS in HTML</h2>

<p w3-include-html="content.html"></p> 

<script>
w3.includeHTML();
</script>
<script>
        w3.includeHTML(myCallback);
        
        function myCallback() {
          // code that has to wait goes here
        }
        </script>
</body>
</html>