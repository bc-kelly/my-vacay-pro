class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :image
  has_one :account
end
