/**
 * Display INNERHTML inside a div with class that contains 'second-element'. 
 * 1. Must start with document.getElementsByClassName("element") to get all elements
 * 2. Filter through the elements to get the one that includes className of 'second-element
 * @returns 
 */
export const rowOneText = () => {
  // yarn
  const elementDivs = document.getElementsByClassName('element')
  const row1 = document.querySelector('.row-1-answer')

  Array.prototype.forEach.call(elementDivs, (el) => {
    if (el.classList.contains('second-element')) {
      console.log(el.innerHTML)
      row1.innerHTML = `<br> ${String(el.innerHTML).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')}`
    }
  });

  return ""
}


/**
 * Display value of the input element. 
 * 1. Must use document.getElementsByClassName("ele-field") to get all elements, 
 * 2. filter through tagName of each element AND filter through className to make sure it contains 'dog' in it 
 * 3. Console.log the tagname of the final element and value in it:
 *      - example: console.log('tag name is: ', tagName, 'value is: ', value)
 * @returns 
 */
export const rowTwoText = () => {
  const eleFieldDivs = document.getElementsByClassName('ele-field')
  const row2 = document.querySelector('.row-2-answer')
  Array.prototype.forEach.call(eleFieldDivs, (el) => {
    if (el.classList.contains('dog')) {
      const tagName = el.tagName
      const value = el.value
      console.log('tag name is: ', tagName, 'value is: ', value)
      row2.innerHTML = `<br> tag name is: ${tagName} value is: ${value}`
    }
  });


  return ""
}

/**
 * Display tag names of all firstChildElement innerHTML. 1. Must use document.getElementsByClassName("element") to get all elements
 * @returns 
 */
export const displayTagNames = () => {
  const elementDivs = document.getElementsByClassName('element')
  const row3 = document.querySelector('.row-4-answer')
  Array.prototype.forEach.call(elementDivs, (el) => {
    console.log("First child element tagname is " +el.firstElementChild.tagName + " and innerhtml is " +el.firstElementChild.innerHTML)
    const elDetails = `<br>First child element tagname is ${el.firstElementChild.tagName} and innerhtml is ${el.firstElementChild.innerHTML}`
    row3.insertAdjacentHTML('afterbegin', elDetails)
  });
  // loop through the element
  // console.log inside each element the first child element or first element child innerHTML
  return ""
}

/**
 * 1. Get all elements with className ele-field in it... 
 * 2. loop through each element
 * 3. if the element previousElementSibling has innerHTML with 'field' whether the letters are capitalized or not
 * 4. if conditions match on #3, push the element into selectedEleFields (selectedEleFields.push())
 * 5. Console.log selectedEleFields
 * 
 */
export const displayConsolelog = () => {
  let selectedEleFields = []
  const eleFieldDivs = document.getElementsByClassName('ele-field')
  Array.prototype.forEach.call(eleFieldDivs, (el) => {

    if (el.previousElementSibling.innerHTML.toLowerCase().includes('field')) {
      selectedEleFields.push(el.previousElementSibling)
    }

  });
  console.log(selectedEleFields)
}

/**
 * 1. add a change listener to the select dropdown
 * 2. when select dropdown is selected, find elements with that className Value
 *        - example: selected: row-1
 *            -> find elements that has 'row-1' className, and set style.backgroundColor to lightgray
 *            -> google HTML dom style if you need to
 */
export const makeRowsLightGray = () => {
  const dropdown = document.querySelector('.select-wrapper select')
  dropdown.addEventListener('change', (event) => {
    let row = document.getElementsByClassName(event.target.value)
    Array.prototype.forEach.call(row, (el) => {
      el.style.background = 'lightgray'

    });
  });
}