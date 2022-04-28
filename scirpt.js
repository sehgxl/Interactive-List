const btn=document.querySelector('.btn')
const input=document.querySelector('input')
const itemlist=document.querySelector('.itemlist')
const curlist=[]
btn.addEventListener('click',makelist)
// makelistitem('testforcss')
let getdata=localStorage.getItem('curlist')
window.addEventListener('DOMContentLoaded',()=>{
  if(getdata){
    let temparr = JSON.parse(getdata)
    temparr.forEach(el=>{
      makelistitem(el)
    })
  }

})

function updater(){
  const latestlist=document.querySelectorAll('.info')
  const holder=[]
  latestlist.forEach(el=>{
    holder.push(el.innerText)
  })
  console.log('holder',holder)
  console.log('curlist',curlist)
  localStorage.setItem('curlist',JSON.stringify(holder))
}

function makelist(){
  
  if(!(input.value===''))
  { 
    makelistitem(input.value)
    updater()
  }
  input.value=''
}

function makelistitem(itemname){
  curlist.push(itemname)
  
  const item=document.createElement('li') 
  const span=document.createElement('span')
  span.innerText=itemname
  span.setAttribute('class','info')
  item.appendChild(span)

  const editbtn=document.createElement('div')
  const deletebtn=document.createElement('div')

  editbtn.innerText='Edit'
  editbtn.setAttribute('class','editbtn')
  editbtn.addEventListener('click',()=>{
    if(editbtn.innerText==='Edit'){
    span.style.backgroundColor='yellow'
    span.setAttribute('contenteditable',true)
    editbtn.innerText='Save'
    
    }
    else{
    span.style.backgroundColor='white'
    span.setAttribute('contenteditable',false)
    editbtn.innerText='Edit'
    updater()
    }
  })

  deletebtn.innerText='Delete'
  deletebtn.setAttribute('class','deletebtn')
  deletebtn.addEventListener('click',()=>{
    item.remove()
    updater()
  })

  item.appendChild(editbtn)
  item.appendChild(deletebtn)
  itemlist.appendChild(item)
  console.log(item)
}