// --------- COMPANIES ARRAY ----------
var companies = [

    //------- company No. 1 (Ferrari) -------- 
    {
        comp1Name : "FERRARI",

        comp1Prods : [

            {
                
               p1Name : "Ferrari F8",
               p1Price : 1099000,
               p1SellQuantity : 2265,
            //    p1TotalRevenue : companies[0].comp3Prods[0].p1Price * companies[0].comp3Prods[0].p1SellQuantity,
            // yehn pr access hona possible nhe h, obj k bahir ho sakta h

            },

            {
                
               p2Name : "Ferrari F12",
               p2Price : 880000,
               p2SellQuantity : 812,
            //    p2TotalRevenue : 50000 * 15,

            },

            {
                
               p3Name : "Ferrari F40",
               p3Price : 3750000,
               p3SellQuantity : 1315,
            //    p3TotalRevenue : 50000 * 15,

            },
        ],

        // comp4TotalRevenue : comp4Prods[0].p1TotalRevenue +  comp4Prods[1].p2TotalRevenue +  comp4Prods[2].p2TotalRevenue; 
        // YE BHI OBJ K BAHR ACCESS HO SAKTA H


    },

    //------- company No. 2 (Lamborghini) --------
    {
        comp2Name : "LAMBORGHINI",

        comp2Prods : [

            {

               p1Name : "lamborghini aventador sv",
               p1Price : 550542,
               p1SellQuantity : 900, 

            },

            {
                
               p2Name : "Lamborghini Sian FKP 37",
               p2Price : 13500000,
               p2SellQuantity : 63,

            },

            {
                
               p3Name : "Lamborghini Huracán",
               p3Price : 249865,
               p3SellQuantity : 1499,

            },
        ],


    },


    //------- company No. 3 (Toyota) -------- @
    {
        comp3Name : "TOYOTA",

        comp3Prods : [

            {
                
               p1Name : "TOYTOA SUPRA",
               p1Price : 60535,
               p1SellQuantity : 2652,

            },

            {
                
               p2Name : "toyota GT 86",
               p2Price : 21763,
               p2SellQuantity : 4133,

            },

            {
                
               p3Name : "Totota Fortuner 4 x 4 legender",
               p3Price : 19014000,
               p3SellQuantity : 3500,

            },
        ],


    },

    //------- company No. 4 (Audi) --------
    {
        comp4Name : "AUDI",

        comp4Prods : [

            {

               p1Name : "Audi R8",
               p1Price : 71228800,
               p1SellQuantity : 631,
               // obj k bahi product store krwa sakty hn (valid relation de kr) 

            },

            {
                
               p2Name : "Audi E-tron",
               p2Price : 51000000,
               p2SellQuantity : 7503,

            },

            {
                
               p3Name : "Audi Q8",
               p3Price : 85000000,
               p3SellQuantity : 2995,

            },
        ],


    },


];

// console.log(companies);
// console.log(companies[0].comp3Prods[0].p1Name);


// ------- COMPANY 1 'DATA DISPLAY IN TABLE' ------
document.getElementById("1p1:1").innerHTML = companies[0].comp1Prods[0].p1Name;
document.getElementById("1p1:2").innerHTML = companies[0].comp1Prods[0].p1Price;
document.getElementById("1p1:3").innerHTML = companies[0].comp1Prods[0].p1SellQuantity;
// document.getElementById("3p1:4").innerHTML = companies[0].comp3Prods[0].p1TotalRevenue;
var comp1P1TotalRevenue = document.getElementById("1p1:4").innerHTML = companies[0].comp1Prods[0].p1Price * companies[0].comp1Prods[0].p1SellQuantity;

