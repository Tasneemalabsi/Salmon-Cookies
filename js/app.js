'use strict'
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


let seattle= { minCustomers : 23,
    maxCustomers : 65,
    avNumPerh : 6.3,
    custPerHour : function (min,max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
    totalcookies : 0,

    render: function() {
        let bodyEl = document.getElementById('bodyEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Seattle';
        bodyEl.appendChild(ulEl);
    
    
        for ( let i = 0; i < hours.length; i++) {
              this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
               }

            for (let i=0; i< this.totalcookiesPerHour.length; i++) {
                let liEl = document.createElement('li');
                window.li2=liEl;
                liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
                ulEl.appendChild(liEl);
                this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
                console.log(this.totalcookies);
               
             }
             li2.textContent= 'total = ' + this.totalcookies;

           
          
        }
        
            
        
            
    }

seattle.render();


let Tokyo = { minCustomers : 3,
    maxCustomers : 24,
    avNumPerh : 1.2,
    custPerHour : function (min,max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
    totalcookies : 0,

    render: function() {
        let bodyEl = document.getElementById('bodyEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Tokyo';
        bodyEl.appendChild(ulEl);
    
    
        for ( let i = 0; i < hours.length; i++) {
              this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
               }

            for (let i=0; i< this.totalcookiesPerHour.length; i++) {
                let liEl = document.createElement('li');
                window.li2=liEl;
                liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
                ulEl.appendChild(liEl);
                this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
                console.log(this.totalcookies);
               
             }
             li2.textContent= 'total = ' + this.totalcookies;

           
          
        }
        
            
        
            
    }

Tokyo.render();


let Dubai = { minCustomers : 11,
    maxCustomers : 38,
    avNumPerh : 3.7,
    custPerHour : function (min,max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
    totalcookies : 0,

    render: function() {
        let bodyEl = document.getElementById('bodyEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Dubai';
        bodyEl.appendChild(ulEl);
    
    
        for ( let i = 0; i < hours.length; i++) {
              this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
               }

            for (let i=0; i< this.totalcookiesPerHour.length; i++) {
                let liEl = document.createElement('li');
                window.li2=liEl;
                liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
                ulEl.appendChild(liEl);
                this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
                console.log(this.totalcookies);
               
             }
             li2.textContent= 'total = ' + this.totalcookies;

           
          
        }
        
            
        
            
    }

Dubai.render();

let Paris= { minCustomers : 20,
    maxCustomers : 38,
    avNumPerh : 2.3,
    custPerHour : function (min,max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
    totalcookies : 0,

    render: function() {
        let bodyEl = document.getElementById('bodyEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Paris'
        bodyEl.appendChild(ulEl);
    
    
        for ( let i = 0; i < hours.length; i++) {
              this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
               }

            for (let i=0; i< this.totalcookiesPerHour.length; i++) {
                let liEl = document.createElement('li');
                window.li2=liEl;
                liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
                ulEl.appendChild(liEl);
                this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
                console.log(this.totalcookies);
               
             }
             li2.textContent= 'total = ' + this.totalcookies;

           
          
        }
        
            
        
            
    }

Paris.render();

let Lima= { minCustomers : 2,
    maxCustomers : 16,
    avNumPerh : 4.6,
    custPerHour : function (min,max) { 
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    totalcookiesPerHour : [],//total cookies per hour=the average number of cookies sold for each customer* the random number of customers at a specific hour
    totalcookies : 0,

    render: function() {
        let bodyEl = document.getElementById('bodyEl');
        let ulEl = document.createElement('ul');
        ulEl.textContent = 'Lima'
        bodyEl.appendChild(ulEl);
    
    
        for ( let i = 0; i < hours.length; i++) {
              this.totalcookiesPerHour.push(Math.floor(this.custPerHour(this.minCustomers, this.maxCustomers) * this.avNumPerh));
            
               }

            for (let i=0; i< this.totalcookiesPerHour.length; i++) {
                let liEl = document.createElement('li');
                window.li2=liEl;
                liEl.textContent = hours[i]+' : '+this.totalcookiesPerHour[i];
                ulEl.appendChild(liEl);
                this.totalcookies=this.totalcookies + this.totalcookiesPerHour[i];
                console.log(this.totalcookies);
               
             }
             li2.textContent= 'total = ' + this.totalcookies;

           
          
        }
        
            
        
            
    }

Lima.render();





