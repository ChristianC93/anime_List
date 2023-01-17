class Anime < ApplicationRecord
    has_many :user_animes
    has_many :users, through: :user_animes

    validates :name, :episode_count, :genre, presence: true
    validates :episode_count, numericality: { only_integer: true }
end
