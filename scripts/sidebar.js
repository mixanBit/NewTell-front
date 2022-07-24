let sidebar = document.querySelector('.sidebar')
let sidebarFon = document.querySelector('.sidebar-fon')


$('[data-sidebar="btnOpenSidebar"]').on('click', function() {
  if(sidebar.classList.contains("sidebar_active")){
    sidebar.classList.remove('sidebar_active')
    sidebarFon.classList.remove('sidebar-fon_active')
  } else{
    sidebar.classList.add('sidebar_active')
    sidebarFon.classList.add('sidebar-fon_active')
    if(sidebar.classList.contains("sidebar_active")){
      $('a[data-menu="link"]').on('click', function(el){
        sidebar.classList.remove('sidebar_active')
        sidebarFon.classList.remove('sidebar-fon_active')
      })
    }
  }
});

$('[data-sidebar="fonCloseSidebar"]').on('click', function(el) {
  if(el.target.classList.contains("sidebar-fon_active") || el.target.classList.contains("sidebar__btn")){
    sidebar.classList.remove('sidebar_active')
    el.target.classList.remove('sidebar-fon_active')
  }
})