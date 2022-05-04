class Trip < ApplicationRecord
  belongs_to :profile
  belongs_to :hotel
  # has_one :account, :through => :profile
end
