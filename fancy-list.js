class FancyList {
  constructor(...input){

    // methods needed during the construction
    this.addItemsToList = function(items) {
      this.checkType(items)
      _list.push(items)
      _list = _list.flat()
    }

    // remove after test fase!
    this.showList = function() {
      return _list
    }

    // variables
    let _list = []
    this.items = []
    this.input = this.flattenItems(input)
    this.type = typeof(this.input[0])
    this.addItemsToList(this.input)

    // methods to get items
    this.getItemAt = function(index) { return _list[index] }

    this.getItemsAt = function(index, numberOfItems) {
    return _list.slice(index, numberOfItems += 1)
    }

    // insert items
    this.insertItemAt = function(index, item) {
      this.checkType(item)
      _list.splice(index, 0, item)
    }

    this.insertItemsAt = function(index, ...items){
      this.checkType(items)
      items = this.flattenItems(items)
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
      items.forEach(function(item) {
        const index = _list.indexOf(item)
        this.removeItemsAt(index, 1)
      }, this)
    }
  }

  // methods to add items
  addItem(item) {
    this.checkType(item)
    this.addItems(item)
  }
  addItems(...items) {
    this.checkType(items)
    const item = items.flat()
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





const myList1 = new FancyList([3, 4, 7, 9]);
myList1.addItem(44)
myList1.addItems([12, 14])

// myList1.insertItemAt(1, "11")
myList1.insertItemsAt(1, [11, 55, "123", 5555])
// myList1.removeItemAt(6)
// myList1.removeItemsAt(2, 4)
// myList1.removeItem(5555)
myList1.removeItems(5555, 55, 9, 44)
// console.log('getting item at index 5:',myList1.getItemAt(5))
// console.log('getting three items starting at 2:', myList1.getItemsAt(1, 3))
console.log(myList1.showList())
