class Profile < ApplicationRecord
  has_many :trips
  belongs_to :account
end
