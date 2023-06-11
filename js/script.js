const day = document.querySelector('.selected-day')
const month = document.querySelector('.selected-month')
const year = document.querySelector('.selected-year')
const daysAgo = document.querySelector('.days-ago span')
const monthsAgo = document.querySelector('.months-ago span')
const yearsAgo = document.querySelector('.years-ago span')
const dayError = document.querySelector('.e-day')
const monthError = document.querySelector('.e-month')
const yearError = document.querySelector('.e-year')
const wholeFormError = document.querySelector('.whole-form')
const calculateBtn = document.querySelector('.main__line-arrow')
const currentDate = new Date()
const selectedDate = new Date(`${month.value}/${day.value}/${year.value}`)

const isDateValid = (d, m) => {
	if (currentDate.getTime() - selectedDate.getTime() <= 0) {
		yearError.classList.add('showError')
	} else {
		yearError.classList.remove('showError')
	}
	if (m < 1 || m > 12) {
		monthError.classList.add('showError')
	} else {
		monthError.classList.remove('showError')
	}
	if (d < 1) {
		dayError.classList.add('showError')
	} else {
		dayError.classList.remove('showError')
	}
	if (m === '2' && d > 29) {
		wholeFormError.classList.add('showError')
	} else if (m % 2 === 0 && d > 30) {
		wholeFormError.classList.add('showError')
	} else if (m % 2 === 1 && d > 31) {
		wholeFormError.classList.add('showError')
	} else {
		wholeFormError.classList.remove('showError')
	}
	timeAgo()
}

const timeAgo = () => {
	let days = Math.floor((currentDate.getTime() - selectedDate.getTime()) / (1000 * 3600 * 24))
	let months = Math.floor(days / 30)
	let years = Math.floor(months / 12)
	if (months / 12 >= 1) {
		if (months % 12 == 0) {
			months = 0
		} else {
			months = months - years * 12 
		}
	}
	if (days / 365 >= 1) {
		if (days % 365 == 0) {
			days = 0
		} else {
			days = days - years * 365 
			days = Math.ceil(days / 12)
		}
	}
	if (days % 30 == 0 || days % 31 == 0) {
		days = 0
	}

	yearsAgo.innerHTML = years
	monthsAgo.innerHTML = months
	daysAgo.innerHTML = days
}

calculateBtn.addEventListener('click', isDateValid(daysAgo.value, monthsAgo.value))
