class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
      account = Account.find_by(email: params[:email])
      if account&.authenticate(params[:password])
        session[:account_id] = account.id
        render json: account, status: :created, logged_in: true, account: account
      else
        render json: { errors: ["Invalid email or password"] }, status: :unauthorized
      end
    end
  
    def destroy
      session.delete :account_id
      head :no_content
    end

end
