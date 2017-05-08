class Recipe < ApplicationRecord
  def self.get_recipes(query = '<required>')
    response = HTTParty.get "https://edamam-recipe-search-and-diet-v1.p.mashape.com/search?_app_id=e12ebee8&_app_key=892f59476a7b1bd0bf032783cd434738&q=#{query}",
    headers:{
      "X-Mashape-Key" => "wOs4FuYPgdmshA5VegITRlcYMWGnp106KGfjsnBfdhXqUXPoi1",
      "Accept" => "application/json"
    }
    binding.pry
  end
end
