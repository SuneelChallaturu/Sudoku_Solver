var solver = new SudokuSolver();

function solve()
{
  var s = '';
  for (var i = 0; i < 81; ++i) {
    var y = document.getElementById('C' + i).value;
    if (y >= 1 && y <= 9) {
      s = s+ '' + y;
    } else {
      s = s+ '.';
    }
  }




  var time_beg = new Date().getTime();
  var x = solver.solve(s);

  if(x==="No solution found."){
  	document.getElementById('runtime').innerHTML = x;
  	return
  }
  else{
  var t = (new Date().getTime() - time_beg) / 1000.0;

  document.getElementById('runtime').innerHTML = 'Solved puzzle in ' + t + ' seconds ( ' + t * 1000.0 + ' ms ).';
  s = '';

  for (var z = 0; z < 81; ++z)
  {
    document.getElementById('C' + z).value = x[z];
  }
}
}



function set_9x9(str)
{
  if (str != null && str.length >= 81)
  {
    for (var i = 0; i < 81; ++i)
    {
      document.getElementById('C' + i).value = '';
    }
    for (var j = 0; j < 81; ++j)
    {
      if (str.substr(j, 1) >= 1 && str.substr(j, 1) <= 9)
      {
        document.getElementById('C' + j).value = str.substr(j, 1);
        document.getElementById("C" + j).setAttribute('readonly','true')
      }
    }
  }
}


function draw_9x9()
{
  var s = '<table class="table">\n';

  for (var i = 0; i < 9; ++i)
  {
    s = s+ '<tr>';
    for (var j = 0; j < 9; ++j)
    {
      var c = 'cell';
      if ((i + 1) % 3 == 0 && j % 3 == 0)
      {
        c = 'cell3';
      }
      else if ((i + 1) % 3 == 0) 
      {
        c = 'cell1';
      } 
      else if (j % 3 == 0) 
      {
        c = 'cell2';
      }
      s += '<td class="' + c + '"><input class="input" type="number"  pattern="[0-9]" max="9" min="1" size="1"  id="C' + (i * 9 + j) + '"></td>';
    }
    s += '</tr>\n';
  }

  s += '</table>';
  
  document.getElementById('9x9').innerHTML = s;
  var inp = document.URL;
  var set = false;

  if (inp.indexOf('?') >= 0)
  {
    var match = /[?&]puzzle=([^\s&]+)/.exec(inp);
    if (match.length == 2 && match[1].length >= 81) 
    {
      set_9x9(match[1]);
      set = true;
    }
  }


  if (!set) //on starting page
  {
    set_9x9('001700509573024106800501002700295018009400305652800007465080071000159004908007053');
  }



}





function clear_input()
{
  for (var i = 0; i < 81; ++i) 
  {
    document.getElementById('C' + i).value = '';
  }
}






function setPredefined(lvl)
{
  switch (lvl) 
  {
    case 'beginner':


      break;
    case 'easy':
      a = ['006047000901083547300900600680090300012376084009800706290760031003502060108400270','032054900090001004080700031005600027800070000270140005000210300018907652603000000','007300405000020900253064870090740360000030080836209047100802603600000018082610004','006039010290140703000800900154090080870000400060408021020080635437260090680000270']
      set_9x9(a[Math.floor(Math.random()*4)]);
      break;
    case 'normal':
      a = ['010000300000300051308146009900000000280050704000602900600400000000003107107805090','000840005000100036057026010000000300060710000810005000100560700000270009094000000','106400007009007000008920046060104200081000030200805601000000000034060700017000960','084009700070800295910005080400010500300028001000050070005004006009602000008000109']
      set_9x9(a[Math.floor(Math.random()*4)]);
      break;
    case 'hard':
            a = ['940000052020300070078000000000017900400903007001520000000000420010005060260700081','005000000000300700600000010800020100040800500000095000083040070090006080500902000','000090020402500060053070040078001000900050000040600000000007002500040700000000106','000200000809000100020000000603009000070600050000040903040080030006900070095001002']
      set_9x9(a[Math.floor(Math.random()*4)]);


      set_9x9();
      break;

  }
}
