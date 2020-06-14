
function showContent(tab) {
    const lable = `content-${tab}`
    const tabs = document.getElementsByClassName('content-tab')
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.add('hide')
    }
    document.getElementById(lable).classList.remove('hide')
}

const addButton = document.getElementById('add-student')
const studButton = document.getElementById('sing-student')
const listButton = document.getElementById('studen-list')
const backButtons = document.getElementsByClassName('back-btn')
for (let i = 0; i < backButtons.length; i++) {
    backButtons[i].addEventListener("click", () => showContent('open'))
}
addButton.addEventListener("click", () => showContent('add'))
listButton.addEventListener("click", () => showContent('list'))
studButton.addEventListener("click", () => location.href = 'admin')





// const btn = document.getElementById('btn')
let  allDirections = []
// btn.onclick = () => {

//     const tagValues = document.getElementById('tag-text').value
//     const tagValue = tagValues.split(',')
    
//     for (let i = 0; i < tagValue.length; i += 1) {
//         // console.log(tagValue[i])
//         if(allTags.indexOf(tagValue[i]) === -1) {
//             console.log(tagValue[i])

//             const newTag = document.createElement('h4')
//             newTag.innerHTML = tagValue[i]
//             document.getElementById('content-tag-tab').appendChild(newTag)

//             const newTagUl = document.createElement('ul')
//             newTagUl.id = tagValue[i]
//             document.getElementById('content-tag-tab').appendChild(newTagUl)
//         }
    

//         const sameTask = document.createElement('li')
//         const sameTaskTxt = document.getElementById('text-for-task').value
//         sameTask.innerHTML = sameTaskTxt ? sameTaskTxt : 'Пусто'
//         document.getElementById(`${tagValue[i]}`).appendChild(sameTask)
//     }
// }


