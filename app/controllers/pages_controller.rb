class PagesController < ApplicationController
    before_action :authenticate_user!, only: [:app]
    
    def index
    end
end