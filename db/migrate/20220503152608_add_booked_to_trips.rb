class AddBookedToTrips < ActiveRecord::Migration[6.1]
  def change
    add_column :trips, :booked, :boolean
  end
end
