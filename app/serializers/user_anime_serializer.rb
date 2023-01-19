class UserAnimeSerializer < ActiveModel::Serializer
  belongs_to :anime
  belongs_to :user
  attributes :id, :rating, :review, :anime_id, :anime_name


  def anime_name
    Anime.find_by(id: self.object.anime_id).name
  end
  
end
