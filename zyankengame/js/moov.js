$("#goo").on("click", function(){
    var humanGu = 1;
    var comp = Math.floor(Math.random()*3+1 );

if(comp == 1 ){
    $("#pc").text("ROCK")
    $("#result").text("Result:DRAW")
}else if(comp == 2 ){
    $("#pc").text("SCISSORS")
    $("#result").text("WIN!!! cmd:↑↓↑↓>")   
}else if(comp == 3 ){
    $("#pc").text("PAPER")
    $("#result").text("Result:LOSE...")
}
});

$("#choki").on("click", function(){
    var humaCho = 2;
    var comp = Math.floor(Math.random()*3+1 );

if( comp == 1 ){
    $("#pc").text("ROCK")
    $("#result").text("Result:LOSE...")
}else if( comp == 2 ){
    $("#pc").text("SCISSORS")
    $("#result").text("Result:DRAW")
}else if( comp == 3 ){
    $("#pc").text("PAPER")
    $("#result").text("WIN!!! cmd:↑↓↑↓>")
}
});
$("#paa").on("click", function(){
    var humaPar = 3;
    var comp = Math.floor(Math.random()*3+1 );
if(comp==1){
    $("#pc").text("ROCK")
    $("#result").text("WIN!!! cmd:↑↓↑↓>")
}else if(comp==2){
    $("#pc").text("SCISSORS")
    $("#result").text("Result:LOSE...")
}else if(comp==3){
    $("#pc").text("PAPER")
    $("#result").text("Result:DRAW")
}
});

$(function(){
 
    // 入力キー配列
    var input_cmd = [];
    // コナミコマンド配列 [↑, ↑, ↓, ↓, ←, →, ←, →, B, A]
    var konami_cmd = [38, 40, 38,40];
   
    // キー入力後のキーアップイベントで発動条件を監視します
    $(window).keyup(function(event){
   
      // 入力されたキーコードを入力キー配列へ追加
      input_cmd.push( event.keyCode );
   
      // 入力されたキーが正しいか判定
      // ※ 入力キー配列の長さで何番目の文字を比較するかを判断する
      if ( input_cmd[ input_cmd.length - 1 ] != konami_cmd[ input_cmd.length - 1 ] ) {
        // 入力を間違えた場合、入力キー配列をリセット（最初からやり直し）
        input_cmd = [];
      }
      // 全ての入力コマンドが合致したら処理を発動
      else if ( input_cmd.length == konami_cmd.length ) {
        // コナミコマンドによる処理実行！
        konami_cmd_action();
        // 処理後、改めて入力キー配列をリセット
        input_cmd = [];
      }
    });
  });
   
  // コナミコマンド処理関数
  function konami_cmd_action() {
    $(function () {
        $('#openModal').click(function(){
            $('#modalArea').fadeIn();
        });
        $('#closeModal , #modalBg').click(function(){
          $('#modalArea').fadeOut();
        });
      });
    alert("おめでとう！！！左下のボタンが解放された！")
    /*---------------------------------------------
     ここにコナミコマンド入力時に発動させたい処理を記載
    ---------------------------------------------*/
    
  }
 