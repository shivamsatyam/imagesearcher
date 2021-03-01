let image_shower = document.getElementById('image_shower')
let image = document.getElementById('image')
let btn = document.getElementById('search')
let input = document.getElementById('input')

input.value = "nature"

search.addEventListener('click',(e) => {
  	fetch(`https://source.unsplash.com/1600x900/?${input.value}`).then((data)=>{
  		return data
  	}).then((response)=>{
  		console.log(response)
  		image.src = response.url
  	})
});

























