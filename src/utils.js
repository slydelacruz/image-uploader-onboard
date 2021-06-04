/**
 * Display INNERHTML inside a div with class that contains 'second-element'. 
 * 1. Must start with document.getElementsByClassName("element") to get all elements
 * @returns 
 */
 export const rowOneText = () => {
  // must use code logic, no hard code
  const firstRow = document.getElementsByClassName('row-1')

  console.log('first row collection', firstRow)

  let selectRow = null

  // forEach(firstRow, row => {
  //   let secondEl = row.childNodes;
  //   console.log('second element', secondEl)
  // })
  let childDiv = firstRow[0].childNodes[1];
  childDiv.setAttribute('class', 'second-element')
  childDiv.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores earum sunt amet quas incidunt nobis blanditiis sequi nihil molestias fugiat architecto exercitationem soluta necessitatibus beatae, itaque odit ut officiis!"
  childDiv.style.marginTop = '30px'

  return ""
}


/**
 * Display value of the input element. 
 * 1. Must use document.getElementsByClassName("ele-field") to get all elements, 
 * 2. filter through tagName of each element AND filter through className to make sure it has dog in it 
 * @returns 
 */
 export const rowTwoText = () => {
  // must use code logic, no hard coding
  // const secondRow = document.querySelector('.row-2')
  // let ele = secondRow.setAttribute('class', 'ele-field')

  // console.log(ele)
  // console.log(secondRow)



  return ""
}

/**
 * Display tag names of all previousElementSiblings with class = 'element'. 1. Must use document.getElementsByClassName("element") to get all elements
 * @returns 
 */
export const displayTagNames = () => {
  // must use code logic, no hard coding
  return ""
}

/**
 * 1. Get all elements with className ele-field in it... 
 * 2. loop through to and if previousSibling contains 'field' regardless of capital letters, add the 'ele-field' element to the array (array.push()) 
 * 3. console.log it
 * 
 */
export const displayConsolelog = () => {
  let matchedPreviousSiblings = []
  // you can use matchedPreviousSiblings.push() -> google array.push
  console.log("matched previous siblings with 'field' regardless of capital letters or not")
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