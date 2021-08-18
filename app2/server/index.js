const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3005;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.get("/orders", (req, res) => {
  res.json({ orders });
});*/

app.get('/api', (req, res) => {
  return res.send(`<div style="height: 100px; display: flex; align-items: center; justify-content: center; background-color: rgba(0, 255, 0, 0.3); gap: 16px;">
                <div >
                  SSR content, click me
                </div>
                <button id="click-me" >Click me</button>
                <button id="navigation" >Toggle navigation</button>
            </div>
            <script type="text/javascript" class="legacy-script">
             var clickMe = document.getElementById("click-me");
               clickMe.onclick = function() {
                  alert("JS from server");
                  return false;
              };
               
               const getCookie = key =>
                document.cookie.split("; ").reduce((total, currentCookie) => {
                  const item = currentCookie.split("=");
                  const storedKey = item[0];
                  const storedValue = item[1];
              
                  return key === storedKey ? decodeURIComponent(storedValue) : total;
                }, "");
               const setCookie = (key, value) => {
                 document.cookie = key + "=" + value + "; path=/;";
               };
                   
              var navigation = document.getElementById("navigation");
               navigation.onclick = function() {
                 const previousValue = getCookie("@micro-frontend-poc/appdrawer/open");             
                 setCookie("@micro-frontend-poc/appdrawer/open", previousValue !== "true" );
                 return false;
              };
            </script>
  `);
});

app.get('/api-iframe', (req, res) => {
  return res.send(`<html>
        <head>
          <!--<link rel="stylesheet" href="./styles.css">-->
        </head>
        <body style="margin: 0">
         <div style="height: 100px; display: flex; align-items: center; justify-content: center; background-color: rgba(0, 0, 255, 0.3); gap: 16px;">
                <div >
                  SSR content
                </div>
                <button id="click-me" >Click me</button>
                <button id="navigation" >Toggle navigation</button>
            </div>
                 <script type="text/javascript" class="legacy-script">
             var clickMe = document.getElementById("click-me");
               clickMe.onclick = function() {
                  alert("JS from server");
                  return false;
              };
              
              const getCookie = key =>
                document.cookie.split("; ").reduce((total, currentCookie) => {
                  const item = currentCookie.split("=");
                  const storedKey = item[0];
                  const storedValue = item[1];
              
                  return key === storedKey ? decodeURIComponent(storedValue) : total;
                }, "");
               const setCookie = (key, value) => {
                 document.cookie = key + "=" + value + "; path=/;";
               };
                   
              var navigation = document.getElementById("navigation");
               navigation.onclick = function() {
                 const previousValue = getCookie("@micro-frontend-poc/appdrawer/open");             
                 setCookie("@micro-frontend-poc/appdrawer/open", previousValue !== "true" );
                 return false;
              };
            </script>
      </body>
</html> 
  `);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
