 // querySelectorAll( lấy tất cả các class trong document ra) lưu vào 1 biến buyBtns
 const buyBtns = document.querySelectorAll('.js-buy-ticket ')
 const modal =document.querySelector('.js-modal')
 const modalContainer = document.querySelector('.js-modal-container ')
 const modalClose = document.querySelector('.js-modal-close')

 // hàm hiển thị modal mua vé (thêm class open  vào modal)
 function showBuyTicket() {
     modal.classList.add('open')
 }
 // hàm ẩn modal mua vé (gỡ bỏ class open của modal)

 function hideBuyTicket() {
     modal.classList.remove('open')
 }
 // lặp qua từng thẻ button và nghe hành vi click

 for (buyBtn of buyBtns) {
     buyBtn.addEventListener('click', showBuyTicket)
 }
 // nghe hành vi click vào nút button close
 modalClose.addEventListener('click',hideBuyTicket)

 modal.addEventListener('click',hideBuyTicket)
 // gọi biến modalContainer và thực thi khi click vào vùng 
 // bên trong sẽ không bị thoát ra bên ngoài
 modalContainer.addEventListener('click',function(event){
     event.stopPropagation()
 })
  // End modal ticket


 // đóng/mở mobile menu
 // begin đóng mở menu

 // lấy cái css id header ra gán vào biến header
 var header =document.getElementById('header');
 var mobileMenu =document.getElementById('mobile-menu');
 var headerHeight = header.clientHeight;
 // đoạn code bên dưới sẽ được chạy khi click vào mobileMenu
 mobileMenu.onclick = function() {
     // 3 dấu = được hiểu là so sánh, so sánh xem header.clientHeight có = 46 hay không
     // sau đó gắn giá trị vào biến isClosed
     var isClosed = header.clientHeight === headerHeight;
     // nếu mà cái biến đóng thì height 
     if(isClosed) {
         header.style.height = 'auto';
     }else{
         header.style.height = '46px';
     }
 }
 // End đóng mở menu

 // tự động đóng khi chọn menu

 var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
 for(var i =0; i<menuItems.length; i++) {
     var menuItem = menuItems[i];
     // tìm trong menu có ace liền kề và cái ace liền kề đó chưa class là subnav
     
     
     menuItem.onclick = function() {
         var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav')
         if(isParentMenu){
             event.preventDefault();
         }
         else {
             header.style.height = null;
         }
         
     }
}