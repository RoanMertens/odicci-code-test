require 'fancy-list'

describe FancyList do
  my_list_one = FancyList.new
  my_list_two = FancyList.new(3)
  my_list_three = FancyList.new(3, 4)
  my_list_four = FancyList.new([5, 6, 7])

  it 'allow correct creation of fancylists and the getting of elements' do
    expect(my_list_one.get_item_at(0)).to eq nil
    expect(my_list_two.get_item_at(0)).to eq 3
    expect(my_list_three.get_items_at(0, 2)).to eq [3, 4]
    expect(my_list_four.get_items_at(0, 3)).to eq [5, 6, 7]
  end

  it 'raise errors in following cases' do
    expect { FancyList.new([1, 'wrong']) }.to raise_error(
      RuntimeError,
      'Items are not all of the type: Integer'
    )
    expect { my_list_four.add_item('wrong') }.to raise_error(
      RuntimeError,
      'Item is not of the type: Integer'
    )

    expect { my_list_four.insert_items_at(2, [10, 'wrong', 12]) }.to raise_error(
      RuntimeError,
      'Items are not all of the type: Integer'
    )
  end

  it 'allow correct adding of elements to fancylists' do
    my_list_four.add_item(1)
    expect(my_list_four.get_items_at(0, 4)).to eq [5, 6, 7, 1]
    my_list_four.add_items(31, 32)
    expect(my_list_four.get_items_at(0, 6)).to eq [5, 6, 7, 1, 31, 32]
    my_list_four.add_items([2, 3, 4])
    expect(my_list_four.get_items_at(0, 9)).to eq [5, 6, 7, 1, 31, 32, 2, 3, 4]
  end

  it 'allow correct inserting of elements to fancylists' do
    my_list_four.insert_item_at(2, 900)
    expect(my_list_four.get_item_at(2)).to eq 900
    my_list_four.insert_items_at(2, [10, 11, 12])
    expect(my_list_four.get_items_at(2, 3)).to eq [10, 11, 12]
  end

  it 'allow correct removing of elements from fancylists with index' do
    my_list_four.remove_item_at(0)
    expect(my_list_four.get_item_at(0)).not_to eq 5
    my_list_four.remove_items_at(0, 2)
    expect(my_list_four.get_items_at(0, 2)).not_to eq [10, 11]
  end

  it 'allow correct removing of elements from fancylists by comparison with input' do
    my_list_four.remove_item(900)
    expect(my_list_four.get_item_at(2)).not_to eq 900
    my_list_four.remove_items(31, 3)
    expect(my_list_four.get_item_at(4)).not_to eq 31
    expect(my_list_four.get_item_at(8)).not_to eq 3
    my_list_four.remove_items([12, 1, 2])
    expect(my_list_four.get_item_at(1)).not_to eq 12
    expect(my_list_four.get_item_at(3)).not_to eq 1
    expect(my_list_four.get_item_at(5)).not_to eq 2
  end
end
