class User < ApplicationRecord
    has_many :user_animes, dependent: :destroy
    has_many :animes, through: :user_animes

    has_secure_password
 
    validates :username, presence: true, uniqueness: true
end
