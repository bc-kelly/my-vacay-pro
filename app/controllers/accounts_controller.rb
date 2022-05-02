class AccountsController < ApplicationController
  # skip_before_action :authorize, only: :create

    def create
        account = Account.create!(account_params)
        session[:account_id] = account.id
        render json: account, status: :created
      end
    
      def show
        # render json: @current_account
        account = Account.find_by(id: session[:account_id])
        if account
          render json: account
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
    
      private
    
      def account_params
        params.permit(:account_name, :email, :password, :password_confirmation)
      end

end
