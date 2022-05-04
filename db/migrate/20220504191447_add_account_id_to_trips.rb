class AddAccountIdToTrips < ActiveRecord::Migration[6.1]
  def change
    add_column :trips, :account_id, :integer
  end
end
