class FancyList {
  constructor(input){
    this.list = []
    this.input = input
    this.type = typeof(this.input[0])
    this.flatten(this.input)
    this.checkType(this.input)
    this.filList()
  }

  flatten(items) {
    items.flat()
  }

  checkType(items) {
    items.forEach(function(item) {
      if(this.type != typeof(item)){
        throw "elements are not all of the same type!";
      }
    }, this)
  }

  filList() {
    this.list.push(this.input)
    this.list = this.list.flat()
  }

  getItemAt(index) {
    return this.list[index];
  }

  getItemsAt(index, numberOfItems){
    return this.list.slice(index, numberOfItems += 1)
  }

  addItem(item){
    if(this.type != typeof(item)){
      throw "elements are not all of the same type!";
    }
    this.list.push(item)
  }

  addItems(...items){
    items = items.flat()
    this.checkType(items)
    this.list.push(items)
    this.list = this.list.flat()
  }

  insertItemAt(index, item){
    this.list.splice(index, 0, item)
  }

  removeItemAt(index){
    delete this.list[index]
    this.list = this.list.flat()
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
}

const myList1 = new FancyList([3, 4, 7, 9, 9]);

myList1.addItems(1)
// console.log(myList1.input)
// console.log(myList1.getItemAt(1))
// console.log(myList1.getItemsAt(1, 2))
// console.log(myList1.input)
// console.log(" ")

console.log(myList1.list)
myList1.removeItems(3, 9)
console.log(myList1.list)

// myList1.removeItemsAt(0, 2)
// myList1.removeItem(5)
// myList1.insertItemAt(3, 100)
// console.log(myList1.list)


// puts list2.list
// # # creates new lists
// # myList1 = new FancyList
// # myList2 = new FancyList(3)
// # myList3 = new FancyList(3, 4)
// # myList4 = new FancyList([5, 6])

// # # 0 is 1st item
// # myList1.get_item_at(0)

// # # 1st item and second item
// # myList1.get_items_at(0, 2)

// # # adds item(s) after last item in list
// # myList1.add_item(6)
// # myList1.add_items(3, 1)
// # myList1.add_items([1, 9, 7, 5])

// # # insets item at the given index
// # # (index, item)(index, item1, item2)(index, [item1, item2, ... itemN])
// # myList1.insert_item_at(0, 5)
// # myList1.insert_items_at(2, 9, 8)
// # myList1.insert_items_at(4, [7, 6, 5])

// # # removes item at given index (index)
// # myList1.remove_item_at(0)

// # # removes number of items starting from the index (index, numberOfItems)
// # myList1.remove_items_at(2, 3)

// # # removes first item corresponding with the given item (item)
// # # if there are duplicates, should remove 1st item found
// # myList1.remove_item(5)

// # # removes first item corresponding with the given item (item)
// # # and does this for each item given
// # myList1.remove_items(3, 4)

// # # samen but with an array of items
// # myList1.remove_items([0, 7])



