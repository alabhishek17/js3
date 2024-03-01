
     let changeColorButton=document.getElementById("col")
     let changeColorShape=document.getElementById("shap")
    let colors=['red', 'green', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#000000'];
      const rand=(max)=>{
        return  Math.floor((Math.random() * 10))%max;
      };
    //   let randomcol=color[index];
   
    
    changeColorButton.addEventListener('click',()=>{
        let index=rand(colors.length)
         document.getElementById("circal").style.backgroundColor=colors[ index];
        // console.log(let);

    })
    let flag=true;
    const changeShape=()=>{
      const container=document.getElementById('circal')
      const newDiv=document.createElement('div');
      if(flag==true)
      newDiv.classList.add('red-square')
    else
    newDiv.classList.add('red-triangle')
  flag=!flag
  container.innerHTML=''
  container.appendChild(newDiv)
    }
    changeColorShape.addEventListener('click',changeShape)
    changeShape()
   