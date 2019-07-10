const $elementExampleFirst = document.querySelector('.elementExamplePositionRelative_first')

const $elementExampleLast = document.querySelector('.elementExamplePositionRelative_last ')

$elementExampleFirst.addEventListener('click', function(event){
    this.classList.toggle('elementExample_isActive')
    $elementExampleLast.classList.add('elementExample_isActive')
})

$elementExampleLast.addEventListener('click', function(event){
    this.classList.toggle('elementExample_isActive')
    $elementExampleFirst.classList.add('elementExample_isActive')
})