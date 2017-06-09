async function determineDate() {
  const moment = await import('moment');
  return moment().format('LLLL');
}

determineDate().then(str => console.log(str));