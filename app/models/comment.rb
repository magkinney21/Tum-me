class Comment < ApplicationRecord
  belongs_to :post, dependent: :destroy
  belongs_to :user, dependent: :destroy

  validates :content,
            presence: true,
            length: {maximum: 500}
end
