class FancyList {
  constructor(...input){

    // method needed during the construction
    this.addItemsToList = function(items) {
      this.checkType(items)
      _list.push(items)
      _list = _list.flat()
    }

    // remove after test fase!
    // this.showList = function() {
    //   return _list
    // }

    // variables
    let _list = []
    this.items = []
    this.input = this.flattenItems(input)
    this.type = typeof(this.input[0])
    this.addItemsToList(this.input)

    // methods to get items
    this.getItemAt = function(index) { return _list[index] }

    this.getItemsAt = function(index, numberOfItems) {
      numberOfItems = index + numberOfItems
      return _list.slice(index, numberOfItems)
    }

    // insert items
    this.insertItemAt = function(index, item) {
      this.checkType(item)
      _list.splice(index, 0, item)
    }

    this.insertItemsAt = function(index, ...items){
      items = this.flattenItems(items)
      this.checkType(items)
      _list.splice(index, 0, items)
      _list = this.flattenItems(_list)
    }

    // remove items
    this.removeItemAt = function(index) {
      // _list.splice(index, 1)
      this.removeItemsAt(index, 1)
    }

    this.removeItemsAt = function(index, numberOfItems){
      _list.splice(index, numberOfItems)
    }

    this.removeItem = function(item){
      const index = _list.indexOf(item)
      this.removeItemsAt(index, 1)
    }

    this.removeItems = function(...items){
      items = this.flattenItems(items)
      items.forEach(function(item) {
        const index = _list.indexOf(item)
        this.removeItemsAt(index, 1)
      }, this)
    }
  }

  // public methods to add items
  addItem(item) {
    this.checkType(item)
    this.addItems(item)
  }
  addItems(...items) {
    const item = items.flat()
    this.checkType(item)
    this.addItemsToList(item)
  }

  // flattens the arrays
  flattenItems(items) {
    return items.flat()
  }

  // // checks the datatype of the input
  checkType(items) {
    if (Array.isArray(items)) {
      items.forEach(function(item) {
        if(this.type != typeof(item)){
          throw "elements are not all of the same type!";
        }
      }, this)
    } else {
      if(this.type != typeof(items)){
        throw "elements are not all of the same type!";
      }
    }
  }
}

// tests
console.log('create list: 1, 2, 3, 4, 5, 6 with and without brackets')
const myList1 = new FancyList([1, 2, 3, 4, 5, 6])
const myList2 = new FancyList(1, 2, 3, 4, 5, 6)

console.log('add 7 to list 1 and 2')
myList1.addItem(44)
myList2.addItem(44)

console.log('add items 8, 9 and 10 to list 1 and 2')
console.log('interchange brackets')
myList1.addItems(12, 14)
myList2.addItems([12, 14])

console.log('insert item 300 in both list')
myList1.insertItemAt(3, 500)
myList2.insertItemAt(3, 500)

console.log('insert items in both list')
myList1.insertItemsAt(2, [3, 2, 1, 0])
myList2.insertItemsAt(2, 3, 2, 1, 0)

console.log('remove item at index 7 from both list')
myList1.removeItemAt(7)
myList2.removeItemAt(7)

console.log('remove 4 item starting at index 2 from both list')
myList1.removeItemsAt(2, 4)
myList2.removeItemsAt(2, 4)

console.log('remove item with 1 from both list')
myList1.removeItem(1)
myList2.removeItem(1)

console.log('remove first items with value 4, 44 and 14 from both list')
myList1.removeItems(4, 44, 14)
myList2.removeItems([4, 44, 14])

console.log('get item with index 4 from both list')
console.log(myList1.getItemAt(0))
console.log(myList2.getItemAt(0))

console.log('get 3 items starting with index 2 from both list')
console.log(myList1.getItemsAt(2, 3))
console.log(myList2.getItemsAt(2, 3))

console.log('uncomment following code to check if code throws errors correctly')
// console.log('list 1:', myList1.showList())
// console.log('list 2:', myList2.showList())
// console.log('list 1:', myList1.list)
// console.log('list 2:', myList2.list)
// console.log('list 1:', myList1._list)
// console.log('list 2:', myList2._list)
// myList1.insertItemsAt(2, [3, 2, '1', 0])
// myList2.insertItemsAt(2, '3', 2, 1, 0)
// myList1.insertItemAt(3, "500")
// myList1.addItems(12, true)
// myList2.addItems(["12", 14])
// myList2.addItem('44')



