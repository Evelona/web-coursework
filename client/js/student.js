function showContent(tab) {
	const lable = `content-${tab}`
	const tabs = document.getElementsByClassName('content-tab')
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].classList.add('hide')
	}
	document.getElementById(lable).classList.remove('hide')
}

const listButton = document.getElementById('student-my-list')
const addDirectButton = document.getElementById('add-student-direction')
const backButtons = document.getElementsByClassName('back-btn')
for (let i = 0; i < backButtons.length; i++) {
	backButtons[i].addEventListener("click", () => showContent('student-menu'))
}
listButton.addEventListener("click", () => showContent('student-list'))
addDirectButton.addEventListener("click", () => showContent('add-direction'))
