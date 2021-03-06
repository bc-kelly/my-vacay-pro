class Account < ApplicationRecord
    has_many :profiles, dependent: :destroy
    has_many :trips, through: :profiles

    has_secure_password

    validates :email, presence: true, uniqueness: :true
end