document.getElementById("1p2:1").innerHTML = companies[0].comp1Prods[1].p2Name;
document.getElementById("1p2:2").innerHTML = companies[0].comp1Prods[1].p2Price;
document.getElementById("1p2:3").innerHTML = companies[0].comp1Prods[1].p2SellQuantity;
// document.getElementById("3p2:4").innerHTML = companies[0].comp3Prods[1].p2TotalRevenue;
var comp1P2TotalRevenue = document.getElementById("1p2:4").innerHTML = companies[0].comp1Prods[1].p2Price * companies[0].comp1Prods[1].p2SellQuantity;

document.getElementById("1p3:1").innerHTML = companies[0].comp1Prods[2].p3Name;
document.getElementById("1p3:2").innerHTML = companies[0].comp1Prods[2].p3Price;
document.getElementById("1p3:3").innerHTML = companies[0].comp1Prods[2].p3SellQuantity;
// document.getElementById("3p3:4").innerHTML = companies[0].comp3Prods[2].p3TotalRevenue;
var comp1P3TotalRevenue = document.getElementById("1p3:4").innerHTML = companies[0].comp1Prods[2].p3Price * companies[0].comp1Prods[2].p3SellQuantity;

document.getElementById("comp1TotalRevenue").innerHTML =  comp1P1TotalRevenue + comp1P2TotalRevenue + comp1P3TotalRevenue;









// ------- COMPANY 2 'DATA DISPLAY IN TABLE' ------
document.getElementById("2p1:1").innerHTML = companies[1].comp2Prods[0].p1Name;
document.getElementById("2p1:2").innerHTML = companies[1].comp2Prods[0].p1Price;
document.getElementById("2p1:3").innerHTML = companies[1].comp2Prods[0].p1SellQuantity;
var comp2P1TotalRevenue = document.getElementById("2p1:4").innerHTML = companies[1].comp2Prods[0].p1Price * companies[1].comp2Prods[0].p1SellQuantity;


document.getElementById("2p2:1").innerHTML = companies[1].comp2Prods[1].p2Name;
document.getElementById("2p2:2").innerHTML = companies[1].comp2Prods[1].p2Price;
document.getElementById("2p2:3").innerHTML = companies[1].comp2Prods[1].p2SellQuantity;
var comp2P2TotalRevenue = document.getElementById("2p2:4").innerHTML = companies[1].comp2Prods[1].p2Price * companies[1].comp2Prods[1].p2SellQuantity;


document.getElementById("2p3:1").innerHTML = companies[1].comp2Prods[2].p3Name;
document.getElementById("2p3:2").innerHTML = companies[1].comp2Prods[2].p3Price;
document.getElementById("2p3:3").innerHTML = companies[1].comp2Prods[2].p3SellQuantity;
var comp2P3TotalRevenue = document.getElementById("2p3:4").innerHTML = companies[1].comp2Prods[2].p3Price * companies[1].comp2Prods[2].p3SellQuantity;


document.getElementById("comp2TotalRevenue").innerHTML = comp2P1TotalRevenue + comp2P2TotalRevenue + comp2P3TotalRevenue; 









// ------- COMPANY 3 'DATA DISPLAY IN TABLE' ------
document.getElementById("3p1:1").innerHTML = companies[2].comp3Prods[0].p1Name;
document.getElementById("3p1:2").innerHTML = companies[2].comp3Prods[0].p1Price;
document.getElementById("3p1:3").innerHTML = companies[2].comp3Prods[0].p1SellQuantity;
var comp3P1TotalRevenue = document.getElementById("3p1:4").innerHTML = companies[2].comp3Prods[0].p1Price * companies[2].comp3Prods[0].p1SellQuantity;



document.getElementById("3p2:1").innerHTML = companies[2].comp3Prods[1].p2Name;
document.getElementById("3p2:2").innerHTML = companies[2].comp3Prods[1].p2Price;
document.getElementById("3p2:3").innerHTML = companies[2].comp3Prods[1].p2SellQuantity;
var comp3P2TotalRevenue = document.getElementById("3p2:4").innerHTML = companies[2].comp3Prods[1].p2Price * companies[2].comp3Prods[1].p2SellQuantity;



