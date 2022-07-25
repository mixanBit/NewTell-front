$('[data-sidebar="btnOpenSidebar"]').on('click', function() {
  if($('[data-sidebar="sidebar"]').hasClass("sidebar_active")){
    $('[data-sidebar="sidebar"]').removeClass('sidebar_active')
    $('[data-sidebar="fonCloseSidebar"]').removeClass('sidebar-fon_active')
  } else{
    $('[data-sidebar="sidebar"]').addClass('sidebar_active')
    $('[data-sidebar="fonCloseSidebar"]').addClass('sidebar-fon_active')
    if($('[data-sidebar="sidebar"]').hasClass("sidebar_active")){
      $('a[data-menu="link"]').on('click', function(){
        $('[data-sidebar="sidebar"]').removeClass('sidebar_active')
        $('[data-sidebar="fonCloseSidebar"]').removeClass('sidebar-fon_active')
      })
    }
  }
});

$('[data-sidebar="fonCloseSidebar"]').on('click', function(event) {
  if($(event.target).hasClass("sidebar-fon_active") || $(event.target).hasClass("sidebar__btn")){
    $('[data-sidebar="sidebar"]').removeClass('sidebar_active')
    event.target.classList.remove('sidebar-fon_active')
  }
})
