# This file is used by Rack-based servers to start the application.

require 'rack'
require 'rack/contrib'
require_relative "config/environment"

use Rack::Locale

run Rails.application
Rails.application.load_server
