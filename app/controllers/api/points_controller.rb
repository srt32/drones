class Api::PointsController < ApplicationController
  def index
    #render json: Site.all, each_serializer: SiteSerializer

    # filter by image_id

    render json: {
      points: [
        { id: 1, description: "foo point" }
      ]
    }
  end
end
