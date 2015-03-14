class ImageSerializer < ActiveModel::Serializer
  attributes :id, :captured_at, :site_id, :url
end
