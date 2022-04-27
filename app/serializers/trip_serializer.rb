class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :date_start, :date_end, :points
  has_one :profile
  has_one :hotel
end
