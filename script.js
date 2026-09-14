/* The golden apple: swaps the screenshot between its day and night version,
   and remembers the choice for the next page you open. That is all this does. */
(function () {
  var KEY = 'mc-time';
  var shot = document.getElementById('shot');

  function apply(mode) {
    document.documentElement.setAttribute('data-time', mode);
    shot.src = shot.getAttribute('data-' + mode);
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (saved === 'night') apply('night');

  var buttons = document.querySelectorAll('.day-night');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-time') === 'night' ? 'day' : 'night';
      apply(next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
    });
  }
})();
