class UserAnimeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :anime_id, :rating, :review
end
