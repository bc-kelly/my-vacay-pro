class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :city_state
      t.string :tag

      t.timestamps
    end
  end
end
