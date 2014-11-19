class CreateMovies < ActiveRecord::Migration
  def change
    create_table :movies do |t|
      t.references :list, index: true
      t.string :title
      t.string :description
      t.string :rating
      t.string :genre

      t.timestamps
    end
  end
end
