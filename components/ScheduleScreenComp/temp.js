const dummy = [
  {name: 'xyz 1mg', time: '08:00', date: '1/1/2022', istaken: true},
  {name: 'xyz 1mg', time: '08:30', date: '1/1/2022', istaken: true},
  {name: 'xyz 1mg', time: '12:00', date: '3/1/2022', istaken: true},
  {name: 'xyz 1mg', time: '11:00', date: '3/1/2022', istaken: true},
  {name: 'xyz 1mg', time: '20:00', date: '3/1/2022', istaken: true},
  {name: 'xyz 1mg', time: '08:00', date: '5/1/2022', istaken: false},
  {name: 'xyz 1mg', time: '01:00', date: '6/1/2022', istaken: false},
  {name: 'xyz 1mg', time: '12:00', date: '6/1/2022', istaken: false},
  {name: 'xyz 1mg', time: '08:00', date: '6/1/2022', istaken: false},
  {name: 'xyz 1mg', time: '12:00', date: '7/1/2022', istaken: false},
];

const ans = {};
let hour = 0;

dummy.forEach(dataItem => {
  if (!(dataItem.date in ans)) {
    ans[dataItem.date] = {0: [], 1: [], 2: [], 3: []};
  }

  hour = parseInt(dataItem.time.split(':')[0]);

  if (hour >= 20) ans[dataItem.date][3].push(dataItem);
  else if (hour >= 17) ans[dataItem.date][2].push(dataItem);
  else if (hour >= 11) ans[dataItem.date][1].push(dataItem);
  else ans[dataItem.date][0].push(dataItem);

  console.log(ans[dataItem.date][0]);
});

console.log(ans);
