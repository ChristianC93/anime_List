class UserSerializer < ActiveModel::Serializer
  has_many :animes
  has_many :user_animes

  attributes :username

end
