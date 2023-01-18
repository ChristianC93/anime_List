class AnimesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    #GET all anime (read)
    def index
        render json: Anime.all
    end

    #POST anime (create)
    def create
        anime = Anime.create!(anime_params)
        render json: anime, status: :created
    end

    private

    def anime_params
        params.permit(:name, :episode_count, :genre, :image_url)
    end
end
