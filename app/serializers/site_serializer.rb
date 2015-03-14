class SiteSerializer < ActiveModel::Serializer
  attributes :id, :name

  embed :ids, include: true

  has_many :images
end
