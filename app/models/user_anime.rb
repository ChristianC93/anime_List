class UserAnime < ApplicationRecord
    belongs_to :user
    belongs_to :anime

    validates :rating, presence: true, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 10 }
    validates :review, length: { maximum: 1000 }
end
