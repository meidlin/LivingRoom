class CreateMovielists < ActiveRecord::Migration
  def change
    create_table :movielists do |t|
      t.references :movie, index: true
      t.references :list, index: true

      t.timestamps
    end
  end
end
