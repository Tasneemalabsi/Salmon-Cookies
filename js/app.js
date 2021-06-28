'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let divEl = document.getElementById('container');
let table = document.createElement('table');
divEl.appendChild(table);

function City (minCustomers,maxCustomers,avNumPerh,name) {
    this.minCustomers=minCustomers;
    this.maxCustomers=maxCustomers;
    this.avNumPerh=avNumPerh;
    this.name=name;
    this.totalcookiesPerHour = [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
  this.totalcookies=0
}
    
    



let Seattle = new City (23,65,6.3,'Seattle');
let Tokyo = new City (3,24,1.2,'Tokyo');
let Dubai = new City (11,38,3.7,'Dubai');
let Paris = new City (20,38,2.3,'Paris');
let Lima = new City (2,16,4.6,'Lima');


function TableHeader (){ 
    let trEl1= document.createElement('tr');
    let thEl1 =document.createElement('th');
    thEl1.textContent='city';
    trEl1.appendChild(thEl1);

    table.appendChild(trEl1);
    for (let i=0; i<hours.length+1; i++) {
        let thEl =document.createElement('th');
        window.thEl2=thEl;
        thEl.textContent=hours[i];
        trEl1.appendChild(thEl);
    }
    thEl2.textContent='total';

}
TableHeader();



City.prototype.custPerHour = function(min,max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};


City.prototype.render= function () {
    
        for ( let i = 0; i < hours.length+1; i++) {
            this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
        
            }
            
            let trEl2 = document.createElement('tr');
            table.appendChild(trEl2);
            let tdhead = document.createElement('td');
    
    
            tdhead.textContent=this.name;
            trEl2.appendChild(tdhead);
    

            for (let i=0; i< this.totalcookiesPerHour.length; i++) {
        
        
        let tdEl = document.createElement('td');
        window.tdEl2=tdEl;
        tdEl.textContent =this.totalcookiesPerHour[i];
        trEl2.appendChild(tdEl);
        this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
        console.log(this.totalcookies);
        
        }
        tdEl2.textContent= this.totalcookies-(this.totalcookiesPerHour[this.totalcookiesPerHour.length-1]);

}
Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();



// function TotalCookiesPerHour () {
//     for ( let i = 0; i < hours.length; i++) {
//         this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
      
//          }
// }




// let seattle= { minCustomers : 23,
//     maxCustomers : 65,
//     avNumPerh : 6.3,
//     name: 'seattle',
//     custPerHour : function (min,max) { 
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
//     totalcookies : 0,

//     render: function() {
//         let bodyEl = document.getElementById('bodyEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Seattle';
//         bodyEl.appendChild(ulEl);
    
    
//         for ( let i = 0; i < hours.length; i++) {
//               this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
//                }

//             for (let i=0; i< this.totalcookiesPerHour.length; i++) {
//                 let liEl = document.createElement('li');
//                 window.li2=liEl;
//                 liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
//                 ulEl.appendChild(liEl);
//                 this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
//                 console.log(this.totalcookies);
               
//              }
//              li2.textContent= 'total = ' + (this.totalcookies-this.totalcookiesPerHour[this.totalcookiesPerHour.length-1]);

           
          
//         }
        
            
        
            
//     }

// seattle.render();


// let Tokyo = { minCustomers : 3,
//     maxCustomers : 24,
//     avNumPerh : 1.2,
//     custPerHour : function (min,max) { 
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
//     totalcookies : 0,

//     render: function() {
//         let bodyEl = document.getElementById('bodyEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Tokyo';
//         bodyEl.appendChild(ulEl);
    
    
//         for ( let i = 0; i < hours.length; i++) {
//               this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
//                }

//             for (let i=0; i< this.totalcookiesPerHour.length; i++) {
//                 let liEl = document.createElement('li');
//                 window.li2=liEl;
//                 liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
//                 ulEl.appendChild(liEl);
//                 this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
//                 console.log(this.totalcookies);
               
//              }
//              li2.textContent= 'total = ' + (this.totalcookies-this.totalcookiesPerHour[this.totalcookiesPerHour.length-1]);

           
          
//         }
        
            
        
            
//     }

// Tokyo.render();


// let Dubai = { minCustomers : 11,
//     maxCustomers : 38,
//     avNumPerh : 3.7,
//     custPerHour : function (min,max) { 
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
//     totalcookies : 0,

//     render: function() {
//         let bodyEl = document.getElementById('bodyEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Dubai';
//         bodyEl.appendChild(ulEl);
    
    
//         for ( let i = 0; i < hours.length; i++) {
//               this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
//                }

//             for (let i=0; i< this.totalcookiesPerHour.length; i++) {
//                 let liEl = document.createElement('li');
//                 window.li2=liEl;
//                 liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
//                 ulEl.appendChild(liEl);
//                 this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
//                 console.log(this.totalcookies);
               
//              }
//              li2.textContent= 'total = ' + (this.totalcookies-this.totalcookiesPerHour[this.totalcookiesPerHour.length-1]);

           
          
//         }
        
            
        
            
//     }

// Dubai.render();

// let Paris= { minCustomers : 20,
//     maxCustomers : 38,
//     avNumPerh : 2.3,
//     custPerHour : function (min,max) { 
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
//     totalcookies : 0,

//     render: function() {
//         let bodyEl = document.getElementById('bodyEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Paris'
//         bodyEl.appendChild(ulEl);
    
    
//         for ( let i = 0; i < hours.length; i++) {
//               this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
//                }

//             for (let i=0; i< this.totalcookiesPerHour.length; i++) {
//                 let liEl = document.createElement('li');
//                 window.li2=liEl;
//                 liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
//                 ulEl.appendChild(liEl);
//                 this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
//                 console.log(this.totalcookies);
               
//              }
//              li2.textContent= 'total = ' + (this.totalcookies-this.totalcookiesPerHour[this.totalcookiesPerHour.length-1]);

           
          
//         }
        
            
        
            
//     }

// Paris.render();

// let Lima= { minCustomers : 2,
//     maxCustomers : 16,
//     avNumPerh : 4.6,
//     custPerHour : function (min,max) { 
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
//     totalcookies : 0,

//     render: function() {
//         let bodyEl = document.getElementById('bodyEl');
//         let ulEl = document.createElement('ul');
//         ulEl.textContent = 'Lima'
//         bodyEl.appendChild(ulEl);
    
    
//         for ( let i = 0; i < hours.length; i++) {
//               this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
//                }

//             for (let i=0; i< this.totalcookiesPerHour.length; i++) {
//                 let liEl = document.createElement('li');
//                 window.li2=liEl;
//                 liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
//                 ulEl.appendChild(liEl);
//                 this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
//                 console.log(this.totalcookies);
               
//              }
//              li2.textContent= 'total = ' + (this.totalcookies-this.totalcookiesPerHour[this.totalcookiesPerHour.length-1]);

           
          
//         }
        
            
        
            
//     }

// Lima.render();





