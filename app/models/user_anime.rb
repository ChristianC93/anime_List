class UserAnime < ApplicationRecord
    belongs_to :user
    belongs_to :anime

    validates :rating, presence: true, numericality: { in: 0..10 }
    validates :review, length: { maximum: 1000 }
end
