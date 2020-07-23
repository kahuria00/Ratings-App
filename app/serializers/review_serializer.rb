class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :matatu_id
end
