var $table = document.querySelector('#priority'),
  result = {
  },
  $result = document.querySelector('.result');
$table.addEventListener('click', function(event){
  var $selected = event.srcElement.parentElement.querySelector('.selected'),
    classSelected = event.srcElement.classList.item(0),
    oldClass = $selected && $selected.classList.item(0),
    active = document.querySelectorAll('.' + oldClass),
    deactive = document.querySelectorAll('.' + classSelected),
    type;
  if(event.srcElement.classList.contains('notSelect') || event.srcElement.tagName.toLowerCase() != 'td'){
    return;
  }

  $selected && $selected.classList.remove('selected');

  if(active) {
    console.log(active);
    [].forEach.call(active, function(item) {
      item.classList.remove('notSelect');
    });
  }
  [].forEach.call(deactive, function(item) {
    if (item == event.srcElement) { console.log(item); return;}
    item.classList.add('notSelect');
  });
  event.srcElement.classList.add('selected');
  type = event.srcElement.parentElement.getAttribute('data-type');
  result[type] = event.srcElement.innerText;
  console.log(result);

  $result.innerHTML = result.race + result.income + result.type + result.skills + result.attribute;

});
