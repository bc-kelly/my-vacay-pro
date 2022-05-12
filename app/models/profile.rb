class Profile < ApplicationRecord
  has_many :trips, dependent: :destroy
  belongs_to :account
end