document.getElementById("3p3:1").innerHTML = companies[2].comp3Prods[2].p3Name;
document.getElementById("3p3:2").innerHTML = companies[2].comp3Prods[2].p3Price;
document.getElementById("3p3:3").innerHTML = companies[2].comp3Prods[2].p3SellQuantity;
var comp3P3TotalRevenue = document.getElementById("3p3:4").innerHTML = companies[2].comp3Prods[2].p3Price * companies[2].comp3Prods[2].p3SellQuantity;
// console.log(comp2P3TotalRevenue);


document.getElementById("comp3TotalRevenue").innerHTML = comp3P1TotalRevenue + comp3P2TotalRevenue + comp3P3TotalRevenue;








// ------- COMPANY 4 'DATA DISPLAY IN TABLE' ------
document.getElementById("4p1:1").innerHTML = companies[3].comp4Prods[0].p1Name;
document.getElementById("4p1:2").innerHTML = companies[3].comp4Prods[0].p1Price;
document.getElementById("4p1:3").innerHTML = companies[3].comp4Prods[0].p1SellQuantity;
var comp4P1TotalRevenue = document.getElementById("4p1:4").innerHTML = companies[3].comp4Prods[0].p1Price * companies[3].comp4Prods[0].p1SellQuantity;



document.getElementById("4p2:1").innerHTML = companies[3].comp4Prods[1].p2Name;
document.getElementById("4p2:2").innerHTML = companies[3].comp4Prods[1].p2Price;
document.getElementById("4p2:3").innerHTML = companies[3].comp4Prods[1].p2SellQuantity;
var comp4P2TotalRevenue = document.getElementById("4p2:4").innerHTML = companies[3].comp4Prods[1].p2Price * companies[3].comp4Prods[1].p2SellQuantity;



document.getElementById("4p3:1").innerHTML = companies[3].comp4Prods[2].p3Name;
document.getElementById("4p3:2").innerHTML = companies[3].comp4Prods[2].p3Price;
document.getElementById("4p3:3").innerHTML = companies[3].comp4Prods[2].p3SellQuantity;
var comp4P3TotalRevenue = document.getElementById("4p3:4").innerHTML = companies[3].comp4Prods[2].p3Price * companies[3].comp4Prods[2].p3SellQuantity;


document.getElementById("comp4TotalRevenue").innerHTML = comp4P1TotalRevenue + comp4P2TotalRevenue + comp4P3TotalRevenue; 
 








// function samsung(samsungPN,samsungPP,samsungPQ) {
 
//     var samsungP1 = {
    
//     p1Name : samsungPN,
//     p1Price : samsungPP,
//     p1SellQuantity : samsungPQ,
//     p1TotalRevenue : samsungPP * samsungPQ,  

// };

// }

// samsung("Samsung Galaxy S22 Ultra",20000,55);

// // document.getElementById('p1:1').innerHTML = samsungP1.p1Name;
// // document.getElementById('p1:2').innerHTML = samsungP1.p1Price;
// // document.getElementById('p1:3').innerHTML = samsungP1.p1SellQuantity;
// // document.getElementById('p1:4').innerHTML = samsungP1.p1TotalRevenue;

// // ----- objects for samsung products ------

// var p1PriceNum = 25000;
// var p1SellQuantityNum = 70;

// var samsungP1 = {
    
//     p1Name : "Samsung Galaxy S22 Ultra",
//     p1Price : p1PriceNum,
//     p1SellQuantity : p1SellQuantityNum,
//     p1TotalRevenue : p1SellQuantityNum * p1PriceNum,
//     // p1TotalRevenue : samsungP1[p1Price] * samsungP1[p1SellQuantity],
//     // p1TotalRevenue : samsungP1.p1Price * samsungP1.p1SellQuantity,   

// };

// // var p1TotalRevenue = samsungP1.p1Price * samsungP1.p1SellQuantity;
// // console.log(samsungP1.p1Price*samsungP1.p1SellQuantity);
// // console.log(samsungP1);

