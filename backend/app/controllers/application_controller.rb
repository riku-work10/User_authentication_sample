class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken

        protected

        def configure_permitted_parameters
          devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation])
          devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
        end
end
