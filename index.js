fetch('http://localhost:3000/data')
  .then(response => response.json())
  .then(data =>{
    var originalContent = `
    <div class="icon"><i class="iconclass"></i></div>
    <h4 class="title"><a href="">ABC</a></h4>
    <p class="description">anything</p>
  `;

  var elem = document.getElementById('mod2ndSection');
  for(i = 0;i<data.length;i++){
    var mycontent = document.createElement('div');
    var customized = originalContent;
    customized =  customized.replace('ABC',data[i].title);
    customized =customized.replace('anything',data[i].description);
    customized =customized.replace('iconclass',data[i].icon);
    mycontent.innerHTML = customized;
    mycontent.className = 'col-lg-4 col-md-6 icon-box';
    elem.appendChild(mycontent);
  }

  });