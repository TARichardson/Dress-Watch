class CreateArticles < ActiveRecord::Migration[5.2]
  def change
    create_table :articles do |t|
      t.string     :title
      t.string     :sub_title
      t.text       :body
      t.belongs_to :user, index: true
      t.belongs_to :product, index: true
      t.datetime   :published_at
      t.timestamps
    end
  end
end
