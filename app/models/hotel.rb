class Hotel < ApplicationRecord
    has_many :trips, dependent: :destroy
end
