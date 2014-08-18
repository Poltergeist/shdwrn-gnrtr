var $table = document.querySelector('#priority'),
  result = {
  },
  $result = document.querySelector('.result'),
  clearRow = function(element){
    var $selected = element.parentElement.querySelector('.selected'),
      oldClass = $selected && $selected.classList.item(0),
      active = $table.querySelectorAll('.' + oldClass);

    $selected && $selected.classList.remove('selected');
    if(active) {
      [].forEach.call(active, function(item) {
        item.classList.remove('notSelect');
      });
    }
  };
$table.addEventListener('click', function(event){
  var $selected = event.srcElement.parentElement.querySelector('.selected'),
    classSelected = event.srcElement.classList.item(0),
    oldClass = $selected && $selected.classList.item(0),
    active = document.querySelectorAll('.' + oldClass),
    deactive = document.querySelectorAll('.' + classSelected),
    type;
  if(event.srcElement.classList.contains('remove')){
    clearRow(event.srcElement);
    return;
  }
  if(event.srcElement.classList.contains('notSelect') || event.srcElement.tagName.toLowerCase() != 'td'){
    return;
  }

  $selected && $selected.classList.remove('selected');

  if(active) {
    [].forEach.call(active, function(item) {
      item.classList.remove('notSelect');
    });
  }
  [].forEach.call(deactive, function(item) {
    if (item == event.srcElement) { return;}
    item.classList.add('notSelect');
  });
  event.srcElement.classList.add('selected');
  type = event.srcElement.parentElement.getAttribute('data-type');
  result[type] = event.srcElement.innerText;

  $result.innerHTML = '';
  Object.keys(result).forEach(function(item) {
    $result.innerHTML += result[item];
  });

});
