class ProfilesController < ApplicationController

    def create
        profile = Profile.create!(profile_params)
        session[:profile_id] = profile.id
        render json: profile, status: :created
      end
    
      def show
        # render json: @current_profile
        profile = Profile.find_by(id: session[:account_id])
        if profile
          render json: profile
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

      def index
        profiles = Profile.where(account_id: session[:account_id])
        render json: profiles, status: :ok
    end
    
      private
    
      def profile_params
        params.permit(:name, :image, :account_id )
      end

end
