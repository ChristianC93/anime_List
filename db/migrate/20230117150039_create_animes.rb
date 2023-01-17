class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :name
      t.integer :episode_count
      t.string :genre
      t.string :image_url

      t.timestamps
    end
  end
end
