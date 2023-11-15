//add a table to the page
let $table = $('<table/>');
//add to the body of document 
$('body').append($table);

//add a title for the table before table

$('table').before('<h1/>');
$('h1').text('Pawandeep Kaur-Ardaas');

// add a thead and tbody on the table
$('table').append('<thead/>');
$('table').append('<tbody/>');
$('table').addClass('tbl');

//create the heading row
let $headingRow = $('<tr/>').addClass('headingRow');
// add this row to thead
$('thead').append($headingRow);
$headingRow.append($('<td/>').text('FirstName'));
$headingRow.append($('<td/>').text('LastName'));
$headingRow.append($('<td/>').text('Age'));
$headingRow.append($('<td/>').text('Occupation'));
$headingRow.append($('<td/>').text('City'));

// create an input box before table

$('h1').after('<input/>');
$('input').attr('id', 'search');

// dd  a button after table 
$('table').after('<button id="btn"> A-M </button>');
$('table').after('<button id="btn"> N-Z </button>');


$.ajax({
  type: "get",
  url: "Actors.json",
  error: function(){
      $('.tbl').empty().append('<h1> Content can not be retrieved</h1>');
  },
  success: function(response){
      //loop through response received
      $.each(response, function(index, value){
          // create row
          let $row = $('<tr/>').addClass('row');
          // add td to the row
          $row.append($('<td></td>').text(value.firstname));
          $row.append($('<td></td>').text(value.lastname));
          $row.append($('<td></td>').text(value.age));
          $row.append($('<td id="occu"> </td>').text(value.occupation));
          $row.append($('<td></td>').text(value.city));

          // add rows to table 
          $('tbody').append($row);
      });
    // Start SEArching by firstname 
        // lets add an id = fNameto that cell 

        let $occupations = $('tbody #fName');
        let $search = $('#search');
        // create the cache array - element and text
        let cache = [];
        let trr = $('tr');
        $firstName.each(function(){
          cache.push({
              element: this,
              text: this.textContent.trim().toLowerCase()
          });
      });
      console.log(cache);
      // search function
      function searchOccupation(){
        let query = this.value.trim().toLowerCase();
        cache.forEach(function(occupation){
            let index=0;
            if(query){
                index = firstName.text.indexOf(query);
            }
            firstName.element.style.background = index === -1 ? 'lightblue' : 'blue';
            firstName.element.style.color = index === -1 ? 'black' : 'white';
            if($(search).val() == " "){
                firstName.element.style.color = 'black';
                firstName.element.style.background = 'lightblue'
            }

        });

    }
    if('oninput' in $search[0]){
      $search.on('input', searchFirstName);
   }else{
       $search.on('input', searchFirstName);
   }

   $('#btn').on('click', function(){
            
           
    $('tbody tr').find(('td:nth-child(1)')).filter(function(){
    
    
        if($(this).text() === "FirstName"){
        
         $(this).parent().show();
        }else{
            $(this).parent().hide();
           
        }

    
    })

});

  },
})

  

  




