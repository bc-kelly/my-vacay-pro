require 'nokogiri'
require 'open-uri'
require 'pry'
# require 'csv'
def create_project_hash
  kickstarter = Nokogiri::HTML(URI.open("https://www.booking.com/hotel/us/east-austin.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA%2AAS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&dest_id=20126394;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1652307354;srpvid=0f8b9c8c38d20217;type=total;ucfs=1&#hotelTmpl"))
  projects = []
  # list = kickstarter.search('div').css('.fcab3ed991')

  # list = kickstarter.css('.gallerytext')
  # p list.length

  kickstarter.css(".bui-grid__column bui-grid__column-12 js-k2-hp--block k2-hp--popular_facilities").each do |project|
    projects << {
      :title => project.css(".important_facility").text,
      # :image => project.css(".thumb").css("img").attribute("src").value
    }
  end
  projects
  binding.pry
#   CSV.open("myfiletest2.csv", "w") do |csv|
#     projects.each do |project|
#       csv << [project[:title], project[:image2]]
#     end
#   end
end
create_project_hash()
# this worked before starting line 29
# def create_project_hash
#   kickstarter = Nokogiri::HTML(URI.open("https://en.wikipedia.org/wiki/List_of_hotels_in_the_United_States"))
#   projects = []
#   # list = kickstarter.search('div').css('.fcab3ed991')

#   # list = kickstarter.css('.gallerytext')
#   # p list.length

#   kickstarter.css(".gallerybox").each do |project|
#     projects << {
#       :title => project.css(".gallerytext").text,
#       :image => project.css(".thumb").css("img").attribute("src").value
#     }
#   end
#   projects
#   binding.pry
# #   CSV.open("myfiletest2.csv", "w") do |csv|
# #     projects.each do |project|
# #       csv << [project[:title], project[:image2]]
# #     end
# #   end
# end
# create_project_hash()
# this worked ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

# require 'nokogiri'
# require 'open-uri'
# require 'pry'

# def create_project_hash
#     kickstarter = Nokogiri::HTML(URI.open("https://www.booking.com/searchresults.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA*AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Faid%3D309654%3Blabel%3Dhotels-english-en-caus-sYluq0q935aXuqlDOHhA%252AAS166194690220%253Apl%253Ata%253Ap1%253Ap22%252C563%252C000%253Aac%253Aap%253Aneg%253Afi%253Atikwd-298016546864%253Alp9067609%253Ali%253Adec%253Adm%253Appccp%253DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg%3Bsid%3Dfd05246afd3f6d315b8f2ce0b1081a92%3Bsb_price_type%3Dtotal%26%3B&ss=New+York%2C+United+States+of+America&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&dest_id=20088325&dest_type=city&search_pageview_id=d0a88ff5815404e3&search_selected=true"))

#     projects = {}

#   kickstarter.css("li.project.grid_4").each do |project|
#     title = project.css("h2.bbcard_name strong a").text
#     projects[title.to_sym] = {
#       :description => project.css("p.bbcard_blurb").text
#     }
#   end
#   projects
# end

# require 'nokogiri'
# require 'open-uri'
# require 'pry'
# # require 'csv'

# def create_project_hash
#   kickstarter = Nokogiri::HTML(URI.open("https://www.booking.com/searchresults.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA*AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Faid%3D309654%3Blabel%3Dhotels-english-en-caus-sYluq0q935aXuqlDOHhA%252AAS166194690220%253Apl%253Ata%253Ap1%253Ap22%252C563%252C000%253Aac%253Aap%253Aneg%253Afi%253Atikwd-298016546864%253Alp9067609%253Ali%253Adec%253Adm%253Appccp%253DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg%3Bsid%3Dfd05246afd3f6d315b8f2ce0b1081a92%3Bsb_price_type%3Dtotal%26%3B&ss=New+York%2C+United+States+of+America&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&dest_id=20088325&dest_type=city&search_pageview_id=d0a88ff5815404e3&search_selected=true"))
#   projects = []
#   # list = kickstarter.search('div').css('.fcab3ed991')

# #   list = kickstarter.css('div.fcab3ed991')
# # p list.length

#   kickstarter.css(".d20f4628d0").each do |project|
#     projects << {
#       :title => project.css(".fcab3ed991 a23c043802").text,
#       # :image => project.css(".c90a25d457").css("img").attribute("src").value
#     }
#   end
#   projects
#   # binding.pry
# #   CSV.open("myfiletest2.csv", "w") do |csv|
# #     projects.each do |project|
# #       csv << [project[:title], project[:image2]]
# #     end
# #   end
# end
# create_project_hash()

# require 'nokogiri'
# require 'open-uri'
# require 'pry'
# require 'csv'
# def create_project_hash
#   kickstarter = Nokogiri::HTML(URI.open("https://www.istockphoto.com/photos/space-exploration"))
#   projects = []
 
#   kickstarter.css(".GatewayAsset-module__imageContainer___OgAfi").each do |project|
#     projects << {
#       :title => project.css(".GatewayAsset-module__assetDetails___CH7MK").css("a").text,
      
#       :image2 => project.css("figure.GatewayAsset-module__figure___js9NH picture").css("img").attribute("src").value
     
#     }
#   end
#   # return the projects hash
#   projects
#   CSV.open("myfiletest2.csv", "w") do |csv|
#     projects.each do |project|
#       csv << [project[:title], project[:image2]]
#     end
#   end
# end