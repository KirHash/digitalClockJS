const clock = document.getElementById('clock');

setInterval(function () {
  let date = new Date();
  const time = date.toLocaleTimeString();
  const dates = date.toDateString('en-IN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  clock.innerHTML = `${time}<br>${dates}`;
}, 1000);