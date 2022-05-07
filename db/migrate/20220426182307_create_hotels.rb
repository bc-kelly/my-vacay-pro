class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :image
      t.string :city
      t.string :state
      t.string :tag

      t.timestamps
    end
  end
end
