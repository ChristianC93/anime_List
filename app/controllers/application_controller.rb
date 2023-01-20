class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response

  before_action :authorize


  private

  def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: { errors: ["You must be logged in"] }, status: :unauthorized unless @current_user
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

  def record_not_found_response
    render json: { errors: ["Record not found"] }, status: :not_found
  end

end
