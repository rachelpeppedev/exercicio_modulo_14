$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000',{
        placeholder: '(00) 00000-0000'
    });

    $ ('form').validate ( {
        rule: {
            nome: {
                required: true
            }
        }
    })
})