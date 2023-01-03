console.log("main.js!!");

$(document).ready(()=>{
	console.log("Ready!!");
	





});

//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
	var headerH = $('#header').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerH){//headerの高さ以上になったら
		$('#header').addClass('fixed');//fixedというクラス名を付与
	  }else{//それ以外は
		$('#header').removeClass('fixed');//fixedというクラス名を除去
	  }
  }
  
  //ナビゲーションをクリックした際のスムーススクロール
  $('#g-navi a').click(function () {
	var elmHash = $(this).attr('href'); //hrefの内容を取得
	var pos = Math.round($(elmHash).offset().top-120);  //headerの高さを引く
	$('body,html').animate({scrollTop: pos}, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
	return false;//リンクの無効化
  });
  
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
  });
  
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
	FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
  });








  const fixedElm = document.getElementById('header');
let scrollPoint = 0; // 現在のスクロール位置をセットする変数
let lastPoint = 0; // 1つ前のスクロール位置をセットする変数

window.addEventListener("scroll",function(){
  
  scrollPoint = window.scrollY;
  
  if(scrollPoint > lastPoint){ // 下スクロールの場合
    fixedElm.classList.add('fixed-hide');
  }else{ // 上スクロールの場合
    fixedElm.classList.remove('fixed-hide');
  }
  
  lastPoint = scrollPoint;
});





var beforePos = 0;//スクロールの値の比較用の設定

//スクロール途中でヘッダーが消え、上にスクロールすると復活する設定を関数にまとめる
function ScrollAnime() {
    var elemTop = $('#area-2').offset().top;//#area-2の位置まできたら
  var scroll = $(window).scrollTop();
    //ヘッダーの出し入れをする
    if(scroll == beforePos) {
    //IE11対策で処理を入れない
    }else if(elemTop > scroll || 0 > scroll - beforePos){
    //ヘッダーが上から出現する
    $('#header').removeClass('UpMove'); //#headerにUpMoveというクラス名を除き
    $('#header').addClass('DownMove');//#headerにDownMoveのクラス名を追加
    }else {
    //ヘッダーが上に消える
        $('#header').removeClass('DownMove');//#headerにDownMoveというクラス名を除き
    $('#header').addClass('UpMove');//#headerにUpMoveのクラス名を追加
    }
    
    beforePos = scroll;//現在のスクロール値を比較用のbeforePosに格納
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  ScrollAnime();//スクロール途中でヘッダーが消え、上にスクロールすると復活する関数を呼ぶ
});




//リンク先のidまでスムーススクロール
//※ページ内リンクを行わない場合は不必要なので削除してください
    var headerH = $("#header").outerHeight(true);//headerの高さを取得    
    $('#g-navi li a').click(function () {
  var elmHash = $(this).attr('href'); 
  var pos = $(elmHash).offset().top-headerH;//header分の高さを引いた高さまでスクロール
  $('body,html').animate({scrollTop: pos}, 1000);
  return false;
});