// document.getElementById('1p1:1').innerHTML = samsungP1.p1Name;
// document.getElementById('1p1:2').innerHTML = samsungP1.p1Price;
// document.getElementById('1p1:3').innerHTML = samsungP1.p1SellQuantity;
// document.getElementById('1p1:4').innerHTML = samsungP1.p1TotalRevenue;
// // document.getElementById('1').innerHTML = samsungP1.p1TotalRevenue;


// // ------ samsungP2 --------
// var p2PriceNum = 85000;
// var p2SellQuantityNum = 110;

// var samsungP2 = {
    
//     p2Name : "Samsung QLED 4K Smart T2",
//     p2Price : p2PriceNum,
//     p2SellQuantity : p2SellQuantityNum,
//     p2TotalRevenue : p2SellQuantityNum * p2PriceNum, 

// };

// document.getElementById('1p2:1').innerHTML = samsungP2.p2Name;
// document.getElementById('1p2:2').innerHTML = samsungP2.p2Price;
// document.getElementById('1p2:3').innerHTML = samsungP2.p2SellQuantity;
// document.getElementById('1p2:4').innerHTML = samsungP2.p2TotalRevenue;



// // ------ samsungP3 --------
// var p3PriceNum = 15000;
// var p3SellQuantityNum = 66;

// var samsungP3 = {
    
//     p3Name : "Samsung Galaxy Watch5",
//     p3Price : p3PriceNum,
//     p3SellQuantity : p3SellQuantityNum,
//     p3TotalRevenue : p3SellQuantityNum * p3PriceNum, 

// };

// document.getElementById('1p3:1').innerHTML = samsungP3.p3Name;
// document.getElementById('1p3:2').innerHTML = samsungP3.p3Price;
// document.getElementById('1p3:3').innerHTML = samsungP3.p3SellQuantity;
// document.getElementById('1p3:4').innerHTML = samsungP3.p3TotalRevenue;

// document.getElementById('1').innerHTML = samsungP1.p1TotalRevenue + samsungP2.p2TotalRevenue + samsungP3.p3TotalRevenue;



// var vivo = [

//     {

//         p1Name : "Tecno",
//         p1Price : 18000,
//         p1SellQuantity : 15,
//         p1TotalRevenue : 18000 * 15,

//     },

//     {

//         p2Name : "Tecno222",
//         p2Price : 49000,
//         p2SellQuantity : 84,
//         p2TotalRevenue : 50000 * 15,

//     },

//     {

//         p3Name : "Tecno333",
//         p3Price : 95000,
//         p3SellQuantity : 94,
//         p3TotalRevenue : 50000 * 15,

//     },

// ];

// document.getElementById('2p1:1').innerHTML = vivo[0].p1Name;
// document.getElementById('2p1:2').innerHTML = vivo[0].p1Price;
// document.getElementById('2p1:3').innerHTML = vivo[0].p1SellQuantity;
// document.getElementById('2p1:4').innerHTML = vivo[0].p1TotalRevenue;

// document.getElementById('2p2:1').innerHTML = vivo[1].p2Name;
// document.getElementById('2p2:2').innerHTML = vivo[1].p2Price;
// document.getElementById('2p2:3').innerHTML = vivo[1].p2SellQuantity;
// document.getElementById('2p2:4').innerHTML = vivo[1].p2TotalRevenue;

// document.getElementById('2p3:1').innerHTML = vivo[2].p3Name;
// document.getElementById('2p3:2').innerHTML = vivo[2].p3Price;
// document.getElementById('2p3:3').innerHTML = vivo[2].p3SellQuantity;
// document.getElementById('2p3:4').innerHTML = vivo[2].p3TotalRevenue;


// document.getElementById('2').innerHTML = vivo[0].p1TotalRevenue + vivo[1].p2TotalRevenue + vivo[2].p3TotalRevenue;



















