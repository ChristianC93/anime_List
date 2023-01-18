# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Anime.destroy_all
User.destroy_all

Anime.create(name: "Fullmetal Alchemist: Brotherhood" , episode_count: 64 , genre: "Action, Adventure" , image_url:"https://cdn.myanimelist.net/images/anime/1223/96541l.jpg");
Anime.create(name: "Steins' Gate" , episode_count: 24 , genre: "Sci-Fi, Drama" , image_url:"https://cdn.myanimelist.net/images/anime/5/73199l.jpg");
Anime.create(name: "Hunter x Hunter" , episode_count: 148 , genre: "Action, Adventure" , image_url:"https://cdn.myanimelist.net/images/anime/1337/99013.jpg");
Anime.create(name: "Bocchi The Rock!" , episode_count: 12 , genre: "Comedy", image_url: "https://cdn.myanimelist.net/images/anime/1448/127956.jpg");
Anime.create(name: "Vinland Saga" , episode_count: 24 , genre: "Action, Adventure" , image_url: "https://cdn.myanimelist.net/images/anime/1048/102249.jpg" );

