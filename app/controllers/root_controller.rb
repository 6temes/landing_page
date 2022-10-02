class RootController < ApplicationController
  def show
    if request.env["rack.locale"] == :ja
      redirect_to '/japanese'
    else
      redirect_to '/english'
    end
  end
end
