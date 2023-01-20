class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :name, :episode_count, :genre, :image_url
end
