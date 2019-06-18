/*Function should submit whatever you type and enter in the bar. */
$(function(){
    $('#js-shopping-list-form').submit(function(event) {
      event.preventDefault();
      const listItem = $('#shopping-list-entry').val();
        console.log(listItem)
      $('#shopping-list-entry').val('');
  
  /*Changes listItem 's status*/
      $('.shopping-list').append(
        `<li>
          <span class="shopping-item">${listItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>

            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>`);
    });
/*Click should toggle the check button crossing it out but remaining on list.*/
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });
    
    });
/*Completely removes an item from the list deleting from view*/
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      });