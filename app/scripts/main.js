var $table = document.querySelector('#priority');
$table.addEventListener('click', function(event){
  var $selected = event.srcElement.parentElement.querySelector('.selected');
  if(event.srcElement.classList.contains('notSelect')){
    return;
  }
  $selected && $selected.classList.remove('selected');
  event.srcElement.classList.add('selected');
});
