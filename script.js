const argentina1 = [
    {name:'Prashant',initInv:100, status:true},
    {name:'JD',initInv:50, status:true},
    {name:'Bijay',initInv:75, status:true},
    {name:'Aayush',initInv:50, status:false},
    {name:'Sujal',initInv:50, status:false},
    {name:'Hardik',initInv:50, status:false},
    {name:'Sampurna',initInv:50, status:true},
    {name:'Arun',initInv:50, status:true},
    {name:'Renzeen',initInv:50, status:false},
    {name:'Dhiraj',initInv:50, status:false},
    {name:'Barun',initInv:10, status:true},
    {name:'Reshman',initInv:20, status:false}
  ];
  
  const france1 = [
    {name:'Anushka',initInv:20, status:true},
    {name:'Nischit',initInv:50, status:true},
    {name:'Sunil',initInv:50, status:true},
    {name:'Yugank',initInv:50, status:false},
    {name:'Rojal',initInv:50, status:false},
    {name:'Bidharva',initInv:100, status:true},
    {name:'Amul',initInv:100, status:true},
    {name:'Kritim',initInv:100, status:false},
    {name:'Kanxa',initInv:100, status:false},
    {name:'Bhavesh',initInv:100, status:true},
    {name:'Aaditya R.',initInv:50, status:false},
    {name:'Aaditya S.',initInv:10, status:true}
  ];
  //dummy total
  let total1 = 0;
  //total amount on argentina
  let totalArg1 = displayInitInv(argentina1, 'ARGENTINA', true);
  //total amount on france
  let totalFra1 = displayInitInv(france1, 'FRANCE', true)
  //the sum total amount
  let sumTotal1 = totalArg1+totalFra1;
  
  //declare the winning team here
  let winningTeam1 = 'france';
  
  //deez bets charge here
  let deezBetsCharge1 = 14.99; 
  let deezBetsCom1 = 0;
  
  function displayInitInv(array, contname, dispVal){
      //use this function to display all inital investments
      //and also to get returned the total value bet on a country
  
      //array parameter takes the array with objects
      //contname parameter takes a string with the country name(all large)
      //dispVal takes a boolean which prints the list if true and not if false
  
      if(dispVal){console.log('\n------- '+contname+' SUP -------\n')}
      array.forEach((a)=>{
          if(dispVal){
              console.log(a.name +' invested = Rs.'+a.initInv +' '+ a.status);
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
  console.log(deezBetsCom);