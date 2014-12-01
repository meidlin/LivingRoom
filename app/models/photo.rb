class Photo < ActiveRecord::Base

image_file_name # The original filename of the image.
image_content_type # The mime type of the image
image_file_size # The file size of the image
image_updated_at # The last updated date of the image.

has_attached_file :image, styles: { small: "64x64", med: "100x100", large: "200x200" }
end
