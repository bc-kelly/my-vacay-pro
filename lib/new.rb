require 'nokogiri'
require 'open-uri'
require 'pry'
require 'csv'

def create_project_hash
  kickstarter = Nokogiri::HTML(URI.open("https://www.booking.com/searchresults.html?aid=309654&label=hotels-english-en-caus-sYluq0q935aXuqlDOHhA*AS166194690220%3Apl%3Ata%3Ap1%3Ap22%2C563%2C000%3Aac%3Aap%3Aneg%3Afi%3Atikwd-298016546864%3Alp9067609%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg&sid=fd05246afd3f6d315b8f2ce0b1081a92&sb=1&sb_lp=1&src=index&src_elem=sb&error_url=https%3A%2F%2Fwww.booking.com%2Findex.html%3Faid%3D309654%3Blabel%3Dhotels-english-en-caus-sYluq0q935aXuqlDOHhA%252AAS166194690220%253Apl%253Ata%253Ap1%253Ap22%252C563%252C000%253Aac%253Aap%253Aneg%253Afi%253Atikwd-298016546864%253Alp9067609%253Ali%253Adec%253Adm%253Appccp%253DUmFuZG9tSVYkc2RlIyh9YcsZ-Id2vkzIfTmYhvC5HOg%3Bsid%3Dfd05246afd3f6d315b8f2ce0b1081a92%3Bsb_price_type%3Dtotal%26%3B&ss=New+York%2C+United+States+of+America&is_ski_area=&checkin_year=&checkin_month=&checkout_year=&checkout_month=&group_adults=2&group_children=0&no_rooms=1&b_h4u_keep_filters=&from_sf=1&dest_id=20088325&dest_type=city&search_pageview_id=d0a88ff5815404e3&search_selected=true"))
  projects = []
  kickstarter.css(".a826ba81c4 fe821aea6c fa2f36ad22 afd256fc79 d08f526e0d ed11e24d01 da89aeb942").each do |project|
    projects << {
      :title => project.css(".a4225678b2").text,
      :image => project.css("c90a25d457").css("img").attribute("src").value
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