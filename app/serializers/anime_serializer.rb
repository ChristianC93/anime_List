class AnimeSerializer < ActiveModel::Serializer
  has_many :users
  attributes :id, :name, :episode_count, :genre, :image_url
end
