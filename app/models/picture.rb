class Picture < ApplicationRecord
  validates :title, :url, presence: true 
end
