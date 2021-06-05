import forEach from 'lodash/forEach'

/**
 * get parent element of element with id="option-product-template-0-0"
 * 1. getElementById()
 * 2. with #1, .get
 */
export const getParentElement = () => {
  let praentElement = null
  

  // expect: <li class='HorizontalList__Item'>...</li>
  console.log('parent element', praentElement)
}

/**
 * get parent element of element with id="option-product-template-0-0"
 * 1. getElementById()
 * 2. with #1, .parentElement
 * 3. with #2, .parentElement
 */
export const getGrandParentElement = () => {
  let grandparentElement = null

  // expect: <ul class="SizeSwatchList HorizontalList HorizontalList--spacingTight">...</ul>
  console.log("grandparent element", grandparentElement)
}

/**
 * get parent element of element with id="option-product-template-0-0"
 * 1. getElementById()
 * 2. with #1, .parentElement
 * 3. with #2, .parentElement
 * 4. with #3, .previousElementSibling
 */
export const getGrandParentPreviousSibling = () => {
  let grandparentPreviousElementSibling = null

  // expect: <span class="ProductForm__Label"> Size: </span>
  console.log('grand parent previous element sibling', grandparentPreviousElementSibling)
}

/**
 * Get all the input tags (<input />) that their grandParentPreviouselementSibling has 'Size' in innerHTML
 * 1. document.getElementsByTagName()
 * 2. Loops through each with forEach, if their grand parent previous element has Size in innerHTML, add it to the array
 */
export const getSizeInputElements = () => {
  let sizeInputs = []

  // expect: [<input id='option-product-template-0-0' ... />, <input id='option-product-template-0-1' ... />]
  console.log('size inputs', sizeInputs)
}


/**
 * Get all sizeInputElements from previous function,
 * addEventListener('change') to each input
 * when the change happens, get the value of input example: 24x24cm,
 * Replace 'add to cart' in <button><span>Add to cart</span></button> with 'upload 24x24cm', KEEP THE <span></span>, don't remove it
 * 
 * expect result: 
 * when you click 24x24cm, you see 'upload 24x24cm' instead of 'add to cart'
 * when you click 40x40cm, you see 'upload 40x40cm' instead of whatever text inside the button
 */
export const sizeInputListeners = () => {

}