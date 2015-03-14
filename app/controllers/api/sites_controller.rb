class Api::SitesController < ApplicationController
  def index
    render json: Site.all, each_serializer: SiteSerializer
  end
end
