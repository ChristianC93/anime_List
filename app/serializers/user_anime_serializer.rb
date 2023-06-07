class UserAnimeSerializer < ActiveModel::Serializer
  belongs_to :anime
  belongs_to :user
  attributes :id, :rating, :review, :anime_id, :anime
end
