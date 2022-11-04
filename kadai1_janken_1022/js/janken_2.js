var neko1 = "";
var neko2 = "";
var neko3 = "";



$("#gu_btn").on("click",function(){
    const r = Math.ceil( Math.random() *3);
    let view = "";
    let cpu = "";
    console.log(r, "ランダムな数字");

    if ( r == 1 ){
        view = '<img src="img/gu2.png" width="259" height="194" alt="gu">';
    } else if ( r == 2 ) {
        view = '<img src="img/choki2.png" width="259" height="194" alt="choki">';
    } else if ( r == 3 ){
        view = '<img src="img/pa2.png" width="259" height="194" alt="pa">';
    }

    $("#pc_hands").html(view)

    if ( r == 1 ){
       cpu = "あいこだにゃー"
    } else if ( r == 2 ) {
        cpu = "かちだにゃー"
    } else if ( r == 3 ) {
        cpu = "まけだにゃー"
    }

    $("#judgment").html(cpu)

})

$("#cho_btn").on("click",function(){
    const r = Math.ceil( Math.random() *3);
    let view = "";
    let cpu = "";

    if ( r == 1 ){
        view = '<img src="img/gu2.png" width="259" height="194" alt="gu">';
    } else if ( r == 2 ) {
        view = '<img src="img/choki2.png" width="259" height="194" alt="choki">';
    } else if ( r == 3 ){
        view = '<img src="img/pa2.png" width="259" height="194" alt="pa">';
    }

    $("#pc_hands").html(view)

    if ( r == 1 ){
       cpu = "まけだにゃー"
    } else if ( r == 2 ) {
        cpu = "あいこだにゃー"
    } else if ( r == 3 ) {
        cpu = "かちだにゃー"
    }

    $("#judgment").html(cpu)

})


$("#par_btn").on("click",function(){
    const r = Math.ceil( Math.random() *3);
    let view = "";
    let cpu = "";

    if ( r == 1 ){
        view = '<img src="img/gu2.png" width="259" height="194" alt="gu">';
    } else if ( r == 2 ) {
        view = '<img src="img/choki2.png" width="259" height="194" alt="choki">';
    } else if ( r == 3 ){
        view = '<img src="img/pa2.png" width="259" height="194" alt="pa">';
    }

    $("#pc_hands").html(view)

    if ( r == 1 ){
       cpu = "かちだにゃー"
    } else if ( r == 2 ) {
        cpu = "まけだにゃー"
    } else if ( r == 3 ) {
        cpu = "あいこだにゃー"
    }

    $("#judgment").html(cpu)

})

