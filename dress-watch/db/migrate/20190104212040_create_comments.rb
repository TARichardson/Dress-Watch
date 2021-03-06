class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.string     :title
      t.text       :body
      t.belongs_to :user, index: true
      t.belongs_to :article, index: true
      t.datetime   :published_at
      t.timestamps
    end
  end
end
