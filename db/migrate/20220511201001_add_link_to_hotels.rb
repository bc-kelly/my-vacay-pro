class AddLinkToHotels < ActiveRecord::Migration[6.1]
  def change
    add_column :hotels, :link, :string
  end
end
