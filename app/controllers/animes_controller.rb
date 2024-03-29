class AnimesController < ApplicationController
    skip_before_action :authorize, only: [:index]

    #GET all anime (read)
    def index
        render json: Anime.all
    end

    #GET one anime anime/:id
    def show
        anime = Anime.find_by!(id: params[:id])
        render json: anime, status: :ok 
    end

    #POST anime (create)
    def create
        anime = Anime.create!(anime_params)
        render json: anime, status: :created
    end

    #DELETE anime (delete)
    def destroy
        anime = Anime.find_by!(id: params[:id])
        anime.destroy
        render json: {}, status: :no_content
    end

    #return all animes that have equal to or more than a given number of reviews
    def reviewed_animes
        rev_animes = Anime.all.select {|anime| anime.user_animes.size >= params[:number].to_i}
        render json: rev_animes
    end

    private

    def anime_params
        params.permit(:name, :episode_count, :genre, :image_url)
    end
end
