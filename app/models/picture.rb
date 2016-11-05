class Picture < ApplicationRecord
  validates :title, :url, presence: true

  # def self.last10
  #   last(10)
  # end
end
