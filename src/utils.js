/**
 * Display INNERHTML inside a div with class that contains 'second-element'. 
 * 1. Must start with document.getElementsByClassName("element") to get all elements
 * 2. Filter through the elements to get the one that includes className of 'second-element
 * @returns 
 */
 export const rowOneText = () => {
  // must use code logic, no hard code
  const elementDivs = document.getElementsByClassName('element')

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



  return ""
}

/**
 * Display tag names of all firstChildElement innerHTML. 1. Must use document.getElementsByClassName("element") to get all elements
 * @returns 
 */
export const displayTagNames = () => {
  const elementDivs = document.getElementsByClassName('element')  

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

  
}

/**
 * 1. add a change listener to the select dropdown
 * 2. when select dropdown is selected, find elements with that className Value
 *        - example: selected: row-1
 *            -> find elements that has 'row-1' className, and set style.backgroundColor to lightgray
 *            -> google HTML dom style if you need to
 */
export const makeRowsLightGray = () => {
  
}