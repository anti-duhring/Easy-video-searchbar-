window.onload = function(){

  var myCors = {mode: 'no-cors'};
  const tapeGrid = document.getElementById('tape-grid');
  const buttonSearch = document.querySelector('#search-button');
  const name = document.querySelector('#name-tape-search');
  const nameInfo = document.querySelector('#name-info');
  const collegeInfo = document.querySelector('#college-info');
  const positionInfo = document.querySelector('#position-info');

  buttonSearch.addEventListener('click', function(event){
    var nameSearch = name.value;
    fetch('/data/tape.json')
        .then(res => res.json())
        .then(data => {
          let names =[];
            data.prospectos.map(user => {

              if(user.name.toLowerCase().indexOf(nameSearch.toLowerCase())!=-1){
                tapeGrid.innerHTML= '';
                nameInfo.innerHTML=user.name;
                collegeInfo.innerHTML=user.college;
                positionInfo.innerHTML=user.position;
                user.tape.forEach((element, index, array) => {

                  tapeGrid.innerHTML += '<div class="card-tape"><div class="frame-content"><iframe class="tape-frame" src="https://www.youtube.com/embed/'+element.ref+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><div class="frameInfo-content"><p class="name">'+element.name+'</p><p class="author">Postado por: <span class="author-name">'+element.author+'</span></p></div></div>';
                })
              }


            });
    }).catch((err) => {
      console.log(err)
    });

  });
};
