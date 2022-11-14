const selectCategory = document.getElementById('categories')

      selectCategory.addEventListener('change', ()=> {
        console.log(selectCategory.value)
        
        fetch('/business').then(response => response).then(data => console.log(data))
        
      })