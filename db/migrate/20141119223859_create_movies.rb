class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.references :list, index: true
      t.string :title
      t.text :description
      t.integer :critic_rating
      t.integer :user_rating
      t.string :genre
      t.integer :runtime
      t.integer :rt_id
      t.string :image_url

      t.timestamps
    end
  end
end
