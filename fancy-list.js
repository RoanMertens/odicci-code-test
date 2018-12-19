
const _flattenItems = Symbol('flattenItems')
const _checkType = Symbol('checkType')
const _filList = Symbol('filList')

class FancyList {
  constructor(input){
    this.list = []
    this.input = input
    this.type = typeof(this.input[0])
    this[_flattenItems](this.input)
    this[_checkType](this.input)
    this[_filList](this.input)
  }

  // public

  // get items
  getItemAt(index) { return this.list[index] }

  getItemsAt(index, numberOfItems){
    return this.list.slice(index, numberOfItems += 1)
  }

  // add items
  addItem(item){
    if(this.type != typeof(item)){
      throw "elements are not all of the same type!";
    }
    this[_filList](item)
  }

  addItems(...items){
    items = this[_flattenItems](items)
    this[_checkType](items)
    this[_filList](items)
  }

  // insert items
  insertItemAt(index, item){
    this.list.splice(index, 0, item)
  }

  insertItemsAt(index, ...items){
    this.list.splice(index, 0, items)
    this.list = this[_flattenItems](this.list)
  }

  // remove items
  removeItemAt(index){
    delete this.list[index]
    this.list = this[_flattenItems](this.list)
  }

  removeItemsAt(index, numberOfItems){
    this.list.splice(index, numberOfItems)
  }

  removeItem(item){
    const index = this.list.indexOf(item)
    this.removeItemAt(index)
  }

  removeItems(...items){
    items.forEach(function(item) {
      const index = this.list.indexOf(item)
      this.removeItemAt(index)
    }, this)
  }

  // private

  // flattens the arrays
  [_flattenItems](items) { return items.flat() }

  // checks the datatype of the input
  [_checkType](items) {
    items.forEach(function(item) {
      if(this.type != typeof(item)){
        throw "elements are not all of the same type!";
      }
    }, this)
  }

  // adds items to the list
  [_filList](item) {
    this.list.push(item)
    this.list = this[_flattenItems](this.list)
  }
}

const myList1 = new FancyList([3, 4, 7, 9, 9]);

myList1.addItem(1)
// console.log(myList1.input)
// console.log(myList1.getItemAt(1))
// console.log(myList1.getItemsAt(1, 2))
// console.log(myList1.input)
// console.log(" ")

// console.log(myList1[_list])
// myList1.removeItems(3, 9)
console.log(myList1.list)

// myList1.removeItemsAt(0, 2)
// myList1.removeItem(5)
myList1.insertItemsAt(3, 14, 100)
console.log(myList1.list)
