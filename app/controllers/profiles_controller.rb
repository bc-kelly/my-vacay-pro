class ProfilesController < ApplicationController

      def create
        profile = Profile.new(profile_params)
        profile.account_id = session[:account_id]
        profile.save
        render json: profile
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

      def update
        profile = Profile.find(params[:id])
        profile.update!(profile_params)
        render json: profile, status: :ok
    rescue ActiveRecord::RecordNotFound
        render json: {error: "Profile not found"}, status: :not_found
    end
    
      private
    
      def profile_params
        params.permit(:name, :image )
      end

end

# def create
#   profile = Profile.create!(profile_params)
#   session[:profile_id] = profile.id
#   render json: profile, status: :created
# end
