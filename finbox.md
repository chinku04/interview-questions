<!DOCTYPE html>
<html>
  <head>
    <title>Hello, World!</title>
    <link rel="stylesheet" href="styles.css" />
    <style>
       #currentTime {
      background-image: url('https://images.pexels.com/photos/920382/pexels-photo-920382.jpeg?cs=srgb&dl=pexels-olly-920382.jpg');
      background-size: cover;
      background-position: center;
      color: white;
      padding: 20px;
      font-size: 24px;
    }
    </style>
  </head>
  <body>
      <h1 class="title">Hello World! </h1>
      <p id="currentTime"></p>
      <img height="250" width="500" src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Mar/updated/7-1._CB546839152_.png"/>
      <img height="250" width="500"style="margin-top:20px" src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/MSO5/Boat_PC_CC_758x608_2x._SY608_CB564383870_.jpg"/>
      <script src="script.js"></script>
  </body>
</html>


find all image imgUrls
const imgElements = document.querySelectorAll('img');
const imgUrls=Array.from(imgElements).map(img=>img.src);


const imgelements=document.querySelectorAll('*');
const bgUrl=Array.from(imgelements).map((item,index)=>getComputedStyle(item).backgroundImage).filter((bg)=>bg && bg!=="none")

const result=[...imgUrls,...bgUrl];
console.log("result",result);



--------------------------------------------------------------------------------------------------------------------------------

Asked 3 sum problem

--------------------------------------------------------------------------------------------------------------------------------------------


deepcopy and shalow copy 

--------------------------------------------------------------------------------------------------------------------------------------------
--------------------------------------------------------------------------------------------------------------------------------------------


output after deepcopy
const obj = {
  a: undefined,
  b: () => {},
  c: new Date(),
};

--------------------------------------------------------------------------------------------------------------------------------------------
const imgElements = document.querySelectorA... by Kuljeet Keshav
7:34 PM
Kuljeet Keshav
const imgElements = document.querySelectorAll('img');
const imgUrls=Array.from(imgElements).map(img=>img.src);
 
 
const imgelements=document.querySelectorAll('*');
const bgUrl=Array.from(imgelements).map((item,index)=>getComputedStyle(item).backgroundImage).filter((bg)=>bg && bg!=="none")
 
const result=[...imgUrls,...bgUrl];
console.log("result",result);
[-1, 0, 1, 2, -1, -4] [[-1, -1, 2], [-1, 0,... by Chetan Dhiman
Chetan Dhiman
7:34 PM
[-1, 0, 1, 2, -1, -4]
[[-1, -1, 2], [-1, 0, 1]]
targetSum =0
const obj = {   a: undefined,   b: () =... by Chetan Dhiman
Chetan Dhiman
7:55 PM
const obj = {
  a: undefined,
  b: () => {},
  c: new Date(),
};
has context menu


has context menu