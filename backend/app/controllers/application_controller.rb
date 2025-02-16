class ApplicationController < ActionController::API
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :fix_session_params, if: -> { params[:session].present? } # 追加

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :password_confirmation])
    devise_parameter_sanitizer.permit(:sign_in, keys: [:email, :password])
  end


  private

  # session のネストをフラットにする
  def fix_session_params
    params.merge!(params[:session].to_unsafe_h)
    params.delete(:session) # session キーを削除
  end
end
