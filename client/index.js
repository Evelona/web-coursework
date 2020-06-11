const tabHref = document.getElementsByClassName('content-tab')
console.log(tabHref.length)
tabHref.values

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
studButton.addEventListener("click", () => location.href='student.html')



const btn = document.getElementById('btn')
let allTags = []
btn.onclick = () => {
    const newTask = document.createElement('li')
    const txt = document.getElementById('text-for-task').value
    newTask.innerHTML = txt ? txt : 'Пусто'
    document.getElementById('content-new-tab').appendChild(newTask)
    
    const newOldTask = document.createElement('li')
    const txtOld = document.getElementById('text-for-task').value
    newOldTask.innerHTML = txtOld ? txtOld : 'Пусто'
    document.getElementById('content-old-tab').appendChild(newOldTask)

    const tagValues = document.getElementById('tag-text').value
    const tagValue = tagValues.split(',')
    console.log(tagValue)
    console.log(tagValue.length)
    
    for (let i = 0; i < tagValue.length; i += 1) {
        // console.log(tagValue[i])
        if(allTags.indexOf(tagValue[i]) === -1) {
            console.log(tagValue[i])

            const newTag = document.createElement('h4')
            newTag.innerHTML = tagValue[i]
            document.getElementById('content-tag-tab').appendChild(newTag)

            const newTagUl = document.createElement('ul')
            newTagUl.id = tagValue[i]
            document.getElementById('content-tag-tab').appendChild(newTagUl)
        }
    

        const sameTask = document.createElement('li')
        const sameTaskTxt = document.getElementById('text-for-task').value
        sameTask.innerHTML = sameTaskTxt ? sameTaskTxt : 'Пусто'
        document.getElementById(`${tagValue[i]}`).appendChild(sameTask)
    }
}


