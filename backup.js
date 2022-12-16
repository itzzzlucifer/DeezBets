const argentina = [
    {name:'Prashant',initInv:100},
    {name:'JD',initInv:50},
    {name:'Bijay',initInv:75},
    {name:'Aayush',initInv:50},
    {name:'Sujal',initInv:50},
    {name:'Hardik',initInv:50},
    {name:'Sampurna',initInv:50},
    {name:'Arun',initInv:50},
    {name:'Renzeen',initInv:50},
    {name:'Dhiraj',initInv:50},
    {name:'Barun',initInv:10},
    {name:'Reshman',initInv:20}
  ];
  
  const france = [
    {name:'Anushka',initInv:20},
    {name:'Nischit',initInv:50},
    {name:'Sunil',initInv:50},
    {name:'Yugank',initInv:50},
    {name:'Rojal',initInv:50},
    {name:'Bidharva',initInv:100},
    {name:'Amul',initInv:100},
    {name:'Kritim',initInv:100},
    {name:'Kanxa',initInv:100},
    {name:'Bhavesh',initInv:100},
    {name:'Aaditya R.',initInv:50},
    {name:'Aaditya S.',initInv:10}
  ];
  //dummy total
  let total = 0;
  //total amount on argentina
  let totalArg = displayInitInv(argentina, 'ARGENTINA', false);
  //total amount on france
  let totalFra = displayInitInv(france, 'FRANCE', false)
  //the sum total amount
  let sumTotal = totalArg+totalFra;
  
  //declare the winning team here
  let winningTeam = 'france';
  
  //deez bets charge here
  let deezBetsCharge = 14.99; 
  let deezBetsCom = 0;
  
  function displayInitInv(array, contname, dispVal){
      //use this function to display all inital investments
      //and also to get returned the total value bet on a country
  
      //array parameter takes the array with objects
      //contname parameter takes a string with the country name(all large)
      //dispVal takes a boolean which prints the list if true and not if false
  
      if(dispVal){console.log('\n------- '+contname+' SUP -------\n')}
      array.forEach((a)=>{
          if(dispVal){
              console.log(a.name +' invested = Rs.'+a.initInv);
          }
          total += a.initInv;
      });
      if(dispVal){console.log(`\n\t--->${contname} TOTAL = Rs.${total}\n----------------------------`);}
      let dem = total;
      total = 0;
      return dem;
  }
  //displaying the sum total
  console.log(`The SUM total is = Rs.${sumTotal}`);
  function totalReturn(name, inv, win){
      //use this function to print the return of investment values
  
      //name takes the name of investor
      //inv takes the initial investment of investor
      //win takes the name of the winning country(all small) as string
      
      let currentTotal = 0;
      let opposingTotal = 0;
      if(win == 'argentina'){
          currentTotal = totalArg; 
          opposingTotal = totalFra;
      }
      else if(win == 'france'){
          currentTotal = totalFra;
          opposingTotal = totalArg;
      }
      deezBetsCom = (deezBetsCharge/100)*opposingTotal;
      
      let totalReturn = Math.floor(inv + (inv/currentTotal)*(opposingTotal-deezBetsCom));
      console.log(`${name}\n\t-invested =>${inv}\n\t-return => ${totalReturn}\n\t-profit => ${totalReturn-inv}\n`);
  }
  function showReturns(){
      if(winningTeam == 'argentina'){
          for(let i = 0;i < argentina.length;i++){
              totalReturn(argentina[i].name, argentina[i].initInv, winningTeam);
          }
      }
      else if(winningTeam == 'france'){
          for(let i = 0;i < france.length;i++){
              totalReturn(france[i].name, france[i].initInv, winningTeam);
          }
      }
  }
  showReturns();
  console.log(deezBetsCom);