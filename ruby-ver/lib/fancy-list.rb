# Makes a smart list.
class FancyList

  def initialize(*input)
    @list = []
    @input = input
    @type = @input[0].class
    fix_array
    add_input_initialize
  end

  # getting items
  def get_item_at(index)
    @list[index]
  end

  def get_items_at(index, number)
    @list[index, number]
  end

  # adding items
  def add_item(item)
    type_check_item(item)
    @list << item
  end

  def add_items(*items)
    items = items.first if items.first.is_a?(Array)
    create_type_check(items)
    @list.push(*items)
  end

  # inserting items
  def insert_item_at(index, item)
    type_check_item(item)
    @list.insert(index, item)
    flatten_list
  end

  def insert_items_at(index, *items)
    items = items.first if items.first.is_a?(Array)
    create_type_check(items)
    @list.insert(index, items)
    flatten_list
  end

  # removing items by index
  def remove_item_at(index)
    @list.slice!(index)
  end

  def remove_items_at(index, number)
    @list.slice!(index, number)
  end

  # removing items by comparison with input
  def remove_item(item)
    index = @list.index(item)
    remove_item_at(index)
  end

  def remove_items(*items)
    items = items.first if items.first.is_a?(Array)
    items.each do |item|
      remove_item(item)
    end
  end

  private

  def type_check_item(item)
    raise "Item is not of the type: #{@type}" unless item.class == @type
  end

  def fix_array
    @input = @input.first if @input.first.is_a?(Array)
    create_type_check(@input)
  end

  def create_type_check(input)
    @type = input[0].class if @list == []
    input.each do |item|
      raise "Items are not all of the type: #{@type}" unless item.class == @type
    end
  end

  def add_input_initialize
    @list.push(*@input)
  end

  def flatten_list
    @list.flatten!
  end
end
