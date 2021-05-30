const clearBtn  = document.getElementById('clear')
const AddBtn  = document.getElementById('add')
const input_field  = document.getElementById('text-box')
const list = document.getElementById('list')
input_field.value = ''
function getInputValue() {
    if(input_field.value !== ''){
        
        let newItemBlock = document.createElement('div')
        newItemBlock.className = 'itemBlock'
        let newItem = document.createElement('li')
        let submisson = input_field.value
        newItem.innerText = `${submisson}`
        let newdeleteBtn = document.createElement('button')
        newdeleteBtn.className = 'deleteBtn'
        newdeleteBtn.innerText = '🗑️'
        newdeleteBtn.addEventListener('click', () => {
            list.removeChild(newItemBlock)
        })
        newItemBlock.appendChild(newItem)
        newItemBlock.appendChild(newdeleteBtn)
        
        list.appendChild(newItemBlock)
        
        input_field.value = ''
        
        
    } else {
        return
    }
    
}
AddBtn.addEventListener('click', getInputValue)

// var node= document.getElementById("parent");
// node.querySelectorAll('*').forEach(n => n.remove());

clearBtn.addEventListener('click', () => {
    let allItems = document.querySelectorAll('.itemBlock')
    allItems.forEach(n => n.remove())  
})