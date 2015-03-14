class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.integer :site_id, null: false
      t.date :captured_at, null: false
      t.string :url, null: false

      t.timestamps null: false
    end
  end
end
