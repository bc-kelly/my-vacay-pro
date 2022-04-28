class ProfilesController < ApplicationController

    def create
        profile = Profile.create!(profile_params)
        session[:profile_id] = profile.id
        render json: profile, status: :created
      end
    
      def show
        render json: @current_profile
      end

      def index
        profiles = Profile.all
        render json: profiles, status: :ok
    end
    
      private
    
      def profile_params
        params.permit(:name, :image )
      end

end
