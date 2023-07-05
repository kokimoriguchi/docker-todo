module Authentication

  private

  def authenticate_user
    begin
      token = cookies[:token]
      @current_user_id = JwtService.decode(token)
    rescue JWT::DecodeError, JWT::ExpiredSignature, JWT::VerificationError
      render json: { message: 'unauthorized' }, status: :unauthorized
    end
  end
end
