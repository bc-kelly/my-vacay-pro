class CreateTrips < ActiveRecord::Migration[6.1]
  def change
    create_table :trips do |t|
      t.string :name
      t.string :location
      t.string :date_start
      t.string :date_end
      t.integer :points
      t.belongs_to :profile, null: false, foreign_key: true
      t.belongs_to :hotel, null: false, foreign_key: true

      t.timestamps
    end
  end
end
