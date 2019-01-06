class CreateReplies < ActiveRecord::Migration[5.2]
  def change
    create_table :replies do |t|
      t.string     :title
      t.string     :body
      t.belongs_to :user, index: true
      t.belongs_to :comment, index: true
      t.datetime   :published_at
      t.timestamps
    end
  end
end
