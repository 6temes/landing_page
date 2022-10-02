# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.1.2'

# Bundle edge Rails instead: gem "rails", github: "rails/rails", branch: "main"
gem 'rails'

# The original asset pipeline for Rails [https://github.com/rails/sprockets-rails]
gem 'sprockets-rails'

# Contributed Rack Middleware and Utilities
gem 'rack-contrib'

# Use postgresql as the database for Active Record
gem 'pg'

# Use the Puma web server [https://github.com/puma/puma]
gem 'puma'

# Bundle and transpile JavaScript [https://github.com/rails/jsbundling-rails]
gem 'jsbundling-rails'

# Hotwire's SPA-like page accelerator [https://turbo.hotwired.dev]
gem 'turbo-rails'

# Hotwire's modest JavaScript framework [https://stimulus.hotwired.dev]
gem 'stimulus-rails'

# Bundle and process CSS [https://github.com/rails/cssbundling-rails]
gem 'cssbundling-rails'

# Build JSON APIs with ease [https://github.com/rails/jbuilder]
# gem "jbuilder"

# Use Redis adapter to run Action Cable in production
gem 'redis'

# Use Kredis to get higher-level data types in Redis [https://github.com/rails/kredis]
# gem "kredis"

# Use Active Model has_secure_password [https://guides.rubyonrails.org/active_model_basics.html#securepassword]
# gem "bcrypt"

# Reduces boot times through caching; required in config/boot.rb
gem 'bootsnap', require: false

# Use Sass to process CSS
# gem "sassc-rails"

# Use Active Storage variants [https://guides.rubyonrails.org/active_storage_overview.html#transforming-images]
gem 'image_processing'

# Simple health check of Rails app for use with uptime checking sites like newrelic and pingdom
gem 'health_check'

group :production do
  # Rack middleware for blocking & throttling.
  gem 'rack-attack'

  # Abort requests that are taking too long.
  gem 'rack-timeout', require: 'rack/timeout/base'

  # Fix request.ip and request.remote_ip in rails when using cloudflare
  gem 'cloudflare-rails'
end

group :development, :test do
  # See https://guides.rubyonrails.org/debugging_rails_applications.html#debugging-with-the-debug-gem
  gem 'debug', platforms: %i[mri mingw x64_mingw]

  # Lint ERB or HTML files
  gem 'erb_lint', require: false

  # Rubocop takes care of the quality of the code
  gem 'rubocop', require: false
  gem 'rubocop-performance', require: false
  gem 'rubocop-rails', require: false
  gem 'rubocop-rspec'
  gem 'rubocop-thread_safety'

  # Required for prettier
  gem 'prettier_print'
  gem 'syntax_tree'
  gem 'syntax_tree-haml'
  gem 'syntax_tree-rbs'

  # A static analysis security vulnerability scanner for Ruby on Rails applications
  gem 'brakeman'

  # A Rake task gem that helps you find the unused routes and controller actions for your Rails 3+ app
  gem 'traceroute'
end

group :development do
  # Use console on exceptions pages [https://github.com/rails/web-console]
  gem 'web-console'

  # Better error page for Rack apps
  gem 'better_errors'
  gem 'binding_of_caller'

  # Annotate Rails classes with schema and routes info
  gem 'annotate'

  # Add speed badges [https://github.com/MiniProfiler/rack-mini-profiler]
  # gem "rack-mini-profiler"
end

group :test do
  # RSpec for Rails 5+
  gem 'rspec-rails'

  # Acceptance test framework for web applications
  gem 'capybara'
  gem 'selenium-webdriver'

  # A library for setting up Ruby objects as test data.
  gem 'factory_bot_rails'

  # A library for generating fake data such as names, addresses, and phone numbers.
  gem 'faker'

  # Code coverage for Ruby with a powerful configuration library and automatic merging of coverage across test suites
  # gem 'simplecov', require: false

  # Library for stubbing and setting expectations on HTTP requests in Ruby.
  # gem 'webmock'
end
