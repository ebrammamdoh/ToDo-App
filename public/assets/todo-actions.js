$(document).ready(()=>{
    $('form').on('submit',()=>{
        var item =$('form input');
        var todo = {item:item.val()};
        $.ajax({
            type:'post',
            url:'/todo',
            data: todo,
            success:(data)=>{
                location.reload();
            }
        });
    });

    $('li').on('click',()=>{
        var item = $(this).text().replace(/ /g,'-');
        alert(item);
        $.ajax({
            type:'delete',
            'content-type': 'json/application',
            url:'/todo/' + item,
            success: (data)=>{
                location.reload();
            }
        });
    });
});