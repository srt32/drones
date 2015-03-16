class ImageSerializer < ActiveModel::Serializer
  attributes :id, :captured_at, :site_id, :url, :points

  def points
    [9, 10]
  end
end
