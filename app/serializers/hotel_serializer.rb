class HotelSerializer < ActiveModel::Serializer
  attributes :id, :name, :city_state, :tag
end
