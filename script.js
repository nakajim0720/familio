document.querySelector('.hamburger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
  })


  const closeMenu = (event) => {
    // クリックされた要素がハンバーガーメニューまたはその子孫要素でない場合
    if (!event.target.closest('.hamburger') && !event.target.closest('.slide-menu')) {
      // ハンバーガーメニューを非アクティブ状態にする
      document.querySelector('.hamburger').classList.remove('active');
      // スライドメニューを非アクティブ状態にする
      document.querySelector('.slide-menu').classList.remove('active');
    }
  };
  
  // スライドメニュー以外の場所をクリックした時にcloseMenu()を実行
  document.addEventListener('click', closeMenu);