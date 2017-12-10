function theBeatlesPlay(musicians, instruments){
  var whoIsWho = [];
  for(var i = 0; i < 4; i++){
    whoIsWho.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return whoIsWho;
}
theBeatlesPlay();

function johnLennonFacts(ducks){
  var fax = [];
  var f = 0;
  while(f < ducks.length){
    fax.push(ducks[f] + '!!!');
    f++;
  }
  return fax;
}
johnLennonFacts(array);

function iLoveTheBeatles(number){
  var magic = [];
  var things = 0;
  do{
    magic.push("I love the Beatles!");
    things++;
  }while(things < number + 1);
    return magic;
  }
iLoveTheBeatles(7);
