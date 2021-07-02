'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let city =[]
let divEl = document.getElementById('container');
let table = document.createElement('table');
divEl.appendChild(table);

function City (minCustomers,maxCustomers,avNumPerh,name) {
    this.minCustomers=minCustomers;
    this.maxCustomers=maxCustomers;
    this.avNumPerh=avNumPerh;
    this.name=name;
    this.totalcookiesPerHour = [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
  this.totalcookies=0,
  city.push(this);
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
console.log(city);

function TableFooter () {
   
    let lastTotal=0;
        let footer=document.createElement('tfoot');
        window.footer2=footer;
        footer.textContent='totals';
        table.appendChild(footer);
        for (let i=0; i<hours.length+1; i++) {
            let totals=0;
        
            for (let j=0; j<city.length; j++) {
            totals=totals + city[j].totalcookiesPerHour[i];
            
        
            }
        let tdFooter = document.createElement('td');
        window.td=tdFooter;
        tdFooter.textContent= totals;
        footer.appendChild(tdFooter);
    }
    
    for (let j=0; j<city.length; j++) {
        lastTotal=lastTotal+city[j].totalcookies-(city[j].totalcookiesPerHour[city[j].totalcookiesPerHour.length-1]);
    }
            td.textContent=lastTotal;
            
    }
        

    TableFooter();




    let newForm= document.getElementById('newForm');
    newForm.addEventListener('submit', addCity);
    function addCity (event) {
        event.preventDefault();
        let name = event.target.city.value;
        let minCustomers= Number(event.target.minCustomers.value);
        let maxCustomers = Number(event.target.maxCustomers.value);
        let avNumPerh = Number(event.target.AvgNumber.value);
        let addedCity= new City (minCustomers,maxCustomers,avNumPerh,name);
      
  addedCity.custPerHour(minCustomers,maxCustomers);
  addedCity.render();
  footer2.textContent= null;
  TableFooter();
  
        }

    









