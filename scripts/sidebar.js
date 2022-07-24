let sidebar = document.querySelector('.sidebar')
let sidebarBtn = document.querySelector('.sidebar__btn')
let sidebarFon = document.querySelector('.sidebar-fon')

sidebarBtn.addEventListener('click', () => {
  if(sidebar.classList.contains("sidebar_active")){
    sidebar.classList.remove('sidebar_active')
    sidebarFon.classList.remove('sidebar-fon_active')
  } else{
    sidebar.classList.add('sidebar_active')
    sidebarFon.classList.add('sidebar-fon_active')
    if(sidebar.classList.contains("sidebar_active")){
      $('.header__link').on('click', function() {
        sidebar.classList.remove('sidebar_active')
        sidebarFon.classList.remove('sidebar-fon_active')
      })
    }
  }
})

sidebarFon.addEventListener('click', (el) => {
  if(el.target.classList.contains("sidebar-fon_active") || el.target.classList.contains("sidebar__btn")){
    sidebar.classList.remove('sidebar_active')
    sidebarFon.classList.remove('sidebar-fon_active')
  }
})

