class CreateUserAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :user_animes do |t|
      t.integer :user_id
      t.integer :anime_id
      t.integer :rating
      t.text :review

      t.timestamps
    end
  end
end
