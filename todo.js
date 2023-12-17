$(document).ready(() => {
    $('input').change(function () {
        // console.log("sample")
        var inputVal = $(this).val()
        // console.log(inputVal)

        //dispplay the input Value in Ul tAg as a list item
        // $('ul').append(inputVal)

        // $('ul').append('<li>' + inputVal '</li>')

        var ListItems = '<li>' + inputVal + '<i class="fa-solid fa-pencil"></i>' +'<i class="fa-solid fa-delete-left"></i>'
        +'</li>'
        $('ul').append(ListItems)
        $(this).val('')
    })
})

$('ul').on('click','.fa-delete-left' ,function(){
    $(this).parent('li').fadeOut()
})

$('ul').on('click','.fa-pencil',function(){
    $(this).parent('li').toggleClass('checked')
})

// $(document).ready(()=>{
//     $('input').change(function(){
//         // console.log("he;oS")
//         var inputVal=$(this).val()

//         $('ul').append('<li>' +inputVal + '</li>')

//     })
// })