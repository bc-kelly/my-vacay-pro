class Trip < ApplicationRecord
  belongs_to :profile
  belongs_to :hotel
end
