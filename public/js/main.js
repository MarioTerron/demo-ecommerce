console.log('the main.js file is loaded...')

// Events for '/' 

$('.add-to-cart-ajax').on('submit', function (e) {
  e.preventDefault()
  const url = '/cart'
  const id = $(this).find("[name='id']").val()
  const quantity = $(this).find("[name='quantity']").val()
  $.ajax({
    url,
    data: { id, quantity},
    method: 'POST'
  })
  .done(function (msg) {
    alert(msg)
    window.location.reload()
  })
  .fail(function (err) {
    console.log(err)
  })
})

// Events for '/cart' 

$('a.remove').on('click', function (e) {
  e.preventDefault()
  const url = $(this).attr('href')
  const $item = $(this).closest('tr')
  $.ajax({
    url,
    method: 'DELETE'
  })
  .done(function (msg) {
    alert(msg)
    $item.remove()
    window.location.reload()

  })
  .fail(function (err) {
    console.log(err)
  })
})

$(".list-cart .quantity").on("keyup mouseup", function() {
  const quantity = $(this).val()
  const id = $(this).siblings('[name="id"]').val()
  const url = `/cart/${id}`
  $.ajax({
    url,
    data: { quantity},
    method: 'PUT'
  })
  .done(function (msg) {
    alert(msg)
    window.location.reload()

  })
  .fail(function (err) {
    console.log(err)
  })
})

