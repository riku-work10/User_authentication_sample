# Be sure to restart your server when you modify this file.

# Avoid CORS issues when API is called from the frontend app.
# Handle Cross-Origin Resource Sharing (CORS) in order to accept cross-origin Ajax requests.

# Read more: https://github.com/cyu/rack-cors

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'http://localhost:8000'
    origins '*' # 本番環境では指定のドメインのみ許可

    resource "*",
      headers: :any,
      expose: ['access-token', 'expiry', 'token-type', 'uid', 'client'], # 認証ヘッダー
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
